import React from 'react';
import styled from 'styled-components';
import CharacteristicsComponent from './CharacteristicsComponent';

import friendly from '../../public/static/home/illustrations/illustration-friendly.svg';
import passionate from '../../public/static/home/illustrations/illustration-passionate.svg';
import resourceful from '../../public/static/home/illustrations/illustration-resourceful.svg';

const HomeThirdStyles = styled.div`
  display: flex;
  align-items: center;
  width: 1111px;
  height: 412px;

  @media (max-width: 1150px) {
    width: min(90%, 900px);
    margin-inline: auto;
  }
  @media (max-width: 945px) {
    flex-direction: column;
    height: 100%;
    margin-top: -2rem;
    justify-content: center;
    width: 689px;
  }
  @media (max-width: 689px) {
    width: 500px;
  }
  @media (max-width: 414px) {
    width: 414px;
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
