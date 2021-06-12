import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import TopComponent from '../components/aboutComponents/TopComponent';
import MiddleComponent from '../components/aboutComponents/MiddleComponent';
import ThirdComponent from '../components/aboutComponents/ThirdComponent';
import BottomComponent from '../components/aboutComponents/BottomComponent';

const AboutPageStyles = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 501px) {
    row-gap: 96px;
  }
`;

function about() {
  return (
    <>
      <AboutPageStyles>
        <TopComponent />
        <MiddleComponent />
        <ThirdComponent />
        <BottomComponent />
      </AboutPageStyles>
    </>
  );
}

export default about;
