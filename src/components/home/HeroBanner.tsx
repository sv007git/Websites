// ================================================================================
// WEBSITES — Hero Banner Component (MVVP View Wrapper)
// ================================================================================

import React from 'react';
import { HeroBannerView, HeroBannerViewProps } from '../../views/home/HeroBannerView';

export const HeroBanner: React.FC<HeroBannerViewProps> = (props) => {
  return <HeroBannerView {...props} />;
};

export default HeroBanner;
