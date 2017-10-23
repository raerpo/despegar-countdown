import React from 'react';
import Digit from './Digit';
import styled from 'styled-components';

const UnitWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > label {
    width: 100%;
  }
`;

const TimeUnit = ({ label, number }) => {
  const tens = Math.trunc(number / 10);
  const units = number % 10;
  return (
    <UnitWrapper>
      <Digit number={tens} />
      <Digit number={units} />
      <label>{label}</label>
    </UnitWrapper>
  );
}

export default TimeUnit;