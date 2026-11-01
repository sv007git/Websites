// ================================================================================
// WEBSITES — Central Homepage (MVVP Architecture)
// Coordinates Model - View - ViewModel - Presenter
// ================================================================================

import React from 'react';
import { useHomeViewModel } from '../viewmodels/useHomeViewModel';
import { HomePageView } from '../views/home/HomePageView';

export const HomePage: React.FC = () => {
  const viewModel = useHomeViewModel();
  return <HomePageView viewModel={viewModel} />;
};

export default HomePage;
