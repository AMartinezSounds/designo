import React from 'react';
import styled from 'styled-components';

const GetInTouchStyles = styled.div`
  position: absolute;
  z-index: 2;
  background-color: #e78168;
  margin-inline: auto;
  max-width: 1111px;
  width: min(80%, 1111px);
  height: 292px;
  border-radius: 20px;
`;

function GetInTouch() {
  return (
    <GetInTouchStyles>
      <p>get in touch</p>
    </GetInTouchStyles>
  );
}

export default GetInTouch;
