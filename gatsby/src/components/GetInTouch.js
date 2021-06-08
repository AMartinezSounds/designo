import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import bg from '../../public/static/home/bg-pattern-call-to-action.svg';

const GetInTouchStyles = styled.div`
  background: url(${bg}) no-repeat;
  background-position: center;
  z-index: 2;
  background-color: #e78168;
  width: 1111px;
  margin-inline: auto;
  height: 292px;
  border-radius: 20px;
  grid-row-start: 1;
  grid-row-end: 10;
  grid-column-start: 1;
  grid-column-end: 1;
  display: flex;
  align-items: center;
  @media (max-width: 945px) {
    width: 690px;
    height: 350px;
    flex-direction: column;
  }
  @media (max-width: 689px) {
    width: 500px;
    grid-row-start: 1;
  }
  @media (max-width: 599px) {
    width: 500px;
    grid-row-start: 1;
  }
  @media (max-width: 414px) {
    width: 327px;
    grid-row-start: 2;
    .button {
      width: 12rem;
      font-size: 1.3rem;
    }
  }
`;

const GetInTouchTextStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 65%;
  height: 100%;
  h2 {
    font-size: 3.8rem;
    width: 70%;
  }
  p {
    width: 70%;
  }
  @media (max-width: 945px) {
    height: 70%;
    text-align: center;
    p {
      line-height: 2.5rem;
    }
  }
  @media (max-width: 689px) {
    width: 500px;
  }
  @media (max-width: 414px) {
    width: 414px;
  }
`;
const GetInTouchButtonStyles = styled.div`
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 945px) {
    height: 30%;
  }
`;

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
        <Link className="button">GET IN TOUCH</Link>
      </GetInTouchButtonStyles>
    </GetInTouchStyles>
  );
}

export default GetInTouch;
