import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import logo from '../../public/static/logo-dark.png';

const NavStyles = styled.nav`
  width: min(90%, 1111px);
  height: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-inline: auto;
  font-size: max(1rem, 1.6rem);
  font-weight: 300;

  ul {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: min(370px, 40%);
  }

  li {
    margin-left: 2.5rem;
  }

  a:hover {
    border-bottom: 1px solid black;
  }
  .logo:hover {
    border-bottom: none;
  }

  /* @media (max-width: 644px) {
    
  } */
  @media (max-width: 643px) {
    margin-inline: 3rem;
    ul {
      flex: 0;
      width: 150px;
    }
    li {
      display: none;
    }
    button {
      display: initial;
    }
  }
`;

const LogoStyles = styled.div`
  img {
    width: 202.27px;
    height: 27px;
  }
`;

const IconStyles = styled.div`
  font-size: 3rem;
  display: none;
  @media (max-width: 643px) {
    display: initial;
  }
`;

function Nav({ crossButton, setCrossButton }) {
  return (
    <NavStyles>
      <LogoStyles>
        <Link to="/home" className="logo">
          <img src={logo} alt="logo" />
        </Link>
      </LogoStyles>
      <ul>
        <li>
          <Link to="/about">OUR COMPANY</Link>
        </li>
        <li>
          <Link to="/locations">LOCATIONS</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
        <IconStyles
          onClick={() =>
            crossButton === 'false'
              ? setCrossButton('true')
              : setCrossButton('false')
          }
        >
          {crossButton === 'false' ? <GiHamburgerMenu /> : <FaTimes />}
        </IconStyles>
      </ul>
    </NavStyles>
  );
}

export default Nav;
