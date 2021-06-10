import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import bg from '../../public/static/home/bg-pattern-hero-home.svg';
import phone from '../../public/static/home/image-hero-phone.png';

const HomeFirstStyles = styled.div`
  background: url(${bg}) no-repeat;
  background-position: center right;
  background-color: #e78168;
  height: 843px;
  margin-inline: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 501px) {
    width: 89.6%;
    border-radius: 20px;
  }
  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: flex-end;
    width: 77.15%;
    height: 640px;
  }
`;

const HomeFirstText = styled.div`
  margin-top: 3rem;
  width: 87.2%;
  height: 37.01%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  p {
    line-height: 1.5rem;
  }
  .button {
    max-width: 46.48%;
    max-height: 18%;
    z-index: 2;
  }
  @media (min-width: 769px) {
    h1 {
      font-size: 3rem;
    }
    p {
      width: 77.66%;
    }
  }
  @media (min-width: 1440px) {
    width: 47%;
    height: 54.69%;
    align-items: flex-start;
    text-align: left;
    justify-self: flex-end;
    h1 {
      font-size: 2.39rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;

const HomeFirstImageContainer = styled.div`
  height: 573px;
  overflow: hidden;
  @media (min-width: 1440px) {
    max-width: 46.8%;
    height: 100%;
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
        <Link className="button" to="/">
          Learn More
        </Link>
      </HomeFirstText>
      <HomeFirstImageContainer>
        <img src={phone} alt="phone" />
      </HomeFirstImageContainer>
    </HomeFirstStyles>
  );
}

export default HomeFirst;
