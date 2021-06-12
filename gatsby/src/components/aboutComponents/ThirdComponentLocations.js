import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import bg from '../../../public/static/about/backgrounds/bg-pattern-small-circle.svg';

const ThirdComponentLocationsStyles = styled.div`
  color: black;
  background: url(${bg}) no-repeat;
  background-position: center top;
  height: 30.64%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    letter-spacing: 0.1rem;
    font-weight: 200;
  }
  .locations-button {
    background-color: #e7816b;
    color: white;
    &:hover {
      background-color: #ffad9b;
    }
  }
  @media (min-width: 501px) {
    justify-content: center;
  }
  @media (min-width: 1000px) {
    background-position: center top;
    height: 100%;
  }
`;

function ThirdComponentLocations({ location, img }) {
  return (
    <ThirdComponentLocationsStyles>
      <img src={img} alt="" />
      <h3>{location}</h3>
      <Link to="/locations" className="button locations-button">
        SEE LOCATIONS
      </Link>
    </ThirdComponentLocationsStyles>
  );
}

export default ThirdComponentLocations;
