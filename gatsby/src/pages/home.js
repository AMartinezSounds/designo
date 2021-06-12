import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import HomeFirst from '../components/HomeFirst';
import HomeSecond from '../components/HomeSecond';
import HomeThird from '../components/HomeThird';

import svg1 from '../../public/static/home/backgrounds/bg-pattern-leaf.svg';

const HomeStyles = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 96px;
`;

function home() {
  return (
    <>
      <HomeStyles>
        <HomeFirst />
        <HomeSecond />
        <HomeThird />
      </HomeStyles>
    </>
  );
}

export default home;
