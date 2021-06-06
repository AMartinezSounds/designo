import React from 'react';
import styled from 'styled-components';
import ContactInfo from './ContactInfo';
import FooterNav from './FooterNav';

const FooterStyles = styled.footer`
  background-color: black;
  height: 39.3rem;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 680px) {
    min-height: 815px;
  }
`;

const FooterContentStyles = styled.div`
  height: 17.7rem;
  width: min(90%, 1111px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 680px) {
    min-height: 498px;
  }
`;

const Line1Styles = styled.div`
  height: 0.1px;
  opacity: 0.4;
  max-width: 111.1rem;
  background-color: grey;
  @media (max-width: 680px) {
    display: none;
  }
`;

function Footer() {
  return (
    <FooterStyles>
      <FooterContentStyles>
        <FooterNav />
        <Line1Styles />
        <ContactInfo />
      </FooterContentStyles>
    </FooterStyles>
  );
}

export default Footer;
