import React from 'react';
import styled from 'styled-components';
import Calendar from './Calendar.jsx';

const StyledDatesDropdown = styled.div`
  width: 332px;
  height: ${({ numWeeks }) => numWeeks === 6 ? '367px' : '332px'};
  margin-top: 65px;
  background-color: rgb(255, 255, 255);
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 6px;
  position: absolute;
  z-index: 2;
  transition: height 0.2s ease-in-out 0s;
  text-align: center;
`;

const StyledMonthButton = styled.button`
  cursor: pointer;
  user-select: none;
  background-color: rgb(255, 255, 255);
  color: rgb(117, 117, 117);
  top: 18px;
  line-height: 0.78;
  left: 22px;
  margin: 0px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(228, 231, 231);
  border-image: initial;
  border-radius: 3px;
  padding: 6px 9px;

  :hover {
    border-color: rgb(196, 196, 196);
  }
`;

const StyledSVG = styled.svg`
  fill: rgb(117,117,117);
`;

const StyledCalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 22px 22px 15px 22px;
  transition: sliding-horizontally 0.2s ease-in-out 0s
`;

const StyledWeekTitleRow = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0px 22px;
  margin: 0px;
  list-style: none;
`;

const StyledWeekTitle = styled.li`
  height: 20px;
  width: 40px;
  display: flex;
  justify-content: center;
`;

const StyledSmall = styled.small`
  font-family: 'Quicksand', sans-serif;
  font-size: 11.6667px;
  color: rgb(117, 117, 117)
`;

const StyledMonthTitle = styled.div`
  color: rgb(72, 72, 72);
  font-family: 'Quicksand', sans-serif;
  font-size: 18px;
`;

const StyledQuestionButton = styled.button`
  content: "";
  display: inline-block;
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 33px;
  height: 26px;
  background: none;
  border-top: 26px solid transparent;
  border-right: 33px solid rgb(0, 166, 153);
  border-left: 0px;
  border-bottom: 0px;
  padding: 0px;
  cursor: pointer;
  overflow: visible;
`;

const StyledQuestionMark = styled.span`
  color: rgb(255, 255, 255);
  position: absolute;
  font-family: 'Quicksand', sans-serif;
  font-size: 14px;
  bottom: 0px;
  right: 5px;
  pointer: cursor;
`;

const DatesDropdown = (props) => {
  const {
    calendarMonth, updateCalendarMonth, available, isCheckinOpen, isCheckoutOpen, updateCheckinDate, updateCheckoutDate, checkinValue, checkoutValue,
  } = props;

  const firstDayOfMonth = Number(calendarMonth.startOf('month').format('d')); // starting index of the first day of month
  const daysInMonth = Number(calendarMonth.endOf('month').format('D')); // number of days in a month

  const numWeeks = Math.ceil((firstDayOfMonth + daysInMonth) / 7);

  return (
    <StyledDatesDropdown numWeeks={numWeeks}>
      <StyledCalendarHeader>
        <StyledMonthButton onClick={() => updateCalendarMonth(-1)}>
          <StyledSVG focusable="false" viewBox="0 0 1000 1000" height="19px" width="19px"><path d="M336.2 274.5l-210.1 210h805.4c13 0 23 10 23 23s-10 23-23 23H126.1l210.1 210.1c11 11 11 21 0 32-5 5-10 7-16 7s-11-2-16-7l-249.1-249c-11-11-11-21 0-32l249.1-249.1c21-21.1 53 10.9 32 32z" /></StyledSVG>
        </StyledMonthButton>
        <StyledMonthTitle><strong>{calendarMonth.format('MMMM YYYY')}</strong></StyledMonthTitle>
        <StyledMonthButton onClick={() => updateCalendarMonth(1)}>
          <StyledSVG focusable="false" viewBox="0 0 1000 1000" height="19px" width="19px"><path d="M694.4 242.4l249.1 249.1c11 11 11 21 0 32L694.4 772.7c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210.1-210.1H67.1c-13 0-23-10-23-23s10-23 23-23h805.4L662.4 274.5c-21-21.1 11-53.1 32-32.1z" /></StyledSVG>
        </StyledMonthButton>
      </StyledCalendarHeader>

        <StyledWeekTitleRow>
          <StyledWeekTitle><StyledSmall>Su</StyledSmall></StyledWeekTitle>
          <StyledWeekTitle><StyledSmall>Mo</StyledSmall></StyledWeekTitle>
          <StyledWeekTitle><StyledSmall>Tu</StyledSmall></StyledWeekTitle>
          <StyledWeekTitle><StyledSmall>We</StyledSmall></StyledWeekTitle>
          <StyledWeekTitle><StyledSmall>Th</StyledSmall></StyledWeekTitle>
          <StyledWeekTitle><StyledSmall>Fr</StyledSmall></StyledWeekTitle>
          <StyledWeekTitle><StyledSmall>Sa</StyledSmall></StyledWeekTitle>
        </StyledWeekTitleRow>

      <Calendar
        calendarMonth={calendarMonth}
        firstDayOfMonth={firstDayOfMonth}
        daysInMonth={daysInMonth}
        available={available}
        isCheckinOpen={isCheckinOpen}
        isCheckoutOpen={isCheckoutOpen}
        checkinValue={checkinValue}
        checkoutValue={isCheckoutOpen}
        updateCheckinDate={updateCheckinDate}
        updateCheckoutDate={updateCheckoutDate}
      />
      <StyledQuestionButton />
      <StyledQuestionMark>?</StyledQuestionMark>
    </StyledDatesDropdown>
  );
};

export default DatesDropdown;
