import React from 'react';
import { Navbar } from './components/Navbar/Navbar.jsx';
import { Hero } from './components/Hero/Hero.jsx';
import { EventStats } from './components/EventStats/EventStats.jsx';
import { About } from './components/About/About.jsx';
import { Keynote } from './components/Keynote/Keynote.jsx';
import { Speakers } from './components/Speakers/Speakers.jsx';
import { Agenda } from './components/Agenda/Agenda.jsx';
import { Venue } from './components/Venue/Venue.jsx';
import { Tickets } from './components/Tickets/Tickets.jsx';
import { Sponsors } from './components/Sponsors/Sponsors.jsx';
import { CommunityCTA } from './components/CommunityCTA/CommunityCTA.jsx';
import { Footer } from './components/Footer/Footer.jsx';

export const App = () => {
  return (
    <div className="min-h-screen bg-white text-[#171717] flex flex-col font-sans selection:bg-[#512BD4]/15 selection:text-[#512BD4]">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Event Stats Strip */}
        <EventStats />

        {/* Section 3: About Conference */}
        <About />

        {/* Section 4: Keynote Feature */}
        <Keynote />

        {/* Section 5: Speakers Grid */}
        <Speakers />

        {/* Section 6: Interactive Agenda Timeline */}
        <Agenda />

        {/* Section 7: Venue & Campus Map */}
        <Venue />

        {/* Section 8: Passes & Registration */}
        <Tickets />

        {/* Section 9: Sponsors & Partners */}
        <Sponsors />

        {/* Section 10: Community CTA */}
        <CommunityCTA />
      </main>

      {/* Section 11: Footer */}
      <Footer />
    </div>
  );
};

export default App;
