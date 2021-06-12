import React from 'react';
import styled from 'styled-components';
import ThirdComponentLocations from './ThirdComponentLocations';

import australia from '../../../public/static/about/ilustrations/illustration-australia.svg';
import canada from '../../../public/static/about/ilustrations/illustration-canada.svg';
import unitedKingdom from '../../../public/static/about/ilustrations/illustration-united-kingdom.svg';

const ThirdComponentStyles = styled.div`
  margin-inline: auto;
  height: 1188px;
  width: 93.33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 501px) {
    justify-content: space-between;
  }
  @media (min-width: 1000px) {
    flex-direction: row;
    width: 77.08%;
    height: 364px;
  }
`;

function ThirdComponent() {
  return (
    <ThirdComponentStyles>
      <ThirdComponentLocations location="CANADA" img={canada} />
      <ThirdComponentLocations location="AUSTRALIA" img={australia} />
      <ThirdComponentLocations location="UNITED KINGDOM" img={unitedKingdom} />
    </ThirdComponentStyles>
  );
}

export default ThirdComponent;
