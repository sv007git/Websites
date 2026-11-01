// ================================================================================
// WEBSITES — Auth Modal Component (MVVP Architecture Wrapper)
// ================================================================================

import React from 'react';
import { AuthModalView, AuthModalViewProps } from '../../views/shared/AuthModalView';

export const AuthModal: React.FC<AuthModalViewProps> = (props) => {
  return <AuthModalView {...props} />;
};

export default AuthModal;
