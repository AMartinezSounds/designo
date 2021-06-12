import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Nav from '../components/Nav';
import MobileNav from '../components/MobileNav';
import Footer from '../components/Footer';

import bg1 from '../../public/static/about/mobile/bg-pattern-hero-about-mobile.svg';

import bg2 from '../../public/static/home/bg-pattern-hero-home.svg';
import ThirdComponent from '../components/aboutComponents/ThirdComponent';

const ContactStyles = styled.div`
  color: white;
  font-family: 'Jost', sans-serif;
  background-image: url(${bg1});
  background-repeat: no-repeat;
  background-size: 1000px;
  background-position: -400px 0px;
  height: 764px;
  background-color: #e78168;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .everything {
    height: 620px;
    width: 87.2%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .text {
    text-align: center;

    h3 {
      margin-top: 0;
      font-size: 2.5rem;
    }
    p {
      line-height: 1.5rem;
      width: 87.2%;
      margin-inline: auto;
    }
  }
  @media (min-width: 501px) {
    background-image: url(${bg2});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    margin-inline: auto;
    width: 89.71%;
    border-radius: 20px;
    .everything {
      width: 83.16%;
    }
  }
  @media (min-width: 1000px) {
    height: 480px;
  }
  @media (min-width: 1300px) {
    background-position: left;
    flex-direction: row;
    width: 77.08%;
    .everything {
      height: 100%;
      width: 100%;
      flex-direction: row;
      justify-content: center;
      .text {
        width: 48.6%;
        text-align: left;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        h3 {
        }
        p {
          width: 82.41%;
          margin-inline: 0;
        }
      }
    }
  }
`;

const FormStyles = styled.form`
  margin-top: 0;
  height: 387px;
  width: 327px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  input[type='text'],
  input[type='email'] {
    padding-left: 1rem;
    border: none;
    background: none;
    border-bottom: 1px solid white;
    &::placeholder {
      color: white;
    }
  }
  input:focus {
    color: white;
    outline: none;
  }
  .name {
    height: 10%;
  }
  .email {
    height: 10%;
  }
  .phone {
    height: 10%;
  }
  textarea {
    padding-left: 1rem;
    background: none;
    resize: none;
    border: none;
    height: 34.5%;
    border-bottom: 1px solid white;
    &:focus {
      color: white;
      outline: none;
    }
    &::placeholder {
      color: white;
    }
  }
  .button {
    font-size: 1rem;
    text-transform: uppercase;
    padding: 1.2rem 2.2rem;
    background-color: white;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    justify-content: center;
    transition: all 0.3s ease;
    font-weight: 500;
    align-self: center;
    letter-spacing: 0.1rem;
    &:hover {
      background-color: #ffad9b;
      color: white;
    }
  }
  @media (min-width: 501px) {
    width: 83.16%;
  }
  @media (min-width: 1000px) {
    height: 280px;
  }
  @media (min-width: 1300px) {
    width: 34.2%;
    .button {
      margin-right: 0;
      margin-left: auto;
    }
  }
`;

function contact() {
  // const [crossButton, setCrossButton] = useState('false');
  return (
    <>
      {/* <Nav setCrossButton={setCrossButton} crossButton={crossButton} /> */}
      {/* <MobileNav crossButton={crossButton} /> */}
      <ContactStyles>
        <div className="everything">
          <div className="text">
            <h3>Contact Us</h3>
            <p>
              Ready to take it to the next level? Let's talk about your project
              or idea and find out how we can help your business grow. If you
              are looking for unique digital experiences that's relatable to
              your users, drop us a line.
            </p>
          </div>
          <FormStyles>
            <input
              className="name"
              type="text"
              name="name"
              placeholder="Name"
            />
            <input
              className="email"
              type="email"
              name="email"
              placeholder="Email Address"
            />
            <input
              className="phone"
              type="text"
              name="phone"
              placeholder="Phone"
            />
            <textarea name="message" placeholder="Your message" />
            <button type="submit" className="button">
              Submit
            </button>
          </FormStyles>
        </div>
      </ContactStyles>
      <ThirdComponent />
    </>
  );
}

export default contact;
