// ================================================================================
// WEBSITES — Category Filter Component (MVVP View Wrapper)
// ================================================================================

import React from 'react';
import { CategoryFilterView, CategoryFilterViewProps } from '../../views/home/CategoryFilterView';

export const CategoryFilter: React.FC<CategoryFilterViewProps> = (props) => {
  return <CategoryFilterView {...props} />;
};

export default CategoryFilter;
