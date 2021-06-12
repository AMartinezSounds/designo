import React from 'react';
import styled from 'styled-components';

import middlePhone from '../../../public/static/about/mobile/middle.jpg';
import middleTablet from '../../../public/static/about/tablet/middle.jpg';
import middleDesktop from '../../../public/static/about/desktop/middle.jpg';
import bg from '../../../public/static/about/backgrounds/bg-pattern-three-circles.svg';

const MiddleComponentStyles = styled.div`
  height: 865px;
  display: flex;
  flex-direction: column;
  @media (min-width: 501px) {
    margin-inline: auto;
    width: 89.6%;
  }
  @media (min-width: 1000px) {
    width: 77.15%;
    height: 640px;
    flex-direction: row;
  }
`;

const ImageContainerStyles = styled.div`
  background-image: url(${middlePhone});
  background-repeat: no-repeat;
  background-size: cover;
  height: 37%;
  @media (min-width: 501px) {
    background-image: url(${middleTablet});
    background-position: center center;
    border-radius: 20px 20px 0 0;
  }
  @media (min-width: 1000px) {
    background-image: url(${middleDesktop});
    width: 43.2%;
    height: 100%;
    border-radius: 20px 0 0 20px;
  }
`;

const TextContainerStyles = styled.div`
  background-image: url(${bg});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 63%;
  background-color: rgba(255, 173, 155, 0.3);
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
      color: #e7816b;
    }
    p {
      margin-top: 0;
      line-height: 1.5rem;
      color: black;
    }
  }
  @media (min-width: 501px) {
    border-radius: 0 20px 20px 0;
  }
  @media (min-width: 1000px) {
    width: 57.16%;
    height: 100%;
    border-radius: 0 20px 20px 0;
    .text-box {
      text-align: left;
      width: 70.07%;
      height: 51.875%;
    }
  }
`;

function MiddleComponent() {
  return (
    <MiddleComponentStyles>
      <ImageContainerStyles />
      <TextContainerStyles>
        <div className="text-box">
          <h2>World-class Talent</h2>
          <p>
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>
          <p>
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </p>
        </div>
      </TextContainerStyles>
    </MiddleComponentStyles>
  );
}

export default MiddleComponent;
