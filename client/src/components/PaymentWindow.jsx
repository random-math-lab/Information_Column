import React from 'react';

const PaymentWindow = (props) =>{
  const { price, numAdults, numChildren, cleaningFee, occupancyFee, updateTotalPrice } = props;
  const numPerson = numAdults + numChildren;
  const serviceFee = occupancyFee * numPerson;
  const houseKeepingFee = cleaningFee * numPerson;
  const total = price * numPerson + houseKeepingFee + serviceFee;

  const handleChange = (amount) => updateTotalPrice(amount);

  return (
    <ul className="list-group list-group-flush">
      <li className="list-group-item d-flex justify-content-between align-items-center">
        ${price} / night: 
        <span>${price * numPerson}</span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        Cleaning fee:
        <span>${houseKeepingFee}</span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        Service fee:
        <span>${serviceFee}</span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        Total:
        <span onClick={() => handleChange(total)}>${total}</span>
      </li>
    </ul>
  )
}

export default PaymentWindow;
