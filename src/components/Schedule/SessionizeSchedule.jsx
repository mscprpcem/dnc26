import React, { useState, useEffect, useRef } from 'react';
import { 
  Calendar, 
  Grid, 
  List, 
  Users, 
  Mic, 
  AlertCircle, 
  RotateCw
} from 'lucide-react';
import { 
  SESSIONIZE_VIEWS, 
  getSessionizeViewUrl, 
  generateSessionizeEmbedDoc, 
  checkEndpointStatus,
  SESSIONIZE_DEFAULT_EVENT_ID
} from '../../utils/sessionizeApi.js';

/**
 * Reusable Sessionize Schedule Component for .NET Conf 2026 Amravati
 * Integrates Sessionize Styled HTML via isolated responsive iframe
 */
export const SessionizeSchedule = ({
  eventId = SESSIONIZE_DEFAULT_EVENT_ID,
  defaultView = 'gridSmart',
  showHeader = true,
  className = '',
}) => {
  const [activeTab, setActiveTab] = useState(defaultView);
  const [iframeHeight, setIframeHeight] = useState(300);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isEmpty, setIsEmpty] = useState(true); // Default to empty/coming-soon until data is verified
  const [refreshKey, setRefreshKey] = useState(0);

  const iframeRef = useRef(null);

  const activeViewUrl = getSessionizeViewUrl(activeTab, eventId);
  const activeViewMeta = SESSIONIZE_VIEWS.find((v) => v.id === activeTab) || SESSIONIZE_VIEWS[0];

  // Check endpoint connectivity and data availability when view changes
  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    setHasError(false);

    checkEndpointStatus(activeViewUrl)
      .then((status) => {
        if (!isMounted) return;
        setIsLoading(false);
        if (!status.ok && status.status === 404) {
          setHasError(true);
          setErrorMessage('The Sessionize schedule endpoint returned 404 or is currently being configured.');
        } else if (status.isEmpty) {
          setIsEmpty(true);
        } else {
          setIsEmpty(false);
        }
      })
      .catch((err) => {
        if (!isMounted) return;
        setIsLoading(false);
        setIsEmpty(true);
        console.warn('Endpoint connectivity check:', err);
      });

    return () => {
      isMounted = false;
    };
  }, [activeViewUrl, refreshKey]);

  // Listen for resize and status messages from the embedded iframe
  useEffect(() => {
    const handleMessage = (event) => {
      if (!event.data || typeof event.data !== 'object') return;

      if (event.data.type === 'sessionize-resize' && typeof event.data.height === 'number') {
        const newHeight = Math.max(160, Math.min(event.data.height + 20, 2600));
        setIframeHeight(newHeight);
      }

      if (event.data.type === 'sessionize-status') {
        if (event.data.status === 'loaded') {
          setIsLoading(false);
        } else if (event.data.status === 'error') {
          setHasError(true);
          setIsLoading(false);
          setErrorMessage('Unable to load schedule from Sessionize. Please check your connection.');
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const handleRetry = () => {
    setIsLoading(true);
    setHasError(false);
    setRefreshKey((k) => k + 1);
  };

  const getTabIcon = (tabId) => {
    switch (tabId) {
      case 'gridSmart':
        return <Grid className="w-3.5 h-3.5 shrink-0" />;
      case 'sessions':
        return <List className="w-3.5 h-3.5 shrink-0" />;
      case 'speakers':
        return <Mic className="w-3.5 h-3.5 shrink-0" />;
      case 'speakerWall':
        return <Users className="w-3.5 h-3.5 shrink-0" />;
      default:
        return <Calendar className="w-3.5 h-3.5 shrink-0" />;
    }
  };

  // Generate iframe document using documented embed mechanism
  const embedDoc = generateSessionizeEmbedDoc(
    activeViewUrl,
    `.NET Conf 2026 Amravati - ${activeViewMeta.label}`
  );

  return (
    <div className={`w-full ${className}`}>
      
      {/* 1. Header (Compact, modern branding) */}
      {showHeader && (
        <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#F0EFFB] text-[#7046C8] text-xs font-semibold tracking-wide mb-2 border border-[#A99AE8]/40">
            <Calendar className="w-3.5 h-3.5 text-[#7046C8]" />
            <span>.NET Conf 2026 Amravati · Sessionize Integration</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#292735] font-montserrat tracking-tight mb-1.5 leading-tight">
            Conference Schedule
          </h2>

          <p className="text-xs sm:text-sm text-[#292735]/80 font-inter leading-relaxed">
            Explore the sessions, meet the speakers, and plan your conference experience.
          </p>

          <div className="w-12 h-1 bg-[#7046C8] rounded-full mx-auto mt-2.5" />
        </div>
      )}

      {/* 2. Responsive View Selector Tabs */}
      <div className="flex items-center justify-center mb-5">
        <div 
          role="tablist" 
          aria-label="Sessionize Schedule Views"
          className="flex flex-wrap items-center justify-center gap-1 p-1 rounded-xl bg-[#F0EFFB] border border-[#A99AE8]/40 w-full sm:w-auto"
        >
          {SESSIONIZE_VIEWS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                type="button"
                onClick={() => {
                  if (activeTab !== tab.id) {
                    setActiveTab(tab.id);
                    setIsLoading(true);
                  }
                }}
                className={`flex-1 sm:flex-initial px-3.5 py-1.5 rounded-lg text-xs font-medium font-inter transition-all flex items-center justify-center gap-1.5 cursor-pointer select-none ${
                  isActive
                    ? 'bg-white text-[#7046C8] shadow-xs font-semibold'
                    : 'text-[#292735]/70 hover:text-[#7046C8] hover:bg-white/60'
                }`}
                title={tab.description}
              >
                {getTabIcon(tab.id)}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Schedule Content Container (Tight padding, no excessive blank space) */}
      <div 
        role="tabpanel"
        id={`panel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
        className="relative w-full rounded-2xl bg-white border border-[#A99AE8]/40 overflow-hidden shadow-xs"
      >
        {/* Loading Overlay */}
        {isLoading && (
          <div className="p-8 text-center flex flex-col items-center justify-center">
            <div className="w-7 h-7 border-2 border-[#A99AE8]/30 border-t-[#7046C8] rounded-full animate-spin mb-2.5" />
            <p className="text-xs font-semibold text-[#7046C8] font-inter">
              Checking {activeViewMeta.label}...
            </p>
          </div>
        )}

        {/* Error Fallback Card */}
        {hasError && !isLoading && (
          <div className="p-6 sm:p-8 text-center max-w-md mx-auto">
            <div className="w-10 h-10 rounded-full bg-[#F0EFFB] text-[#7046C8] flex items-center justify-center mx-auto mb-3 border border-[#A99AE8]/40">
              <AlertCircle className="w-5 h-5" />
            </div>

            <h3 className="text-base font-bold font-montserrat text-[#292735] mb-1">
              Unable to Load Schedule
            </h3>

            <p className="text-xs text-[#292735]/75 font-inter leading-relaxed mb-4">
              {errorMessage || 'The schedule could not be loaded at this moment.'}
            </p>

            <button
              type="button"
              onClick={handleRetry}
              className="px-3.5 py-1.5 rounded-xl text-xs font-semibold font-inter bg-[#7046C8] text-white hover:bg-[#5833A5] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCw className="w-3 h-3" />
              <span>Retry</span>
            </button>
          </div>
        )}

        {/* COMING SOON CARD: Rendered with official .NET Bot mascot when Sessionize has no published data yet */}
        {!hasError && !isLoading && isEmpty && (
          <div className="py-8 sm:py-10 px-4 sm:px-6 text-center max-w-lg mx-auto">
            
            {/* Official .NET Bot Mascot Avatar */}
            <div className="relative mx-auto mb-3.5 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#F0EFFB] border border-[#A99AE8]/50 flex items-center justify-center shadow-xs group">
              <img 
                src="/mascot/bot_frontal.png" 
                alt=".NET Bot Mascot" 
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain drop-shadow-sm select-none transition-transform duration-300 group-hover:scale-110" 
                loading="lazy"
              />
              <span 
                className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white shadow-xs" 
                title="Sessionize Feed Connected" 
              />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#F0EFFB] text-[#7046C8] text-[11px] font-bold uppercase tracking-wider mb-2 border border-[#A99AE8]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7046C8] animate-pulse" />
              <span>Schedule in Preparation</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-montserrat text-[#292735] mb-2 tracking-tight">
              Schedule Coming Soon
            </h3>

            <p className="text-xs sm:text-sm text-[#292735]/75 font-inter leading-relaxed max-w-md mx-auto">
              Our Technical Advisory Board is finalizing session slots and room assignments. As soon as the schedule is published on Sessionize, the live interactive grid will appear here automatically.
            </p>
          </div>
        )}

        {/* LIVE IFRAME: Rendered ONLY when Sessionize has published sessions */}
        {!hasError && !isLoading && !isEmpty && (
          <iframe
            key={`${activeTab}-${refreshKey}`}
            ref={iframeRef}
            srcDoc={embedDoc}
            title={`.NET Conf 2026 Amravati Conference Schedule - ${activeViewMeta.label}`}
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            loading="lazy"
            style={{
              width: '100%',
              height: `${iframeHeight}px`,
              border: 'none',
              display: 'block',
              transition: 'height 0.2s ease-out',
            }}
          />
        )}
      </div>

    </div>
  );
};

export default SessionizeSchedule;
