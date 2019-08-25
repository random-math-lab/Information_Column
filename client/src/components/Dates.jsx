import React from 'react';
import styled from 'styled-components';
import DatesDropdown from './DatesDropdown.jsx';

const StyledDates = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 8px;
`;

const StyledDateLabel = styled.label`
  overflow-wrap: break-word;
  font-family: 'Quicksand', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.33333em;
  color: rgb(72, 72, 72);
  margin: 0px;
`;

const StyledDatesBox = styled.div`
  display: table;
  table-layout: fixed;
  height: 40px;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(235, 235, 235);
  border-radius: 2px;
`;

const StyledDatesRow = styled.div`
  display: table-row;
  width: 100%;
  height: 100%
`;

const StyledDateCell = styled.div`
  display: table-cell;
  position: relative;
  width: 100%;
  height: 100%;
  vertical-align: middle;
`;

const StyledDateInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  height: 100%;
  width: 100%;
  border-width: 0px;
  box-sizing: border-box;
`;

const StyledHighlight = styled.div`
  font-size: 17px;
  color: rgb(72, 72, 72);
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  box-sizing: border-box;
  padding: 0px 6px 0px 6px;
  margin: 8px 8px 8px 8px;
  border-radius: 3px;
  overflow: hidden;
  background: ${({ isCheckinOpen, isCheckoutOpen }) => isCheckinOpen || isCheckoutOpen ? 'rgb(153, 237, 230)' : 'rgb(255, 255, 255)'};
  border-color: ${({ isCheckinOpen, isCheckoutOpen }) => isCheckinOpen || isCheckoutOpen ? 'rgb(153, 237, 230)' : 'rgb(255, 255, 255)'};
`;

const StyledSVGWrapper = styled.div`
  display: table-cell;
  width: 24px;
`;

const StyledSVG = styled.svg`
  height: 24px;
  width: 24px;
  padding: 6px 0px 6px 0px;
  margin: 0px;
`;

const Dates = (props) => {
  const {
    isCheckinOpen, checkinValue, isCheckoutOpen, checkoutValue, calendarMonth, updateCalendarMonth,
    updateCheckinDate, updateCheckoutDate, toggleCheckinDropdown, toggleCheckoutDropdown, available
  } = props;

  return (
    <StyledDates>
      <StyledDateLabel>Dates</StyledDateLabel>
      <StyledDatesBox>
        <StyledDatesRow>
          <StyledDateCell>
            <StyledDateInput type="text" placeholder="Check-in" value={checkinValue} onChange={updateCheckinDate} onClick={toggleCheckinDropdown} />
            <StyledHighlight isCheckinOpen={isCheckinOpen}>{checkinValue !== '' ? checkinValue : 'Check-in'}</StyledHighlight>
          </StyledDateCell>
          <StyledSVGWrapper>
            <StyledSVG viewBox="0 0 24 24" role="presentation" focusable="false">
              <path d="m0 12.5a.5.5 0 0 0 .5.5h21.79l-6.15 6.15a.5.5 0 1 0 .71.71l7-7v-.01a.5.5 0 0 0 .14-.35.5.5 0 0 0 -.14-.35v-.01l-7-7a .5.5 0 0 0 -.71.71l6.15 6.15h-21.79a.5.5 0 0 0 -.5.5z" fillRule="evenodd" />
            </StyledSVG>
          </StyledSVGWrapper>
          <StyledDateCell>
            <StyledDateInput type="text" placeholder="Checkout" value={checkoutValue} onChange={updateCheckoutDate} onClick={toggleCheckoutDropdown} />
            <StyledHighlight isCheckoutOpen={isCheckoutOpen}>{checkoutValue !== '' ? checkoutValue : 'Checkout'}</StyledHighlight>
          </StyledDateCell>
        </StyledDatesRow>
      </StyledDatesBox>
      {isCheckinOpen || isCheckoutOpen ? <DatesDropdown
        isCheckinOpen={isCheckinOpen}
        isCheckoutOpen={isCheckoutOpen}
        checkinValue={checkinValue}
        checkoutValue={checkoutValue}
        calendarMonth={calendarMonth}
        updateCalendarMonth={updateCalendarMonth}
        available={available}
        updateCheckinDate={updateCheckinDate}
        updateCheckoutDate={updateCheckoutDate}
        /> : null}
    </StyledDates>
  );
};

export default Dates;
