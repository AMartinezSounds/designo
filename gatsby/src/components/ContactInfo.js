import React from 'react';
import styled from 'styled-components';

import facebookIcon from '../../public/static/icons/icon-facebook.svg';
import youtubeIcon from '../../public/static/icons/icon-youtube.svg';
import twitterIcon from '../../public/static/icons/icon-twitter.svg';
import pinterestIcon from '../../public/static/icons/icon-pinterest.svg';
import instagramIcon from '../../public/static/icons/icon-instagram.svg';

const FooterInfoStyles = styled.div`
  color: rgb(128, 128, 128);
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 769px) {
    flex-direction: row;
  }
  /* 

  img {
    margin-left: 2rem;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    p {
      text-align: center;
    }
  } */
`;

const LocationInfoStyles = styled.div`
  height: 20%;
  text-align: center;
  @media (min-width: 769px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 30%;
    text-align: left;
  }
`;
const ContactInfoStyles = styled.div`
  height: 20%;
  text-align: center;
  @media (min-width: 769px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 30%;
    text-align: left;
  }
`;
const SocialMediaStyles = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  a {
    margin-inline: 0.5rem;
  }
  @media (min-width: 769px) {
    height: 100%;
    justify-content: flex-end;
    width: 40%;
    a {
      padding-bottom: 0.5rem;
    }
  }
`;
function ContactInfo() {
  return (
    <FooterInfoStyles>
      <LocationInfoStyles>
        <p>
          <strong>Designo Central Office</strong>
        </p>
        <p>3886 Wellington Street</p>
        <p>Toronto, Ontario M9C 3J5</p>
      </LocationInfoStyles>
      <ContactInfoStyles>
        <p>
          <strong>Contact Us (Central Office)</strong>
        </p>
        <p>P: +1 253-863-8967</p>
        <p>M: contact@designo.co</p>
      </ContactInfoStyles>
      <SocialMediaStyles>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.facebook.com/alfredo.martinezcanos/"
        >
          <img src={facebookIcon} alt="facebook icon" />
        </a>
        <a rel="noreferrer" target="_blank" href="https://www.youtube.com">
          <img src={youtubeIcon} alt="" />
        </a>
        <a rel="noreferrer" target="_blank" href="https://twitter.com">
          <img src={twitterIcon} alt="twitter icon" />
        </a>
        <a href="https://www.pinterest.es" rel="noreferrer" target="_blank">
          <img src={pinterestIcon} alt="pinterest icon" />
        </a>
        <a href="https://www.instagram.com" rel="noreferrer" target="_blank">
          <img src={instagramIcon} alt="instagram icon" />
        </a>
      </SocialMediaStyles>
    </FooterInfoStyles>
  );
}

export default ContactInfo;
