import React, { useState } from 'react';
import {
  ArrowRight,
  Calendar,
  MapPin,
  Sparkles,
  Terminal,
  Check,
  Copy,
  CheckCircle2,
  Play,
  Code2,
  Minus,
  X,
} from 'lucide-react';
import { Container } from '../ui/Container.jsx';
import { Button } from '../ui/Button.jsx';
import { eventData } from '../../data/event.js';

export const Hero = () => {
  const [copied, setCopied] = useState(false);
  const [activeSnippet, setActiveSnippet] = useState('csharp');
  const [viewMode, setViewMode] = useState('code'); // 'code' | 'output'
  const [isRunning, setIsRunning] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [activeQuery, setActiveQuery] = useState('event');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const showNotification = (msg) => {
    setFeedbackMessage(msg);
    setTimeout(() => setFeedbackMessage(''), 2500);
  };

  const copyCode = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    showNotification('Code copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  // Red button: Reset / Close
  const handleRedClick = () => {
    setViewMode('code');
    setIsMinimized(false);
    setIsRunning(false);
    setActiveQuery('event');
    showNotification('Editor reset to initial state.');
  };

  // Yellow button: Minimize / Collapse
  const handleYellowClick = () => {
    setIsMinimized(!isMinimized);
    showNotification(isMinimized ? 'Window restored.' : 'Window collapsed.');
  };

  // Green button: Maximize & Run
  const handleGreenClick = () => {
    setIsMinimized(false);
    handleRunCode();
  };

  const handleRunCode = (queryType = activeQuery) => {
    setActiveQuery(queryType);
    setIsRunning(true);
    setViewMode('output');
    setIsMinimized(false);
    showNotification('Compiling & running .NET 9 API...');
    setTimeout(() => {
      setIsRunning(false);
    }, 400);
  };

  const codeSnippets = {
    csharp: `// .NET Conf 2026 — Amravati Live Conference API
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddOpenAIChatCompletion(
    endpoint: "https://dnc26-ai.cognitiveservices.azure.com/",
    apiKey: builder.Configuration["AzureAI:Key"]
);

var app = builder.Build();

// Live Conference Endpoint
app.MapGet("/api/conference", (string? query) => query switch
{
    "speakers" => Results.Ok(new {
        Keynote = "Anuraj P. (Microsoft MVP)",
        Engineers = new[] { "Madhava Ganesh (MSFT)", "Kshitiz Kalra (MSFT)", "Lakshit Pant (MSFT)" }
    }),
    "passes" => Results.Ok(new {
        Community = "Free Admission",
        Student = "₹149 (Kit + Mentorship)",
        Platform = "KonfHub"
    }),
    _ => Results.Ok(new {
        Event = ".NET Conf 2026 Amravati",
        Host = "Microsoft Student Club PRPCEM",
        Venue = "Swami Vivekananda Auditorium, PRPCEM",
        Status = "Live & Ready"
    })
});

app.Run();`,
    cloud: `// Azure Container Apps Infrastructure for .NET Conf 2026
resource containerApp 'Microsoft.App/containerApps@2024-03-01' = {
  name: 'dotnetconf-2026-amravati'
  location: 'centralindia'
  properties: {
    configuration: {
      ingress: {
        external: true
        targetPort: 8080
      }
    }
    template: {
      containers: [
        {
          name: 'dnc26-api'
          image: 'mcr.microsoft.com/dotnet/aspnet:9.0'
        }
      ]
    }
  }
}`,
  };

  const responses = {
    event: {
      statusCode: 200,
      statusText: 'OK',
      timeMs: 14,
      payload: {
        conference: '.NET Conf 2026',
        edition: 'Central India Developer Gathering',
        location: 'Amravati, Maharashtra, India',
        organizer: 'Microsoft Student Club (MSC) @ PRPCEM',
        venue: 'Swami Vivekananda Auditorium, PRPCEM Campus',
        framework: '.NET 9.0 / C# 13',
        tracks: ['Cloud & .NET Architecture', 'AI & Emerging Tech'],
        status: 'Registrations Live on KonfHub',
      },
    },
    speakers: {
      statusCode: 200,
      statusText: 'OK',
      timeMs: 18,
      payload: {
        keynote: {
          speaker: 'Anuraj P.',
          title: 'Microsoft MVP & Senior Cloud Architect',
          topic: 'Building Next-Gen Intelligent Applications with .NET & AI',
        },
        featuredSpeakers: [
          { name: 'Madhava Ganesh', role: 'Software Engineer, Microsoft', topic: 'ASP.NET Core 9 Cloud-Native' },
          { name: 'Kshitiz Kalra', role: 'Software Engineer, Microsoft', topic: 'AI Agents with Semantic Kernel' },
          { name: 'Lakshit Pant', role: 'Software Engineer, Microsoft', topic: 'C# 13 High-Performance Computing' },
        ],
      },
    },
    passes: {
      statusCode: 200,
      statusText: 'OK',
      timeMs: 11,
      payload: {
        registrationPortal: 'https://konfhub.com',
        tiers: [
          { tier: 'Community Pass', price: 'Free', access: 'All Sessions & Expo' },
          { tier: 'Student Pass', price: '₹149', access: 'Welcome Kit + Mentorship + Food' },
          { tier: 'Professional Pass', price: '₹499', access: 'VIP Mixer + Reserved Front Row' },
        ],
        instantConfirmation: true,
      },
    },
  };

  const currentResponse = responses[activeQuery] || responses.event;

  return (
    <section className="relative overflow-hidden pt-8 pb-14 sm:pt-12 sm:pb-18 lg:pt-16 lg:pb-24 border-b border-[#E5E7EB] bg-linear-to-b from-[#F7F7F8]/80 via-white to-white">
      {/* Subtle technical background grid */}
      <div className="absolute inset-0 tech-subtle-grid pointer-events-none opacity-50" />

      {/* Gentle ambient glow in Microsoft/.NET purple & Azure blue */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[360px] bg-linear-to-tr from-[#512BD4]/4 via-[#0078D4]/4 to-transparent blur-3xl pointer-events-none rounded-full" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* LEFT: Event Information + CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Organizer Credibility Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F2FE] border border-[#DDD4FA] text-xs font-semibold text-[#512BD4] mb-4 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#512BD4]" />
              <span>{eventData.organizer.badge}</span>
            </div>

            {/* Event Name */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#171717] leading-[1.1] sm:leading-[1.08]">
              .NET Conf <span className="text-[#512BD4]">2026</span>
            </h1>

            {/* Official Tagline */}
            <div className="mt-2 text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-[#171717]">
              Connect. Learn. Build.
            </div>

            {/* Event Location & Year */}
            <div className="mt-3 flex flex-wrap items-center gap-y-2 gap-x-3 sm:gap-x-4 text-xs sm:text-base font-semibold text-[#5F6368]">
              <span className="inline-flex items-center gap-1.5 text-[#171717]">
                <MapPin className="w-4 h-4 text-[#0078D4]" />
                {eventData.location.city}, {eventData.location.state}
              </span>
              <span className="text-[#E5E7EB]">·</span>
              <span className="inline-flex items-center gap-1.5 text-[#512BD4]">
                <Calendar className="w-4 h-4 text-[#512BD4]" />
                {eventData.date.formattedDate}
              </span>
            </div>

            {/* Concise Description */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-[#5F6368] leading-relaxed max-w-xl">
              A community-driven developer conference bringing together developers, students,
              technology enthusiasts and professionals to explore .NET, C#, Azure, AI, cloud and
              modern software development.
            </p>

            {/* CTA Buttons - Responsive Stacking */}
            <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                href={eventData.registrationUrl}
                target="_blank"
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto font-bold shadow-md shadow-[#512BD4]/15"
              >
                Register Now on KonfHub
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="#agenda"
                className="w-full sm:w-auto font-semibold"
              >
                Explore Agenda
              </Button>
            </div>

            {/* Trust and Key Points Strip */}
            <div className="mt-6 sm:mt-7 flex flex-wrap items-center gap-y-2 gap-x-4 sm:gap-x-5 text-xs font-medium text-[#5F6368]">
              <span className="inline-flex items-center gap-1.5 text-[#171717]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                Free Community Passes
              </span>
              <span className="inline-flex items-center gap-1.5 text-[#171717]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                Microsoft MVPs & Engineers
              </span>
              <span className="inline-flex items-center gap-1.5 text-[#171717]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                Parallel Multi-Track Agenda
              </span>
            </div>

            {/* Venue & Host Credibility Line */}
            <div className="mt-6 sm:mt-7 pt-4 sm:pt-5 border-t border-[#E5E7EB] w-full flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-[#5F6368]">
              <span className="font-semibold text-[#171717]">Venue Host:</span>
              <span className="px-2.5 py-1 rounded bg-[#F7F7F8] border border-[#E5E7EB] font-medium text-[#171717]">
                {eventData.organizer.institution}
              </span>
              <span className="text-[#8A8F98]">·</span>
              <span className="font-medium text-[#512BD4]">Swami Vivekananda Auditorium</span>
            </div>
          </div>

          {/* RIGHT: Technical Interactive Window */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Toast Notification */}
              {feedbackMessage && (
                <div className="absolute -top-9 left-1/2 -translate-x-1/2 z-20 px-3 py-1 rounded-md bg-[#171717] text-white text-xs font-mono shadow-md whitespace-nowrap">
                  {feedbackMessage}
                </div>
              )}

              {/* Card framing the technical interactive visual */}
              <div className="conf-card overflow-hidden bg-white border border-[#E5E7EB] shadow-xl">
                {/* Responsive Window Title Bar */}
                <div className="px-3.5 sm:px-4 py-2.5 bg-[#F7F7F8] border-b border-[#E5E7EB] flex flex-wrap items-center justify-between gap-2">
                  {/* Real Interactive Red, Yellow, Green Window Dots */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={handleRedClick}
                        className="w-3.5 h-3.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] flex items-center justify-center text-[8px] text-red-950 font-bold shadow-2xs hover:opacity-90 active:scale-90 transition-all cursor-pointer group"
                        title="Close / Reset Code (Click to reset)"
                        aria-label="Reset Code"
                      >
                        <X className="w-2 h-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                      <button
                        type="button"
                        onClick={handleYellowClick}
                        className="w-3.5 h-3.5 sm:w-3 sm:h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] flex items-center justify-center text-[8px] text-amber-950 font-bold shadow-2xs hover:opacity-90 active:scale-90 transition-all cursor-pointer group"
                        title={isMinimized ? 'Expand Window' : 'Minimize / Collapse Window'}
                        aria-label="Minimize Window"
                      >
                        <Minus className="w-2 h-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                      <button
                        type="button"
                        onClick={handleGreenClick}
                        className="w-3.5 h-3.5 sm:w-3 sm:h-3 rounded-full bg-[#27C93F] border border-[#1AAB29] flex items-center justify-center text-[8px] text-green-950 font-bold shadow-2xs hover:opacity-90 active:scale-90 transition-all cursor-pointer group"
                        title="Run Code & View Output"
                        aria-label="Run Code"
                      >
                        <Play className="w-1.5 h-1.5 fill-current opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    </div>

                    <span className="ml-1 font-mono text-[11px] sm:text-xs font-semibold text-[#5F6368] flex items-center gap-1">
                      <Terminal className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#512BD4]" />
                      <span className="hidden xs:inline">dotnet-conf-amravati</span>
                      <span className="xs:hidden">dnc26</span>
                    </span>
                  </div>

                  {/* Actions Bar: View Switcher & Run Button */}
                  <div className="flex items-center gap-1.5">
                    {/* View Switcher: Code vs Output */}
                    <div className="flex items-center rounded-md bg-[#E5E7EB]/70 p-0.5 text-xs font-mono">
                      <button
                        type="button"
                        onClick={() => {
                          setViewMode('code');
                          setIsMinimized(false);
                        }}
                        className={`px-2 py-0.5 rounded transition-all cursor-pointer flex items-center gap-1 ${
                          viewMode === 'code' && !isMinimized
                            ? 'bg-white text-[#171717] font-bold shadow-2xs'
                            : 'text-[#5F6368] hover:text-[#171717]'
                        }`}
                      >
                        <Code2 className="w-3 h-3" />
                        <span>Code</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setViewMode('output');
                          setIsMinimized(false);
                        }}
                        className={`px-2 py-0.5 rounded transition-all cursor-pointer flex items-center gap-1 ${
                          viewMode === 'output' && !isMinimized
                            ? 'bg-white text-[#059669] font-bold shadow-2xs'
                            : 'text-[#5F6368] hover:text-[#171717]'
                        }`}
                      >
                        <Terminal className="w-3 h-3" />
                        <span>Output</span>
                      </button>
                    </div>

                    {/* Prominent Play / Run Button */}
                    <button
                      type="button"
                      onClick={() => handleRunCode()}
                      className="px-2 sm:px-2.5 py-1 rounded-md bg-[#059669] hover:bg-[#047857] active:scale-95 text-white text-xs font-semibold font-mono flex items-center gap-1 shadow-xs transition-all cursor-pointer shrink-0"
                      title="Run code with .NET SDK"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>Run API</span>
                    </button>

                    {/* Copy Button */}
                    <button
                      type="button"
                      onClick={() => copyCode(codeSnippets[activeSnippet])}
                      className="p-1 rounded text-[#5F6368] hover:text-[#171717] hover:bg-white transition-colors cursor-pointer"
                      title="Copy code"
                      aria-label="Copy code"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Minimized Window State */}
                {isMinimized ? (
                  <div className="p-4 bg-[#F7F7F8] text-center text-xs font-mono text-[#5F6368] flex items-center justify-between">
                    <span>Window Minimized · Click Yellow to restore or Green to Run</span>
                    <button
                      type="button"
                      onClick={() => setIsMinimized(false)}
                      className="px-2.5 py-1 rounded bg-white border border-[#E5E7EB] text-[#171717] font-semibold text-xs hover:bg-[#F0F0F2]"
                    >
                      Restore Editor
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Sub-bar: Snippet Switcher if in code mode */}
                    {viewMode === 'code' ? (
                      <div className="px-3 sm:px-4 py-1.5 bg-[#FAFAFA] border-b border-[#E5E7EB] flex items-center justify-between text-xs font-mono">
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => setActiveSnippet('csharp')}
                            className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
                              activeSnippet === 'csharp'
                                ? 'text-[#512BD4] font-bold bg-[#F5F2FE] border border-[#DDD4FA]'
                                : 'text-[#5F6368] hover:text-[#171717]'
                            }`}
                          >
                            Program.cs
                          </button>
                          <button
                            type="button"
                            onClick={() => setActiveSnippet('cloud')}
                            className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
                              activeSnippet === 'cloud'
                                ? 'text-[#0078D4] font-bold bg-[#EFF6FC] border border-[#C7E0F4]'
                                : 'text-[#5F6368] hover:text-[#171717]'
                            }`}
                          >
                            main.bicep
                          </button>
                        </div>
                        <span className="text-[10px] sm:text-[11px] text-[#8A8F98]">
                          {activeSnippet === 'csharp' ? 'C# 13 · .NET 9.0' : 'Bicep · Azure Cloud'}
                        </span>
                      </div>
                    ) : (
                      /* Live Query Selector Bar when in Output Mode */
                      <div className="px-3 sm:px-4 py-2 bg-[#1E1E1E] border-b border-gray-800 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="text-gray-400 text-[11px]">Query:</span>
                          <button
                            type="button"
                            onClick={() => handleRunCode('event')}
                            className={`px-2 py-0.5 rounded text-[11px] transition-colors cursor-pointer ${
                              activeQuery === 'event'
                                ? 'bg-[#512BD4] text-white font-bold'
                                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                            }`}
                          >
                            /event
                          </button>
                          <button
                            type="button"
                            onClick={() => handleRunCode('speakers')}
                            className={`px-2 py-0.5 rounded text-[11px] transition-colors cursor-pointer ${
                              activeQuery === 'speakers'
                                ? 'bg-[#0078D4] text-white font-bold'
                                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                            }`}
                          >
                            /speakers
                          </button>
                          <button
                            type="button"
                            onClick={() => handleRunCode('passes')}
                            className={`px-2 py-0.5 rounded text-[11px] transition-colors cursor-pointer ${
                              activeQuery === 'passes'
                                ? 'bg-emerald-600 text-white font-bold'
                                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                            }`}
                          >
                            /passes
                          </button>
                        </div>

                        <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span>200 OK ({currentResponse.timeMs}ms)</span>
                        </div>
                      </div>
                    )}

                    {/* Main Body: Code Editor View OR Live Output Terminal View */}
                    {viewMode === 'code' ? (
                      <div className="p-3 sm:p-5 bg-white font-mono text-xs sm:text-[12.5px] leading-relaxed text-[#171717] overflow-x-auto flex min-h-[280px] sm:min-h-[300px]">
                        {/* Line numbers column */}
                        <div className="select-none pr-2.5 sm:pr-3 mr-2.5 sm:mr-3 border-r border-[#E5E7EB] text-right text-[#8A8F98]/60 font-mono text-[11px] leading-relaxed space-y-0.5">
                          {codeSnippets[activeSnippet].split('\n').map((_, i) => (
                            <div key={i}>{i + 1}</div>
                          ))}
                        </div>
                        {/* Code content with clean modern styling */}
                        <pre className="text-[#171717] selection:bg-[#512BD4]/15 flex-1 leading-relaxed">
                          <code>{codeSnippets[activeSnippet]}</code>
                        </pre>
                      </div>
                    ) : (
                      /* Live Terminal Output View */
                      <div className="p-3.5 sm:p-5 bg-[#171717] font-mono text-xs leading-relaxed text-[#F7F7F8] overflow-x-auto min-h-[280px] sm:min-h-[300px] flex flex-col justify-between">
                        <div>
                          {isRunning ? (
                            <div className="flex flex-col items-center justify-center py-14 sm:py-16 gap-3 text-[#A78BFA]">
                              <div className="w-7 h-7 border-2 border-[#512BD4] border-t-transparent rounded-full animate-spin" />
                              <div className="text-xs font-mono text-gray-300">
                                Executing endpoint with .NET 9 Kestrel runtime...
                              </div>
                            </div>
                          ) : (
                            <div className="space-y-2">
                              {/* Request Log */}
                              <div className="flex flex-wrap items-center gap-1.5 text-gray-400 text-[11px] pb-1 border-b border-gray-800">
                                <span className="text-emerald-400 font-bold">GET</span>
                                <span className="text-gray-200 break-all">
                                  https://dotnetconf.amravati.dev/api/conference?query={activeQuery}
                                </span>
                              </div>

                              {/* HTTP Response Header */}
                              <div className="flex items-center justify-between text-[11px] pt-1">
                                <span className="text-emerald-400 font-bold">HTTP/1.1 200 OK</span>
                                <span className="text-gray-400">Server: Kestrel (.NET 9.0)</span>
                              </div>

                              {/* Formatted JSON Output */}
                              <pre className="mt-2 text-emerald-300 bg-black/50 p-2.5 sm:p-3 rounded-lg border border-gray-800 text-[10.5px] sm:text-xs leading-relaxed overflow-x-auto">
                                <code>{JSON.stringify(currentResponse.payload, null, 2)}</code>
                              </pre>

                              {/* Visual Callout for the response */}
                              <div className="mt-2.5 p-2 sm:p-2.5 rounded-lg bg-[#512BD4]/15 border border-[#512BD4]/30 text-xs text-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                                <span className="flex items-center gap-1.5 text-[11px] sm:text-xs">
                                  <Sparkles className="w-3.5 h-3.5 text-[#A78BFA] shrink-0" />
                                  <span>Amravati Conference API live response</span>
                                </span>
                                <a
                                  href={eventData.registrationUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[#A78BFA] hover:text-white font-semibold underline text-[11px] self-end sm:self-auto"
                                >
                                  Claim Pass &rarr;
                                </a>
                              </div>
                            </div>
                          )}
                        </div>

                        {!isRunning && (
                          <div className="pt-3 mt-3 border-t border-gray-800 flex items-center justify-between text-[11px] text-gray-400">
                            <span className="flex items-center gap-1.5 text-emerald-400">
                              <Check className="w-3.5 h-3.5" />
                              Execution Finished (0 errors)
                            </span>
                            <button
                              type="button"
                              onClick={() => setViewMode('code')}
                              className="text-gray-400 hover:text-white underline cursor-pointer"
                            >
                              &larr; Return to Code
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </>
                )}

                {/* Technical Metric / Conference Badges */}
                <div className="px-3 sm:px-4 py-2.5 sm:py-3 bg-[#F7F7F8] border-t border-[#E5E7EB] grid grid-cols-3 gap-2 text-center">
                  <div className="p-1.5 sm:p-2 rounded bg-white border border-[#E5E7EB]/80 shadow-2xs">
                    <div className="text-[9px] sm:text-[10px] font-mono text-[#5F6368]">FRAMEWORK</div>
                    <div className="text-xs sm:text-xs font-bold font-mono text-[#512BD4]">.NET 9 / 10</div>
                  </div>
                  <div className="p-1.5 sm:p-2 rounded bg-white border border-[#E5E7EB]/80 shadow-2xs">
                    <div className="text-[9px] sm:text-[10px] font-mono text-[#5F6368]">AI ENGINE</div>
                    <div className="text-xs sm:text-xs font-bold font-mono text-[#0078D4]">Azure AI</div>
                  </div>
                  <div className="p-1.5 sm:p-2 rounded bg-white border border-[#E5E7EB]/80 shadow-2xs">
                    <div className="text-[9px] sm:text-[10px] font-mono text-[#5F6368]">COMMUNITY</div>
                    <div className="text-xs sm:text-xs font-bold font-mono text-[#171717]">MSC PRPCEM</div>
                  </div>
                </div>
              </div>

              {/* Decorative clean subtle geometric backdrop */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-[#512BD4]/15 -z-10 pointer-events-none hidden sm:block" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
