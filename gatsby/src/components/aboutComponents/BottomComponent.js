import React from 'react';
import styled from 'styled-components';

import bg from '../../../public/static/about/backgrounds/bg-pattern-three-circles.svg';
import bottomPhone from '../../../public/static/about/mobile/bottom.jpg';
import bottomTablet from '../../../public/static/about/tablet/bottom.jpg';
import bottomDesktop from '../../../public/static/about/desktop/bottom.jpg';

const BottomComponentStyles = styled.div`
  height: 865px;
  display: flex;
  flex-direction: column;
  margin-bottom: 6rem;
  @media (min-width: 501px) {
    margin-inline: auto;
    width: 89.6%;
  }
  @media (min-width: 1000px) {
    width: 77.15%;
    height: 640px;
    flex-direction: row-reverse;
  }
`;

const ImageContainerStyles = styled.div`
  background-image: url(${bottomPhone});
  background-repeat: no-repeat;
  background-size: cover;
  height: 37%;
  @media (min-width: 501px) {
    background-image: url(${bottomTablet});
    background-position: center center;
    background-size: cover;
    border-radius: 20px 20px 0 0;
  }
  @media (min-width: 1000px) {
    background-image: url(${bottomDesktop});
    width: 43.2%;
    height: 100%;
    border-radius: 0 20px 20px 0;
  }
`;

const TextContainerStyles = styled.div`
  background-image: url(${bg});
  background-size: cover;
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
    border-radius: 0 0 20px 20px;
  }
  @media (min-width: 1000px) {
    width: 57.16%;
    height: 100%;
    border-radius: 20px 0 0 20px;
    .text-box {
      text-align: left;
      width: 85.04%;
    }
  }
`;

function BottomComponent() {
  return (
    <BottomComponentStyles>
      <ImageContainerStyles />
      <TextContainerStyles>
        <div className="text-box">
          <h2>The real deal</h2>
          <p>
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </p>
          <p>
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </p>
        </div>
      </TextContainerStyles>
    </BottomComponentStyles>
  );
}

export default BottomComponent;
