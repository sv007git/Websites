// ================================================================================
// WEBSITES — Global Header Component (MVVP Architecture)
// Coordinates HeaderViewModel and HeaderView
// ================================================================================

import React from 'react';
import { useHeaderViewModel } from '../../viewmodels/useHeaderViewModel';
import { HeaderView } from '../../views/layout/HeaderView';

export const Header: React.FC = () => {
  const viewModel = useHeaderViewModel();
  return <HeaderView viewModel={viewModel} />;
};

export default Header;
