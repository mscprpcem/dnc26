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
  const [iframeHeight, setIframeHeight] = useState(650);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);
  const [htmlContent, setHtmlContent] = useState('');
  const [refreshKey, setRefreshKey] = useState(0);

  const iframeRef = useRef(null);

  const activeViewUrl = getSessionizeViewUrl(activeTab, eventId);
  const activeViewMeta = SESSIONIZE_VIEWS.find((v) => v.id === activeTab) || SESSIONIZE_VIEWS[0];

  // Check endpoint connectivity and retrieve live HTML data when view changes
  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    setHasError(false);

    checkEndpointStatus(activeViewUrl, refreshKey > 0)
      .then((status) => {
        if (!isMounted) return;
        setIsLoading(false);
        if (!status.ok && status.status === 404) {
          setHasError(true);
          setErrorMessage('The Sessionize schedule endpoint returned 404 or is currently being configured.');
        } else if (!status.ok) {
          setHasError(true);
          setErrorMessage(status.error || 'Unable to connect to Sessionize.');
        } else if (status.isEmpty) {
          setIsEmpty(true);
          setHtmlContent('');
        } else {
          setIsEmpty(false);
          setHtmlContent(status.html || '');
        }
      })
      .catch((err) => {
        if (!isMounted) return;
        setIsLoading(false);
        setHasError(true);
        setErrorMessage(err.message || 'Error connecting to Sessionize.');
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
        const newHeight = Math.max(260, Math.min(Math.ceil(event.data.height) + 16, 2800));
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

  // Generate iframe document using live HTML content from Sessionize
  const embedDoc = generateSessionizeEmbedDoc(
    htmlContent || activeViewUrl,
    `.NET Conf 2026 Amravati - ${activeViewMeta.label}`
  );

  return (
    <div className={`w-full ${className}`}>
      
      {/* 1. Header (Compact, modern branding) */}
      {showHeader && (
        <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#EEEAFB] text-[#512BD4] text-xs font-mono font-bold tracking-wide mb-2 border-[1.5px] border-black shadow-[1.5px_1.5px_0px_0px_#000] uppercase">
            <Calendar className="w-3.5 h-3.5 text-[#512BD4]" />
            <span>.NET Conf 2026 Amravati · Sessionize Integration</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-black font-sans uppercase tracking-tight mb-1.5 leading-tight">
            Conference <span className="text-[#512BD4]">Schedule</span>
          </h2>

          <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
            Explore the sessions, meet the speakers, and plan your conference experience.
          </p>

          <div className="w-12 h-1 bg-[#512BD4] rounded-full mx-auto mt-2.5" />
        </div>
      )}

      {/* 2. Responsive View Selector Tabs */}
      <div className="flex items-center justify-center mb-5">
        <div 
          role="tablist" 
          aria-label="Sessionize Schedule Views"
          className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-xl bg-white border-[2px] border-black shadow-[3px_3px_0px_0px_#000] w-full sm:w-auto"
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
                    setIframeHeight(tab.id === 'speakers' || tab.id === 'speakerWall' ? 380 : 650);
                  }
                }}
                className={`flex-1 sm:flex-initial px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer select-none ${
                  isActive
                    ? 'bg-[#512BD4] text-white border-[1.5px] border-black shadow-[1.5px_1.5px_0px_0px_#000]'
                    : 'text-stone-700 hover:text-black hover:bg-[#EEEAFB]'
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
        className="relative w-full rounded-2xl bg-white border-[2px] sm:border-[2.5px] border-black overflow-hidden shadow-[4px_4px_0px_0px_#000]"
      >
        {/* Loading Overlay */}
        {isLoading && (
          <div className="p-8 text-center flex flex-col items-center justify-center">
            <div className="w-8 h-8 border-[3px] border-black border-t-[#512BD4] rounded-full animate-spin mb-2.5" />
            <p className="text-xs font-mono font-bold text-[#512BD4]">
              Checking {activeViewMeta.label}...
            </p>
          </div>
        )}

        {/* Error Fallback Card */}
        {hasError && !isLoading && (
          <div className="p-6 sm:p-8 text-center max-w-md mx-auto">
            <div className="w-10 h-10 rounded-full bg-[#EEEAFB] text-[#512BD4] border-[2px] border-black flex items-center justify-center mx-auto mb-3 shadow-[2px_2px_0px_0px_#000]">
              <AlertCircle className="w-5 h-5 stroke-[2.5]" />
            </div>

            <h3 className="text-base font-black font-sans uppercase text-black mb-1">
              Unable to Load Schedule
            </h3>

            <p className="text-xs text-stone-600 font-sans leading-relaxed mb-4">
              {errorMessage || 'The schedule could not be loaded at this moment.'}
            </p>

            <button
              type="button"
              onClick={handleRetry}
              className="px-4 py-2 rounded-xl text-xs font-mono font-black uppercase bg-[#512BD4] text-white hover:bg-[#4322B0] border-[2px] border-black shadow-[2px_2px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all inline-flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCw className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Retry</span>
            </button>
          </div>
        )}

        {/* COMING SOON CARD: Rendered with official .NET Bot mascot when Sessionize has no published data yet */}
        {!hasError && !isLoading && isEmpty && (
          <div className="py-8 sm:py-10 px-4 sm:px-6 text-center max-w-lg mx-auto">
            
            {/* Official .NET Bot Mascot Avatar */}
            <div className="relative mx-auto mb-3.5 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#EEEAFB] border-[2px] border-black flex items-center justify-center shadow-[3px_3px_0px_0px_#000] group">
              <img 
                src="/mascot/bot_frontal.png" 
                alt=".NET Bot Mascot" 
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain drop-shadow-sm select-none transition-transform duration-300 group-hover:scale-110" 
                loading="lazy"
              />
              <span 
                className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-[1.5px] border-black shadow-xs" 
                title="Sessionize Feed Connected" 
              />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-[#FFD13B] text-black text-[11px] font-mono font-bold uppercase tracking-wider mb-2 border-[1.5px] border-black shadow-[1.5px_1.5px_0px_0px_#000]">
              <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
              <span>Schedule in Preparation</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black font-sans uppercase text-black mb-2 tracking-tight">
              Schedule Coming Soon
            </h3>

            <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed max-w-md mx-auto mb-4">
              Our Technical Advisory Board is finalizing session slots and room assignments. As soon as the schedule is published on Sessionize, the live interactive grid will appear here automatically.
            </p>

            <button
              type="button"
              onClick={handleRetry}
              className="px-5 py-2.5 rounded-xl text-xs font-mono font-black uppercase bg-[#512BD4] text-white hover:bg-[#4322B0] border-[2px] border-black shadow-[3px_3px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all inline-flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <RotateCw className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Check for Updates from Sessionize</span>
            </button>
          </div>
        )}

        {/* LIVE IFRAME: Rendered ONLY when Sessionize has published sessions */}
        {!hasError && !isLoading && !isEmpty && (
          <iframe
            key={`${activeTab}-${refreshKey}`}
            ref={iframeRef}
            srcDoc={embedDoc}
            title={`.NET Conf 2026 Amravati Conference Schedule - ${activeViewMeta.label}`}
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-popups-to-escape-sandbox"
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
