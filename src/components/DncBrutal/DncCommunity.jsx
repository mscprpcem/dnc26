import React from 'react';

export const DncCommunity = () => {
  return (
    <section className="section" id="community">
      <div className="wrap about__grid">
        <div>
          <p className="eyebrow">The community</p>
          <h2 className="h-sec">
            Powered by MSC PRPCEM,<br />
            built with the community.
          </h2>
          <div className="prose">
            <p>
              <strong>Microsoft Student Club (MSC PRPCEM)</strong> is Central India&apos;s premier developer community based at P. R. Pote Patil College of Engineering and Management, Amravati.
            </p>
            <p>
              We bring together builders across Generative AI, GitHub open-source ecosystems, Microsoft Azure cloud architecture, and modern .NET engineering to learn, build real-world software, and accelerate tech careers through hackathons, bootcamps, and summits.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '.85rem', flexWrap: 'wrap', marginTop: '2rem' }}>
            <a
              className="btn btn--primary"
              href="https://www.mscprpcem.tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Visit MSC PRPCEM</span>
              <svg className="btn__arrow" width="16" height="16" aria-hidden="true">
                <use href="#i-arrow" />
              </svg>
            </a>
            <a
              className="btn btn--gold"
              href="https://chat.whatsapp.com/EPFRDsWd057DBqYS5bpK67"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join WhatsApp Community
            </a>
          </div>
        </div>

        {/* Real Numbers Stats Grid */}
        <div>
          <div className="stats">
            <div className="stat">
              <div className="stat__n" style={{ '--c': 'var(--blue, #00B4D8)' }}>
                2,500+
              </div>
              <div className="stat__l">Community members</div>
            </div>
            <div className="stat">
              <div className="stat__n" style={{ '--c': 'var(--magenta, #E0199E)' }}>
                20+
              </div>
              <div className="stat__l">Events</div>
            </div>
            <div className="stat">
              <div className="stat__n" style={{ '--c': 'var(--gold, #FFE89E)' }}>
                12+
              </div>
              <div className="stat__l">Speakers</div>
            </div>
            <div className="stat">
              <div className="stat__n" style={{ '--c': 'var(--teal, #00F0FF)' }}>
                3rd
              </div>
              <div className="stat__l">Edition</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DncCommunity;
