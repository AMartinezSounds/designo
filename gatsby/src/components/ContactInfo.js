import React from 'react';
import styled from 'styled-components';

import facebookIcon from '../../public/static/icons/icon-facebook.svg';
import youtubeIcon from '../../public/static/icons/icon-youtube.svg';
import twitterIcon from '../../public/static/icons/icon-twitter.svg';
import pinterestIcon from '../../public/static/icons/icon-pinterest.svg';
import instagramIcon from '../../public/static/icons/icon-instagram.svg';

const FooterInfoStyles = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  font-size: 1.6rem;

  p {
    color: rgb(128, 128, 128);
  }
  img {
    margin-left: 2rem;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    p {
      text-align: center;
    }
  }
`;

const LocationInfoStyles = styled.div``;
const ContactInfoStyles = styled.div``;
const SocialMediaStyles = styled.div`
  display: flex;
  align-items: center;
  height: 4rem;
  @media (max-width: 700px) {
    display: none;
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
