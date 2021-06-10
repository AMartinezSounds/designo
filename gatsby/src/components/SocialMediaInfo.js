import React from 'react';
import styled from 'styled-components';

import facebookIcon from '../../public/static/icons/icon-facebook.svg';
import youtubeIcon from '../../public/static/icons/icon-youtube.svg';
import twitterIcon from '../../public/static/icons/icon-twitter.svg';
import pinterestIcon from '../../public/static/icons/icon-pinterest.svg';
import instagramIcon from '../../public/static/icons/icon-instagram.svg';

const SocialMediaStyles = styled.div`
  /* display: none;
  @media (max-width: 700px) {
    display: flex;
    justify-content: center;
    width: 100%;
    a {
      margin-inline: 1rem;
    }
    img {
      margin-left: 0;
    }
  } */
`;

function SocialMediaInfo() {
  return (
    <SocialMediaStyles>
      {/* <a
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
      </a> */}
    </SocialMediaStyles>
  );
}

export default SocialMediaInfo;
