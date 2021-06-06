import React, { useState } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import MobileNav from './MobileNav';
import GetInTouch from './GetInTouch';

function Layout({ children }) {
  const [crossButton, setCrossButton] = useState('false');
  return (
    <>
      <GlobalStyles />
      <Nav setCrossButton={setCrossButton} crossButton={crossButton} />
      <MobileNav crossButton={crossButton} />
      {children}
      {/* <GetInTouch /> */}
      <Footer />
    </>
  );
}

export default Layout;
