import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import bg from '../../public/static/home/bg-pattern-hero-home.svg';
import phone from '../../public/static/home/image-hero-phone.png';

const HomeFirstStyles = styled.div`
  background: url(${bg}) no-repeat;
  background-position: right;
  max-width: 1111px;
  border-radius: 20px;
  background-color: #e78168;
  height: 640px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 1150px) {
    max-width: 900px;
    margin-inline: auto;
  }
  @media (max-width: 945px) {
    flex-direction: column;
    margin-inline: auto;
    height: 100%;
    width: 689px;
    text-align: center;
  }
  @media (max-width: 689px) {
    max-width: 500px;
  }
  @media (max-width: 414px) {
    max-width: 414px;
    border-radius: 0;
  }
`;

const HomeFirstText = styled.div`
  width: 540px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  p {
    line-height: 2.5rem;
  }
  @media (max-width: 945px) {
    align-items: center;
    height: 50%;
    justify-content: space-around;
  }
  @media (max-width: 689px) {
    h1 {
      width: 90%;
    }
    p {
      width: 80%;
    }
  }
  @media (max-width: 414px) {
    h1 {
      max-width: 414px;
      font-size: 3.5rem;
    }
    .button {
      margin-top: 4rem;
    }
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
  @media (max-width: 945px) {
    width: 100%;
    height: 50%;
    img {
      width: 90%;
    }
  }
  @media (max-width: 414px) {
    img {
      width: 600px;
    }
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
