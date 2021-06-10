import React from 'react';
import styled from 'styled-components';

import bg from '../../public/static/home/illustrations/bg-pattern-small-circle.svg';

const CharacteristicsComponentStyles = styled.div`
  margin-inline: auto;
  width: 87.2%;
  height: 33.33%;
  background: url(${bg});
  background-repeat: no-repeat;
  background-position: center top;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  h2 {
    letter-spacing: 0.1rem;
  }
  p {
    line-height: 1.5rem;
  }
  @media (min-width: 769px) {
    background-position: center left;
    flex-direction: row;
    justify-content: space-between;
    .center-text {
      text-align: left;
      width: 63.72%;
    }
  }
  @media (min-width: 1440px) {
    background-position: center top;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    width: 31.53%;
    .center-text {
      text-align: center;
      width: 100%;
    }
  }
  /* 
  height: 100%;
   */
  /* img {
    width: 50%;
  }
  h2 {
    font-weight: 200;
    letter-spacing: 0.5rem;
  }
  p {
    font-size: 1.2rem;
    line-height: 2.5rem;
    width: 80%;
  }
  @media (max-width: 945px) {
    flex-direction: row;
    width: 690px;
    background-position: left top;
    margin-block: 2rem;
  }
  @media (max-width: 689px) {
    width: 500px;
  }
  @media (max-width: 414px) {
    width: 412px;
    flex-direction: column;
    background-position: center top;
  } */
`;

function CharacteristicsComponent({ title, description, image }) {
  return (
    <CharacteristicsComponentStyles>
      <img src={image} alt="" />
      <div className="center-text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </CharacteristicsComponentStyles>
  );
}

export default CharacteristicsComponent;
