import React from 'react';

const pastImages = [
  { url: 'https://dotnetconfamravati.blob.core.windows.net/website-images/IMG-20250111-WA0322.jpg', title: 'Auditorium Keynote' },
  { url: 'https://mscprpcem.blob.core.windows.net/general/event5.jpg', title: 'Organizing Team' },
  { url: 'https://dotnetconfamravati.blob.core.windows.net/website-images/P7.jpg', title: 'Main Keynote Stage' },
  { url: 'https://dotnetconfamravati.blob.core.windows.net/website-images/IMG_20250109_121040577_HDR.jpg', title: 'Hands-on Labs' },
  { url: 'https://dotnetconfamravati.blob.core.windows.net/website-images/P4.jpg', title: 'Technical Tracks' },
  { url: 'https://dotnetconfamravati.blob.core.windows.net/website-images/IMG_20250111_143135.jpg', title: 'Campus Experience' },
  { url: 'https://mscprpcem.blob.core.windows.net/general/event2.jpg', title: 'Student Delegation' },
  { url: 'https://mscprpcem.blob.core.windows.net/general/event10.jpg', title: 'Valedictory & Awards' },
  { url: 'https://mscprpcem.blob.core.windows.net/general/event7.jpg', title: 'Speaker Q&A' },
  { url: 'https://mscprpcem.blob.core.windows.net/general/event3.jpg', title: 'Mentorship' },
];

export const DncPastHighlights = () => {
  return (
    <section className="section band--paper2 py-10 sm:py-16" id="past" style={{ scrollMarginTop: '80px' }}>
      <div className="wrap">
        {/* Section Header */}
        <div className="sechead sechead--center">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>
            <span>Earlier Highlights</span>
          </p>
          <h2 className="h-sec">
            Moments from Past Editions
          </h2>
        </div>

        {/* Full-Space Masonry Photo Gallery (Uncropped, Natural Proportions, No Text, No Popups) */}
        <div className="highlights-gallery">
          {pastImages.map((img, idx) => (
            <div key={idx} className="highlights-card">
              <img
                src={img.url}
                alt={img.title}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'https://dotnetconfamravati.blob.core.windows.net/website-images/IMG-20250111-WA0322.jpg';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DncPastHighlights;
