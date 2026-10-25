import React, { useState } from 'react';

export const DncPastHighlights = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="section band--paper2" id="past">
      <div className="wrap">
        <div className="sechead sechead--split">
          <div>
            <p className="eyebrow">Past edition highlights</p>
            <h2 className="h-sec" style={{ marginBottom: 0 }}>
              This is what .NET Conf<br />feels like in Amravati.
            </h2>
          </div>
          <p className="lede">
            From our previous summit at PRPCEM Campus to the upcoming .NET 11 launch, the momentum has only grown. Here&apos;s a look back at the energy, sessions, and community spirit.
          </p>
        </div>

        <figure className="film">
          <div className="film__frame">
            {!isPlaying ? (
              <>
                <img
                  src="https://dotnetconfamravati.blob.core.windows.net/website-images/P7.jpg"
                  alt=".NET Conf Amravati packed auditorium keynote"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80";
                  }}
                />
                <button
                  type="button"
                  className="film__play"
                  onClick={() => setIsPlaying(true)}
                  aria-label="Play .NET Conf recap video"
                >
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                    <polygon points="6,3 20,12 6,21" />
                  </svg>
                </button>
                <span className="film__badge">Watch the summit recap</span>
              </>
            ) : (
              <iframe
                className="w-full h-full border-0"
                src="https://www.youtube-nocookie.com/embed/videoseries?list=PLdo4fOcmZ0oX-DBuUCKaauWC_q66ia-02&autoplay=1"
                title=".NET Conf Recap Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
          <figcaption className="film__cap">
            <strong>.NET Conf Amravati Edition:</strong> 500+ passionate developers, 14 expert tech talks, 4 parallel workshop tracks, and memorable hallway conversations.
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default DncPastHighlights;
