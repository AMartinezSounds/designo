import React from 'react';
import styled from 'styled-components';
import CharacteristicsComponent from './CharacteristicsComponent';

import friendly from '../../public/static/home/illustrations/illustration-friendly.svg';
import passionate from '../../public/static/home/illustrations/illustration-passionate.svg';
import resourceful from '../../public/static/home/illustrations/illustration-resourceful.svg';

const HomeThirdStyles = styled.div`
  margin-inline: auto;
  width: 89.6%;
  height: 166.8vh;
  display: flex;
  flex-direction: column;
  row-gap: 53.34px;
  margin-bottom: 80px;
  @media (min-width: 769px) {
    height: 87vh;
    justify-content: space-around;
  }
  @media (min-width: 1440px) {
    flex-direction: row;
    width: 77.16%;
    height: 28.61%;
  }
`;

function HomeThird() {
  return (
    <HomeThirdStyles>
      <CharacteristicsComponent
        image={passionate}
        title="PASSIONATE"
        description="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
      />
      <CharacteristicsComponent
        image={resourceful}
        title="RESOURCEFUL"
        description="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients' needs "
      />
      <CharacteristicsComponent
        image={friendly}
        title="FRIENDLY"
        description="We are a team of enthutiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide"
      />
    </HomeThirdStyles>
  );
}

export default HomeThird;
