import React from 'react';

import { H1, HEADER } from './HeaderStyle';

const Header: React.FC<any> = ({ children }) => {
  return (
    <HEADER>
      <H1>Page for comments!</H1>
           {children}
    </HEADER>
  );
};

export default Header;
