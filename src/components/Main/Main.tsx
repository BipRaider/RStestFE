import React from 'react';

import MainS from './MainStyle';

import { StandardComponentProps } from '../../interfaces';

const Main: React.FC<StandardComponentProps> = ({ children }) => {
  return <MainS>{children}</MainS>;
};

export default Main;
