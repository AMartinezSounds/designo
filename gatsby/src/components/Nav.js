import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import logo from '../../public/static/logo-dark.png';

const NavStyles = styled.nav`
  font-family: 'Jost', sans-serif;
  font-weight: 200;
  font-size: 1rem;
  margin-inline: auto;
  width: 89.6%;
  height: 11.47vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: black;
  }
  li {
    display: none;
  }
  @media (min-width: 769px) {
    ul {
      min-width: 370px;
      display: flex;
      justify-content: space-between;
    }
    li {
      display: inline;
      position: relative;
    }
    li::after {
      content: '';
      position: absolute;
      background: black;
      height: 1px;
      width: 0;
      top: 18px;
      left: 0;
      transition: width 0.3s ease;
    }
    li:hover {
      &:first-child::after {
        width: 113px;
      }
      &:nth-child(2)::after {
        width: 88px;
      }
      &:nth-child(3)::after {
        width: 75px;
      }
    }
  }
`;

const LogoStyles = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0.3rem;
  img {
    width: 202.27px;
    height: 27px;
  }
`;

const IconStyles = styled.div`
  cursor: pointer;
  font-size: 2rem;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    color: black;
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
