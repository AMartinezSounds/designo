import React from 'react';
import styled from 'styled-components';
import ContactInfo from './ContactInfo';
import FooterNav from './FooterNav';
// import SocialMediaInfo from './SocialMediaInfo';

const FooterStyles = styled.footer`
  background-color: black;
  font-family: 'Jost', sans-serif;
  height: 815px;
  grid-row-start: 3;
  grid-row-end: 12;
  grid-column-start: 1;
  grid-column-end: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  .push-footer {
    p {
      color: black;
    }
  }
  @media (min-width: 769px) {
    grid-row-start: 5;
    grid-row-end: 12;
    height: 100%;
  }
  @media (min-width: 1440px) {
  }
`;

const FooterContentStyles = styled.div`
  width: 89.6%;
  height: 61.1%;
  margin-inline: auto;
`;

function Footer() {
  return (
    <FooterStyles>
      <div className="push-footer">
        <p>just an element to push the footer</p>
      </div>
      <FooterContentStyles>
        <FooterNav />
        <ContactInfo />
      </FooterContentStyles>
    </FooterStyles>
  );
}

export default Footer;
