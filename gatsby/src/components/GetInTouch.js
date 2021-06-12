import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import bg from '../../public/static/home/bg-pattern-call-to-action.svg';

const GetInTouchStyles = styled.div`
  background: url(${bg}) no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 2;
  border-radius: 20px;
  margin-inline: auto;
  width: 89.6%;
  height: 379px;
  background-color: #e78168;
  grid-row-start: 1;
  grid-row-end: 11;
  grid-column-start: 1;
  grid-column-end: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 769px) {
    grid-row-start: 1;
    grid-row-end: 8;
  }
  @media (min-width: 1000px) {
    background-position: right;
  }
  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const GetInTouchTextStyles = styled.div`
  color: white;
  width: 85.32%;
  height: 66.22%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  h2 {
    font-size: 2rem;
  }
  p {
    font-size: 1rem;
    line-height: 1.7em;
  }
  @media (min-width: 769px) {
    width: 83%;
    h2 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.2rem;
    }
    @media (min-width: 1440px) {
      width: 41.31%;
    }
  }
`;
const GetInTouchButtonStyles = styled.div``;

function GetInTouch() {
  return (
    <GetInTouchStyles>
      <GetInTouchTextStyles>
        <h2>Let's talk about your project</h2>
        <p>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </GetInTouchTextStyles>
      <GetInTouchButtonStyles>
        <Link to="/contact" className="button">
          GET IN TOUCH
        </Link>
      </GetInTouchButtonStyles>
    </GetInTouchStyles>
  );
}

export default GetInTouch;
