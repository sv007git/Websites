// ================================================================================
// WEBSITES — Website Card Component (MVVP View Wrapper)
// ================================================================================

import React from 'react';
import { WebsiteCardView, WebsiteCardViewProps } from '../../views/home/WebsiteCardView';

export const WebsiteCard: React.FC<WebsiteCardViewProps> = (props) => {
  return <WebsiteCardView {...props} />;
};

export default WebsiteCard;
