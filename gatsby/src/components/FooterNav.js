import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import logoWhite from '../../public/static/logo-light.png';

const LogoStyles = styled.div`
  img {
    width: 202.27px;
    height: 27px;
  }
`;

const FooterNavStyles = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 27px;
  font-size: 1.6rem;
  font-weight: 200;
  max-width: 111.1rem;
  a {
    color: white;
  }
  a:hover {
    border-bottom: 1px solid white;
  }
  .logo:hover {
    border-bottom: none;
  }
  @media (max-width: 680px) {
    flex-direction: column;
    max-width: none;
  }
`;

const NavBarLinks = styled.div`
  ul {
    display: flex;
    max-width: 370px;
    li {
      margin-left: 2.5rem;
    }
  }
  @media (max-width: 680px) {
    width: 100%;
    ul {
      border-top: 1px solid rgba(128, 128, 128, 0.4);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      max-width: none;
      height: 187px;
      li {
        width: 100%;
        margin-left: -4rem;
        text-align: center;
      }
    }
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
      <NavBarLinks>
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
        </ul>
      </NavBarLinks>
    </FooterNavStyles>
  );
}

export default FooterNav;
