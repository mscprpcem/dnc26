import React from 'react';

export const DncCFP = () => {
  return (
    <section className="section band--mint" id="cfp" style={{ scrollMarginTop: '80px' }}>
      <div className="wrap">
        <div className="sechead sechead--split">
          <div>
            <p className="eyebrow">Call for speakers</p>
            <h2 className="h-sec" style={{ marginBottom: 0 }}>
              The stage is yours.<br />
              Share your .NET story.
            </h2>
          </div>
          <p className="lede">
            Whether you are a Microsoft MVP, open-source maintainer, cloud practitioner, or student builder with an ambitious project &mdash; our Call for Proposals is open on Sessionize!
          </p>
        </div>

        {/* Call for Speakers Focus Topics */}
        <div className="looking">
          <article className="lcard" style={{ '--tc': 'var(--blue, #00B4D8)' }}>
            <span className="lcard__track">Topic · Runtime &amp; Performance</span>
            <h3>Engineers who ship C#</h3>
            <ul>
              <li>.NET 11 internals, JIT compilation, and Native AOT</li>
              <li>High-throughput APIs and memory optimization</li>
              <li>Modern C# 14 language features in production</li>
            </ul>
          </article>

          <article className="lcard" style={{ '--tc': 'var(--magenta, #E0199E)' }}>
            <span className="lcard__track">Topic · AI &amp; Intelligence</span>
            <h3>Autonomous AI builders</h3>
            <ul>
              <li>Semantic Kernel SDK multi-agent orchestration</li>
              <li>Enterprise RAG systems with Azure OpenAI &amp; AI Search</li>
              <li>Local SLM inference with ONNX Runtime &amp; ML.NET</li>
            </ul>
          </article>

          <article className="lcard" style={{ '--tc': 'var(--gold, #FFE89E)' }}>
            <span className="lcard__track">Topic · Cloud-Native Systems</span>
            <h3>Cloud &amp; DevOps architects</h3>
            <ul>
              <li>.NET Aspire for multi-service local composition</li>
              <li>Azure Container Apps, Kubernetes, and serverless</li>
              <li>OpenTelemetry monitoring, tracing, and resilience</li>
            </ul>
          </article>

          <article className="lcard" style={{ '--tc': 'var(--teal, #00F0FF)' }}>
            <span className="lcard__track">Topic · Full-Stack &amp; Web</span>
            <h3>Frontend &amp; client crafters</h3>
            <ul>
              <li>Blazor WebAssembly &amp; server streaming UI</li>
              <li>Cross-platform desktop &amp; mobile with .NET MAUI</li>
              <li>Real-time apps with SignalR &amp; Minimal APIs</li>
            </ul>
          </article>
        </div>

        {/* Call For Speakers Box */}
        <div className="cfp">
          <div className="cfp__main">
            <div className="flex items-center gap-3 mb-2">
              <p className="eyebrow" style={{ margin: 0 }}>Sessionize submission</p>
              <img
                src="/CFP%20Partner/sessionize-logo.png"
                alt="Sessionize"
                className="h-5 max-w-[120px] object-contain"
              />
            </div>
            <h3>Put your session on the official schedule.</h3>
            <p>
              First-time speaker or veteran Microsoft MVP &mdash; full 40-minute deep-dives and 20-minute lightning sessions are equally welcomed.
            </p>
            <div className="cfp__cta">
              <a
                className="btn btn--primary btn--lg"
                href="https://sessionize.com/dnc26/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Submit your session on Sessionize</span>
                <svg className="btn__arrow" width="18" height="18" aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </a>
            </div>
          </div>

          <ul className="cfp__facts">
            <li>
              <b>4</b>
              <span>technical stages</span>
            </li>
            <li>
              <b>16+</b>
              <span>breakout sessions</span>
            </li>
            <li>
              <b>500+</b>
              <span>engineers in audience</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DncCFP;
