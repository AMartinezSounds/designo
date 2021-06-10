import React from 'react';
import styled from 'styled-components';
import HomeFirst from '../components/HomeFirst';
import HomeSecond from '../components/HomeSecond';
import HomeThird from '../components/HomeThird';

import svg1 from '../../public/static/home/backgrounds/bg-pattern-leaf.svg';

const HomeStyles = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 96px;
  /* display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center; */
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow-x: hidden; */
`;

function home() {
  return (
    <HomeStyles>
      <HomeFirst />
      <HomeSecond />
      <HomeThird />
    </HomeStyles>
  );
}

export default home;
