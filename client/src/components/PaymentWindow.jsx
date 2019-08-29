import React from 'react';

const PaymentWindow = (props) =>{
  const { price, numAdults, checkinValue, checkoutValue} = props

  return (
    <ul>
      <li>{price} * {numAdults}</li>
      <li>cleaning fee</li>
      <li>service fee</li>
      <li>Total</li>
    </ul>
  )
}

export default PaymentWindow;
