import React from 'react';
import styled from 'styled-components';

import HomeSecondWebComponent from './HomeSecondWebComponent';
import HomeSecondAppComponent from './HomeSecondAppComponent';
import HomeSecondGraphicComponent from './HomeSecondGraphicComponent.js';

const HomeSecondStyles = styled.div`
  height: 95.34vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 16px;
  margin-inline: auto;
  width: 89.6%;
  @media (min-width: 1117px) {
    width: 77.16%;
    height: 640px;
    row-gap: 3.64%;
    column-gap: 30px;
    justify-content: stretch;
    flex-wrap: wrap;
  }
`;

function HomeSecond() {
  return (
    <HomeSecondStyles>
      <HomeSecondWebComponent />
      <HomeSecondAppComponent />
      <HomeSecondGraphicComponent />
    </HomeSecondStyles>
  );
}

export default HomeSecond;
