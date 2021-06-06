import React from 'react';
import styled from 'styled-components';
import bg from '../../public/static/home/bg-pattern-hero-home.svg';
import phone from '../../public/static/home/image-hero-phone.png';

const HomeFirstStyles = styled.div`
  background: url(${bg}) no-repeat;
  background-position: right;
  max-width: 1111px;
  width: min(80%, 1111px);
  border-radius: 20px;
  background-color: #e78168;
  height: 640px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const HomeFirstText = styled.div`
  width: 540px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  p {
    line-height: 2.5rem;
  }
`;

const HomeFirstImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 30%;
  max-height: 640px;
  overflow: hidden;
  img {
    object-fit: contain;
  }
`;

function HomeFirst() {
  return (
    <HomeFirstStyles>
      <HomeFirstText>
        <h1>Award-winning custom designs and digitial branding solutions</h1>
        <p>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <button type="button">Learn More</button>
      </HomeFirstText>
      <HomeFirstImageContainer>
        <img src={phone} alt="phone" />
      </HomeFirstImageContainer>
    </HomeFirstStyles>
  );
}

export default HomeFirst;
