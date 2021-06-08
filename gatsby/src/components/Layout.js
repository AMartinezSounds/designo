import React, { useState } from 'react';
import Nav from './Nav';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import MobileNav from './MobileNav';
import FooterBundle from './FooterBundle';

function Layout({ children }) {
  const [crossButton, setCrossButton] = useState('false');
  return (
    <>
      <GlobalStyles />
      <Nav setCrossButton={setCrossButton} crossButton={crossButton} />
      <MobileNav crossButton={crossButton} />
      {children}
      <FooterBundle />
    </>
  );
}

export default Layout;
