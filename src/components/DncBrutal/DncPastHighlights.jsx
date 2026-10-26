import React, { useState, useEffect, useRef } from 'react';

const pastImages = [
  {
    url: 'https://dotnetconfamravati.blob.core.windows.net/website-images/IMG-20250111-WA0322.jpg',
    tag: 'Auditorium Keynote',
    title: 'Packed Auditorium & Full House Audience',
    desc: 'Over 500+ student developers, engineers, and tech leaders gathered at PRPCEM Swami Vivekananda Auditorium.',
  },
  {
    url: 'https://dotnetconfamravati.blob.core.windows.net/website-images/P7.jpg',
    tag: 'Headline Keynote',
    title: 'Main Keynote Stage & Speakers',
    desc: 'Distinguished speakers delivering foundational talks on the .NET ecosystem, modern C#, and cloud innovation.',
  },
  {
    url: 'https://dotnetconfamravati.blob.core.windows.net/website-images/IMG_20250109_121040577_HDR.jpg',
    tag: 'Hands-on Labs',
    title: 'Interactive Workshops & Hands-on Labs',
    desc: 'Practical code walkthroughs, live demonstrations, and mentor-guided development tracks.',
  },
  {
    url: 'https://dotnetconfamravati.blob.core.windows.net/website-images/P4.jpg',
    tag: 'Technical Tracks',
    title: 'Session Deliberations & Technical Discussions',
    desc: 'Attendees engaging in deep-dive architectural discussions and real-world implementation techniques.',
  },
  {
    url: 'https://dotnetconfamravati.blob.core.windows.net/website-images/IMG_20250111_143135.jpg',
    tag: 'Campus Life',
    title: 'Campus Experience & Community Networking',
    desc: 'Delegates connecting and collaborating between technical sessions across the PRPCEM campus.',
  },
  {
    url: 'https://mscprpcem.blob.core.windows.net/general/event2.jpg',
    tag: 'Community Pride',
    title: 'Student Delegation & Youth Innovators',
    desc: 'Youth developers and student club delegations celebrating technology leadership and innovation.',
  },
  {
    url: 'https://mscprpcem.blob.core.windows.net/general/event10.jpg',
    tag: 'Valedictory & Awards',
    title: 'Valedictory & Awards Distribution',
    desc: 'Honoring hackathon champions, technical quiz winners, and community contributors with trophies.',
  },
  {
    url: 'https://mscprpcem.blob.core.windows.net/general/event7.jpg',
    tag: 'Speaker Q&A',
    title: 'Speaker Interactions & Technical Q&A',
    desc: 'Direct in-person Q&A exchanges between Microsoft community leaders and delegates.',
  },
  {
    url: 'https://mscprpcem.blob.core.windows.net/general/event3.jpg',
    tag: 'Mentorship',
    title: 'Collaborative Learning & Mentorship',
    desc: 'Peer learning and industry mentorship fostering the next generation of .NET software engineers.',
  },
  {
    url: 'https://mscprpcem.blob.core.windows.net/general/event5.jpg',
    tag: 'Team Milestone',
    title: 'Organizing Team & Volunteer Milestone',
    desc: 'Microsoft Student Club PRPCEM leadership and volunteer team celebrating an unforgettable edition.',
  },
];

export const DncPastHighlights = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!isPlaying) return;
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % pastImages.length);
    }, 3800);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + pastImages.length) % pastImages.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % pastImages.length);
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const current = pastImages[currentIndex];

  // Duplicate for seamless infinite marquee scroll
  const marqueeList = [...pastImages, ...pastImages];

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
            From packed auditorium keynotes to hands-on labs and award ceremonies &mdash; relive the energy, technical depth, and vibrant community spirit from our previous editions.
          </p>
        </div>

        {/* Animated Past Showcase */}
        <div className="past-gallery">
          {/* Main Stage Frame */}
          <div className="past-gallery__hero">
            {pastImages.map((img, idx) => (
              <div
                key={idx}
                className={`past-gallery__slide ${idx === currentIndex ? 'is-active' : ''}`}
                aria-hidden={idx !== currentIndex}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="past-gallery__img"
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'https://dotnetconfamravati.blob.core.windows.net/website-images/IMG-20250111-WA0322.jpg';
                  }}
                />
              </div>
            ))}

            {/* Content Scrim */}
            <div className="past-gallery__overlay">
              <div className="past-gallery__top">
                <span className="past-gallery__tag">{current.tag}</span>
                <span className="past-gallery__counter">
                  {String(currentIndex + 1).padStart(2, '0')} / {String(pastImages.length).padStart(2, '0')}
                </span>
              </div>

              <div className="past-gallery__info">
                <h3>{current.title}</h3>
                <p>{current.desc}</p>
              </div>
            </div>

            {/* Playback Controls */}
            <div className="past-gallery__controls">
              <button
                type="button"
                onClick={handlePrev}
                className="past-gallery__btn"
                aria-label="Previous photo"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <button
                type="button"
                onClick={togglePlay}
                className="past-gallery__btn"
                aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
              >
                {isPlaying ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="6,3 20,12 6,21" />
                  </svg>
                )}
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="past-gallery__btn"
                aria-label="Next photo"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Continuous Animated Marquee Strip */}
          <div className="past-marquee" title="Hover to pause animation · Click any photo to spotlight">
            <div className="past-marquee__track">
              {marqueeList.map((img, i) => {
                const realIdx = i % pastImages.length;
                const isActive = realIdx === currentIndex;
                return (
                  <div
                    key={i}
                    className={`past-thumb ${isActive ? 'is-active' : ''}`}
                    onClick={() => setCurrentIndex(realIdx)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View ${img.title}`}
                  >
                    <img
                      src={img.url}
                      alt={img.title}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = 'https://dotnetconfamravati.blob.core.windows.net/website-images/IMG-20250111-WA0322.jpg';
                      }}
                    />
                    <span className="past-thumb__tag">{img.tag}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DncPastHighlights;
