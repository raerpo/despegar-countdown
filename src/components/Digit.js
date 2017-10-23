import React from 'react';
import styled, { keyframes } from 'styled-components';

const translate = keyframes`
  from {
    transform: translateY(-1em);
  }
  to {
    transform: translateY(0em);
  }
`;

const Number = styled.div`
  color: black;
  font-family: arial;
  font-size: 1em;
  height: 1em;
`;

const DigitContainer = styled.div`
  height: 1em;
  overflow: hidden;
  & > div {
    animation: ${props => translate} .5s cubic-bezier(.4,2.08,.55,.44);
  }
`;

const Digit = ({ number }) => {
  return (
    <DigitContainer key={number}>
      <Number>{number}</Number>
      <Number>{number === 9 ? 0 : (number - 1)}</Number>
    </DigitContainer>
  );
}

export default Digit;