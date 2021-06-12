import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const MobileNavStyles = styled.nav`
  font-family: 'Jost', sans-serif;
  position: absolute;
  height: 235px;
  transition: top 0.3s ease;
  top: ${(props) => (props.show === 'false' ? '-22.5rem' : '13.2%')};
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
  li {
    position: relative;
  }
  li::after {
    content: '';
    position: absolute;
    background: white;
    height: 1px;
    width: 0;
    top: 22px;
    left: 0;
    transition: width 0.3s ease;
  }
  li:hover {
    &:first-child::after {
      width: 153px;
    }
    &:nth-child(2)::after {
      width: 119px;
    }
    &:nth-child(3)::after {
      width: 97px;
    }
  }
  a {
    color: white;
    font-size: 1.3rem;
    font-weight: 300;
    text-decoration: none;
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
