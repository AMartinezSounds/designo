import React from 'react';
import styled from 'styled-components';
import ContactInfo from './ContactInfo';
import FooterNav from './FooterNav';
import SocialMediaInfo from './SocialMediaInfo';

const FooterStyles = styled.footer`
  grid-row-start: 5;
  grid-row-end: 12;
  grid-column-start: 1;
  grid-column-end: 1;
  background-color: black;
  height: 39.3rem;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  .push-footer p {
    color: black;
  }
  @media (max-width: 700px) {
    min-height: 815px;
    grid-row-start: 4;
  }
  @media (max-width: 414px) {
    grid-row-start: 4;
  }
`;

const FooterContentStyles = styled.div`
  height: 17.7rem;
  width: min(90%, 1111px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 900px) {
  }
  @media (max-width: 700px) {
    min-height: 498px;
    width: 600px;
  }
  @media (max-width: 590px) {
    width: 500px;
  }
  @media (max-width: 414px) {
    width: 414px;
    justify-content: space-between;
  }
`;

const Line1Styles = styled.div`
  height: 0.1px;
  opacity: 0.4;
  max-width: 111.1rem;
  background-color: grey;
  @media (max-width: 700px) {
    display: none;
  }
`;

function Footer() {
  return (
    <FooterStyles>
      <div className="push-footer">
        <p>just an element to push the footer</p>
      </div>
      <FooterContentStyles>
        <FooterNav />
        <Line1Styles />
        <ContactInfo />
      </FooterContentStyles>
      <SocialMediaInfo />
    </FooterStyles>
  );
}

export default Footer;
