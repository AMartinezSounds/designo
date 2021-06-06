import React from 'react';
import styled from 'styled-components';

import HomeSecondWebComponent from './HomeSecondWebComponent';
import HomeSecondAppComponent from './HomeSecondAppComponent';
import HomeSecondGraphicComponent from './HomeSecondGraphicComponent.js';

const HomeSecondStyles = styled.div`
  width: 1112px;
  height: 640px;
  border-radius: 20px;
  color: white;
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-column: 1fr;
  grid-row: 1fr 1fr;
  row-gap: 20px;
  width: 50%;
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
