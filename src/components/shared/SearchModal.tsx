// ================================================================================
// WEBSITES — Search Modal Component (MVVP Architecture Wrapper)
// ================================================================================

import React from 'react';
import { SearchModalView, SearchModalViewProps } from '../../views/shared/SearchModalView';

export const SearchModal: React.FC<SearchModalViewProps> = (props) => {
  return <SearchModalView {...props} />;
};

export default SearchModal;
