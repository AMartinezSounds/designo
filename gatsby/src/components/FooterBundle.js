import React from 'react';
import styled from 'styled-components';
import GetInTouch from './GetInTouch';
import Footer from './Footer';

const FooterBundleStyles = styled.div`
  height: 120.1vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  @media (min-width: 769px) {
    height: 768px;
  }
`;

function FooterBundle() {
  return (
    <FooterBundleStyles>
      <GetInTouch />
      <Footer />
    </FooterBundleStyles>
  );
}

export default FooterBundle;
