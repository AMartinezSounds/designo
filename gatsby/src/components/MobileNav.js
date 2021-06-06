import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const MobileNavStyles = styled.nav`
  position: absolute;
  height: 235px;
  transition: top 0.3s ease;
  top: ${(props) => (props.show === 'false' ? '-22.5rem' : '10rem')};
  left: 0;
  right: 0;
  margin-top: -1rem;
  background-color: black;
  ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  a {
    color: white;
    font-size: 2rem;
    font-weight: 300;
  }
  .show {
    top: 10rem;
  }
`;

function MobileNav({ crossButton, setCrossButton }) {
  return (
    <MobileNavStyles show={crossButton}>
      <ul>
        <li>
          <Link to="/about" onClick={() => setCrossButton('false')}>
            OUR COMPANY
          </Link>
        </li>
        <li>
          <Link to="/locations" onClick={() => setCrossButton('false')}>
            LOCATIONS
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setCrossButton('false')}>
            CONTACT
          </Link>
        </li>
      </ul>
    </MobileNavStyles>
  );
}

export default MobileNav;
