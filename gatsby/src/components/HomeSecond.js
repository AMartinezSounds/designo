import React from 'react';
import styled from 'styled-components';

import HomeSecondWebComponent from './HomeSecondWebComponent';
import HomeSecondAppComponent from './HomeSecondAppComponent';
import HomeSecondGraphicComponent from './HomeSecondGraphicComponent.js';

const HomeSecondStyles = styled.div`
  width: 1112px;
  margin-inline: auto;
  min-height: 640px;
  border-radius: 20px;
  color: white;
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
  @media (max-width: 1150px) {
    width: min(90%, 900px);
    margin-inline: auto;
  }
  @media (max-width: 945px) {
    flex-direction: column;
    justify-content: center;
    width: 689px;
  }
  @media (max-width: 689px) {
    max-width: 500px;
  }
  @media (max-width: 414px) {
    width: 414px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-column: 1fr;
  grid-row: 1fr 1fr;
  row-gap: 20px;
  width: 50%;
  @media (max-width: 945px) {
    width: 100%;
    display: block;
    height: 100%;
  }
`;

function HomeSecond() {
  return (
    <HomeSecondStyles>
      <HomeSecondWebComponent />
      <Grid>
        <HomeSecondAppComponent />
        <HomeSecondGraphicComponent />
      </Grid>
    </HomeSecondStyles>
  );
}

export default HomeSecond;
