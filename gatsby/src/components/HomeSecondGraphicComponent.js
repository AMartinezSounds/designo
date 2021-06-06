import React from 'react';
import styled from 'styled-components';
import bg from '../../public/static/home/backgrounds/image-graphic-design.jpg';

const HomeSecondGraphic = styled.div`
  background: url(${bg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-color: black;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
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
    font-size: 3.5rem;
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
`;

function HomeSecondGraphicComponent() {
  return (
    <HomeSecondGraphic>
      <h2>GRAPHIC DESIGN</h2>
      <p>VIEW PROJECTS</p>
    </HomeSecondGraphic>
  );
}

export default HomeSecondGraphicComponent;
