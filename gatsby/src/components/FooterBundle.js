import React from 'react';
import styled from 'styled-components';
import GetInTouch from './GetInTouch';
import Footer from './Footer';

const FooterBundleStyles = styled.div`
  margin-top: 10rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
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
