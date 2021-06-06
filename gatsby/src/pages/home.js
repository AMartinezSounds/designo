import React from 'react';
import styled from 'styled-components';
import HomeFirst from '../components/HomeFirst';
import HomeSecond from '../components/HomeSecond';

const HomeStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function home() {
  return (
    <HomeStyles>
      <HomeFirst />
      <HomeSecond />
    </HomeStyles>
  );
}

export default home;
