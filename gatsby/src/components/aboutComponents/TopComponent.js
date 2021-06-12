import React from 'react';
import styled from 'styled-components';

import topPhone from '../../../public/static/about/mobile/top.jpg';
import topTablet from '../../../public/static/about/tablet/top.jpg';
import topDesktop from '../../../public/static/about/desktop/top.jpg';

import bg1 from '../../../public/static/about/backgrounds/bg-pattern-hero-about-desktop.svg';

const TopComponentStyles = styled.div`
  display: flex;
  flex-direction: column;
  height: 715px;
  @media (min-width: 501px) {
    margin-inline: auto;
    width: 89.6%;
  }
  @media (min-width: 1000px) {
    width: 77.15%;
    height: 480px;
    flex-direction: row-reverse;
  }
`;
const ImageContainerStyles = styled.div`
  background-image: url(${topPhone});
  background-repeat: no-repeat;
  background-size: cover;
  height: 44.76%;
  @media (min-width: 501px) {
    background-image: url(${topTablet});
    background-position: center center;
    border-radius: 20px 20px 0 0;
  }
  @media (min-width: 1000px) {
    background-image: url(${topDesktop});
    width: 43.2%;
    height: 100%;
    border-radius: 0 20px 20px 0;
  }
`;
const TextContainerStyles = styled.div`
  background-image: url(${bg1});
  background-size: contain;
  background-position: right -200px;
  background-repeat: no-repeat;
  background-color: #e7816b;
  height: 55.24%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .text-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 87.2%;
    height: 100%;
    h2 {
      font-size: 2.5rem;
      width: 100%;
      margin-top: 0;
    }
    p {
      margin-top: 0;
      line-height: 1.5rem;
    }
  }
  @media (min-width: 501px) {
    border-radius: 0 0 20px 20px;
  }
  @media (min-width: 769px) {
    background-size: cover;
    background-position: -250px -300px;
  }
  @media (min-width: 1000px) {
    background-position: 0px -120px;
    width: 57.16%;
    height: 100%;
    border-radius: 20px 0 0 20px;
    .text-box {
      text-align: left;
      width: 85.04%;
    }
  }
`;

function TopComponent() {
  return (
    <TopComponentStyles>
      <ImageContainerStyles />
      <TextContainerStyles>
        <div className="text-box">
          <h2>About Us</h2>
          <p>
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients' audiences.
          </p>
        </div>
      </TextContainerStyles>
    </TopComponentStyles>
  );
}

export default TopComponent;
