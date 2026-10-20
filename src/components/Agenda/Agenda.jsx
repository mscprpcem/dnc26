import React from 'react';
import { SessionizeSchedule } from '../Schedule/SessionizeSchedule.jsx';

export const Agenda = () => {
  return (
    <section id="schedule" className="w-full py-8 sm:py-12 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SessionizeSchedule
          showHeader={true}
          defaultView="gridSmart"
        />
      </div>
    </section>
  );
};

export default Agenda;
