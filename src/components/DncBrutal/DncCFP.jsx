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
          <article className="lcard" style={{ '--tc': 'var(--magenta, #E0199E)' }}>
            <span className="lcard__track">Generative AI &amp; Agents</span>
            <h3>Autonomous AI builders</h3>
            <ul>
              <li>Semantic Kernel SDK multi-agent orchestration</li>
              <li>Enterprise RAG systems with Azure OpenAI &amp; AI Search</li>
              <li>Local SLM inference with ONNX Runtime &amp; ML.NET</li>
            </ul>
          </article>

          <article className="lcard" style={{ '--tc': 'var(--blue, #00B4D8)' }}>
            <span className="lcard__track">GitHub Copilot &amp; DevOps</span>
            <h3>DevOps &amp; platform engineers</h3>
            <ul>
              <li>GitHub Actions automated CI/CD pipelines</li>
              <li>AI-powered development with GitHub Copilot</li>
              <li>DevSecOps, container security &amp; cloud automation</li>
            </ul>
          </article>

          <article className="lcard" style={{ '--tc': 'var(--gold, #FFE89E)' }}>
            <span className="lcard__track">Azure Cloud Architecture</span>
            <h3>Cloud &amp; distributed architects</h3>
            <ul>
              <li>Azure Container Apps, Kubernetes &amp; Serverless</li>
              <li>.NET Aspire for multi-service cloud orchestration</li>
              <li>OpenTelemetry observability, resilience &amp; Kafka/RabbitMQ</li>
            </ul>
          </article>

          <article className="lcard" style={{ '--tc': 'var(--teal, #00F0FF)' }}>
            <span className="lcard__track">Modern .NET &amp; Web</span>
            <h3>Engineers shipping modern C#</h3>
            <ul>
              <li>.NET 11 internals, JIT compilation &amp; Native AOT</li>
              <li>Full-stack Blazor streaming &amp; reactive client UI</li>
              <li>High-throughput Minimal APIs &amp; microservices</li>
            </ul>
          </article>
        </div>

        {/* Call For Speakers Box */}
        <div className="cfp">
          <div className="cfp__main">
            <p className="eyebrow" style={{ margin: 0 }}>Call for Proposals</p>
            <h3 style={{ marginTop: '0.4rem', marginBottom: '0.8rem' }}>
              Put your session on the official schedule.
            </h3>
            <p>
              First-time speaker or veteran Microsoft MVP &mdash; full deep-dives and lightning sessions are equally welcomed across Generative AI, DevOps, Cloud Architecture &amp; Modern .NET.
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

          <div className="cfp__right">
            <ul className="cfp__facts">
              <li>
                <b>Multi-Track</b>
                <span>AI, Cloud, DevOps &amp; .NET</span>
              </li>
              <li>
                <b>All Levels</b>
                <span>First-timers to MVPs welcome</span>
              </li>
              <li>
                <b>Flexible</b>
                <span>Deep-dives &amp; lightning formats</span>
              </li>
            </ul>

            {/* Bottom Corner: Powered by Sessionize (clean, no green box) */}
            <div className="cfp__corner">
              <span className="cfp__corner-lbl">Powered by</span>
              <img
                src="/CFP%20Partner/sessionize-logo.png"
                alt="Sessionize"
                className="cfp__corner-logo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DncCFP;
