import React from 'react';
import styled from 'styled-components';

import bg from '../../public/static/home/illustrations/bg-pattern-small-circle.svg';

const CharacteristicsComponentStyles = styled.div`
  color: black;
  background: url(${bg});
  background-repeat: no-repeat;
  background-position: center top;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  height: 100%;
  .center-text {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
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
  }
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
