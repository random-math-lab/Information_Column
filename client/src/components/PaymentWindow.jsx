import React from 'react';

const PaymentWindow = (props) =>{
  const { price, numAdults, numChildren, cleaningFee, occupancyFee, updateTotalPrice } = props;
  const numPerson = numAdults + numChildren;
  const serviceFee = occupancyFee * numPerson;
  const houseKeepingFee = cleaningFee * numPerson;
  const total = price * numPerson + houseKeepingFee + serviceFee;

  const handleChange = (amount) => updateTotalPrice(amount);

  return (
    <ul className='list-group list-group-flush'>
      <li className='list-group-item'>${price} / night: ${price * numPerson}</li>
      <li className='list-group-item'>Cleaning fee: ${houseKeepingFee}</li>
      <li className='list-group-item'>Service fee: ${serviceFee}</li>
      <li className='list-group-item' onClick={() => handleChange(total)}>Total: ${total}</li>
    </ul>
  )
}

export default PaymentWindow;
