import React, { useState, useEffect, useRef } from 'react';

const pastImages = [
  {
    url: '/past-edition/dnc24-auditorium-keynote.jpg',
    tag: 'Auditorium Keynote',
    title: 'Packed Auditorium & Full House Audience',
    desc: 'Over 500+ student developers, engineers, and tech leaders gathered at PRPCEM Campus.',
  },
  {
    url: '/past-edition/dnc24-technical-speaker.jpg',
    tag: 'Technical Stage',
    title: 'Deep-Dive Technical Deliberations',
    desc: 'Expert tech talks covering modern .NET architecture, cloud infrastructure, and software engineering.',
  },
  {
    url: '/past-edition/dnc24-hands-on-lab.jpg',
    tag: 'Hands-on Labs',
    title: 'Interactive Code Labs & Mentorship',
    desc: 'Practical code walkthroughs, live demonstrations, and mentor-guided development tracks.',
  },
  {
    url: '/past-edition/dnc24-community-delegation.jpg',
    tag: 'Community',
    title: 'Student Delegation & Youth Innovators',
    desc: 'Youth developers and student delegations celebrating technology leadership and innovation across Vidarbha.',
  },
  {
    url: '/past-edition/dnc24-closing-awards.jpg',
    tag: 'Valedictory & Awards',
    title: 'Valedictory & Awards Distribution',
    desc: 'Honoring hackathon champions, technical quiz winners, and community contributors with trophies.',
  },
  {
    url: '/past-edition/dnc24-showcase.jpg',
    tag: 'Keynote Stage',
    title: 'Main Stage Presentations & Leadership',
    desc: 'Distinguished speakers delivering foundational talks on the Microsoft developer ecosystem.',
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
                    e.currentTarget.src = '/past-edition/dnc24-auditorium-keynote.jpg';
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
                        e.currentTarget.src = '/past-edition/dnc24-auditorium-keynote.jpg';
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
