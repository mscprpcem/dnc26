import React from 'react';
import { SessionizeSchedule } from '../Schedule/SessionizeSchedule.jsx';

/**
 * SessionizeEmbed Adapter
 * Delegates to the unified SessionizeSchedule component
 */
export const SessionizeEmbed = ({ onScrollToCfp, ...rest }) => {
  return (
    <SessionizeSchedule
      showHeader={false}
      onNavigateCfp={onScrollToCfp}
      {...rest}
    />
  );
};

export default SessionizeEmbed;
