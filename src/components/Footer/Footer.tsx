import React from 'react';

import FooterStyle from './FooterStyle';

const Footer: React.FC<any> = ({ children }) => {
  return <FooterStyle>{children}</FooterStyle>;
};

export default Footer;
