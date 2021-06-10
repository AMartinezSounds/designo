import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import logoWhite from '../../public/static/logo-light.png';

const LogoStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 20%;
  img {
    width: 202.27px;
  }
  @media (min-width: 769px) {
    width: 60%;
    align-items: flex-start;
  }
`;

const FooterNavStyles = styled.nav`
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  li {
    a {
      text-decoration: none;
      color: white;
    }
  }
  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
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
    top: 18px;
    left: 0;
    transition: width 0.3s ease;
  }
  li:hover {
    &:nth-child(2)::after {
      width: 113px;
    }
    &:nth-child(3)::after {
      width: 88px;
    }
    &:nth-child(4)::after {
      width: 75px;
    }
  }
  .logo:hover {
    border-bottom: none;
  }
`;

function FooterNav() {
  return (
    <FooterNavStyles>
      <LogoStyles>
        <Link to="/home" className="logo">
          <img src={logoWhite} alt="logo" />
        </Link>
      </LogoStyles>
      <li>
        <Link to="/about">OUR COMPANY</Link>
      </li>
      <li>
        <Link to="/locations">LOCATIONS</Link>
      </li>
      <li>
        <Link to="/contact">CONTACT</Link>
      </li>
    </FooterNavStyles>
  );
}

export default FooterNav;
