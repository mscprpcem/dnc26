import React from 'react';
import { Navbar } from './components/Navbar/Navbar.jsx';
import { Hero } from './components/Hero/Hero.jsx';
import { EditorialSwimlanes } from './components/EditorialSwimlanes/EditorialSwimlanes.jsx';
import { PastHighlights } from './components/PastHighlights/PastHighlights.jsx';
import { Keynote } from './components/Keynote/Keynote.jsx';
import { Agenda } from './components/Agenda/Agenda.jsx';
import { Venue } from './components/Venue/Venue.jsx';
import { Sponsors } from './components/Sponsors/Sponsors.jsx';
import { StayConnected } from './components/StayConnected/StayConnected.jsx';
import { Footer } from './components/Footer/Footer.jsx';

export const App = () => {
  return (
    <div className="overflow-container selection:bg-[#512BD4]/20 selection:text-[#512BD4]">
      {/* Authentic DotNetConf Gradient Background Ellipses */}
      <img
        role="presentation"
        className="bg-gradient-ellipse"
        src="/bg-gradient-ellipse-01.svg"
        alt="Background gradient ellipse 1"
      />
      <img
        role="presentation"
        className="bg-gradient-ellipse"
        src="/bg-gradient-ellipse-02.svg"
        alt="Background gradient ellipse 2"
      />
      <img
        role="presentation"
        className="bg-gradient-ellipse"
        src="/bg-gradient-ellipse-03.svg"
        alt="Background gradient ellipse 3"
      />
      <img
        role="presentation"
        className="bg-gradient-ellipse"
        src="/bg-gradient-ellipse-04.svg"
        alt="Background gradient ellipse 4"
      />
      <img
        role="presentation"
        className="bg-gradient-ellipse"
        src="/bg-gradient-ellipse-05.svg"
        alt="Background gradient ellipse 5"
      />

      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="w-full flex-1 z-10">
        {/* Section 1: Hero (DotNetConf 2026 Amravati, 3D Rocket mascot, Coming Soon) */}
        <Hero />

        {/* Section 2: Technical Editorial Swimlanes (Launch overview & conference highlights) */}
        <EditorialSwimlanes />

        {/* Section 4: Highlights of Last Year (.NET Conf 2024 Amravati Retrospective) */}
        <PastHighlights />

        {/* Section 5: Keynote Speaker Spotlight (Headline Keynote - Announced Soon TBA) */}
        <Keynote />

        {/* Section 6: 1-Day Conference Schedule & Tracks */}
        <Agenda />

        {/* Section 6: Campus Venue & Google Maps (Swami Vivekananda Auditorium, PRPCEM) */}
        <Venue />

        {/* Section 7: Official Partners & Sponsors with Vector Logos */}
        <Sponsors />

        {/* Section 9: Follow the event #dotnetconfamt */}
        <StayConnected />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
