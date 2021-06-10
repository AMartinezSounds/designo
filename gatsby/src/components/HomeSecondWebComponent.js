import React from 'react';
import styled from 'styled-components';
import bg from '../../public/static/home/backgrounds/image-web-design-large.jpg';

const HomeSecondWebStyles = styled.div`
  background-color: pink;
  height: 250px;
  width: 100%;
  border-radius: 20px;
  background: url(${bg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 20px;
    transition: background 0.3s ease;
  }
  h2 {
    font-size: 3rem;
    z-index: 2;
  }
  p {
    z-index: 2;
    position: relative;
  }
  p::after {
    content: '';
    position: absolute;
    background: white;
    height: 1px;
    width: 0;
    top: 18px;
    left: 0;
    transition: width 0.3s ease;
  }
  &:hover {
    &::before {
      background: rgba(231, 129, 107, 0.9);
    }
    cursor: pointer;
    p::after {
      width: 122px;
    }
  }
  @media (min-width: 1117px) {
    width: 48.65%;
    height: 100%;
  }
`;

function HomeSecondWebComponent() {
  return (
    <HomeSecondWebStyles>
      <h2>WEB DESIGN</h2>
      <p>VIEW PROJECTS</p>
    </HomeSecondWebStyles>
  );
}

export default HomeSecondWebComponent;
