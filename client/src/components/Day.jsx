import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const StyledDay = styled.td`
  font-size: 14px;
  width: 37px;
  height: 37px;
  display: table-cell;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  line-height: 12px;
  text-align: center;
  text-decoration: ${({ isActive }) => isActive ? 'none' : 'line-through'};
  color: ${({ isActive }) => isActive ? 'rgb(72, 72, 72)' : 'rgb(216, 216, 216)'};
  border: ${({ isBlank }) => isBlank ? 'none' : '1px double rgb(228, 231, 231)'};
  border-spacing: 0px;
  padding: 1px;
  margin: 0px;
  ${({ isSelected }) => isSelected ? 'background: rgb(0, 166, 153); color: rgb(255, 255, 255); text-decoration: none;' : null}

  ${({ isActive, isSelected }) => isActive  && ! isSelected ? ':hover { background: rgb(228, 231, 231); }' : null}
`;

const Day = (props) => {
  const { available, calendarMonth, date, isBlank, isCheckinOpen, isCheckoutOpen, updateCheckinDate, updateCheckoutDate, checkinValue, checkoutValue } = props;
  const displayDate = (value) => moment(value).format('MM/DD/YYYY').toString();
  const dateString = date ? moment(calendarMonth).format('YYYY-MM').toString().concat('-', date.toString().padStart(2, '0')) : null;
  const isCheckinAvail = available.includes(dateString);
  const isCheckoutAvail = available.includes(moment(dateString).add(1, 'days').format('YYYY-MM-DD').toString());
  const isActive = (isCheckinAvail && isCheckinOpen) || (isCheckoutAvail && isCheckoutOpen);
  const isSelected = displayDate(dateString) === checkinValue || displayDate(dateString) === checkoutValue;
  const updateDate = (date) => isCheckinOpen ? updateCheckinDate({target: {value: date}}) : updateCheckoutDate({target: {value: date}});

  return (
    <StyledDay value={dateString} isActive={isActive} isSelected={isSelected} isBlank={isBlank} checkinValue={checkinValue} checkoutValue={checkoutValue} onClick={() => updateDate(moment(dateString).format('MM/DD/YYYY').toString())}>
      {date}
    </StyledDay>
  );
};

export default Day;
