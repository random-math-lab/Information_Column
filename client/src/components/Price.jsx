import React from 'react';
import styled from 'styled-components';

const StyledPrice = styled.div`
  display: flex;
  line-height: 10px;
  padding: 0px 16px 0px 0px;
  align-items: baseline;
  align-content: flex-end;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const StyledPriceAmt = styled.div`
  font-size: 22px;
  overflow-wrap: break-word;
  font-family: 'Quicksand', sans-serif;
  font-weight: 800;
  line-height: 1.44444em;
  color: rgb(72, 72, 72);
  margin: 0px;
`;

const StyledPricePerNight = styled.div`
  font-family: 'Quicksand', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.33333em;
  color: rgb(72, 72, 72);
  margin: 0px;
  line-height: 10px;
  padding-left: 4px;
`;

const Price = (props) => {
  const { price, totalPrice } = props;

  return (
    <StyledPrice>
      <StyledPriceAmt>${totalPrice ? totalPrice: price}</StyledPriceAmt>
      <StyledPricePerNight>per night</StyledPricePerNight>
    </StyledPrice>
  );
};

export default Price;
