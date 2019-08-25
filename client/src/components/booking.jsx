import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import axios from 'axios';
import CloseButton from './CloseButton.jsx';
import Price from './Price.jsx';
import Reviews from './Reviews.jsx';
import Dates from './Dates.jsx';
import Guests from './Guests.jsx';
import Book from './Book.jsx';
import Info from './Info.jsx';
import Report from './Report.jsx';

const StyledStickyModule = styled.div`
  position: sticky;
  top: 20px;
`

const StyledBooking = styled.div`
  padding: 16px 24px 24px 24px;
  width: 90%;
  height: 464px;
  margin: 0px auto;
  border: 1px solid #e4e4e4;
  font-family: 'Quicksand', sans-serif;
  box-sizing: border-box;
`;

const StyledBreak = styled.div`
  width: 100%;
  height: 0px;
  border: 1px;
  border-bottom-style: solid;
  border-bottom-color: #EBEBEB;
  margin-top: 24px;
  margin-bottom: 24px;
`;

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numReviews: 0,
      numViews: 0,
      avgRating: 0,
      isCheckinOpen: false,
      checkinValue: '',
      isCheckoutOpen: false,
      checkoutValue: '',
      isGuestsOpen: false,
      numAdults: 1,
      numChildren: 0,
      numInfants: 0,
      guestMax: 0,
      maxInfants: 5,
      calendarMonth: moment(),
      available: [],
      _id: 0,
      ownerName: '',
      guestMax: 0,
      price: 0,
      cleaningFee: 0,
      occupancyFee: 0,
      minstay: 0,
      maxStay: 0,
    };

    this.getData();

    this.toggleGuestsDropdown = this.toggleGuestsDropdown.bind(this);
    this.toggleCheckinDropdown = this.toggleCheckinDropdown.bind(this);
    this.toggleCheckoutDropdown = this.toggleCheckoutDropdown.bind(this);
    this.updateCalendarMonth = this.updateCalendarMonth.bind(this);
    this.updateCheckinDate = this.updateCheckinDate.bind(this);
    this.updateCheckoutDate = this.updateCheckoutDate.bind(this);
    this.updateNumAdults = this.updateNumAdults.bind(this);
    this.updateNumChildren = this.updateNumChildren.bind(this);
    this.updateNumInfants = this.updateNumInfants.bind(this);
  }

  getData() {
    const randomNum = Math.floor(Math.random() * 100) + 101;
    axios.get(`http://127.0.0.1:3001/host/${randomNum}`)
      .then(({ data }) => {
        const {
          _id, ownerName, guestMax, price, cleaningFee, occupancyFee, avgRating, numReviews, numViews, minstay, maxStay, available
        } = data[0];

        this.setState({
          _id: _id,
          ownerName: ownerName,
          guestMax: guestMax,
          price: price,
          cleaningFee: cleaningFee,
          occupancyFee: occupancyFee,
          avgRating: avgRating,
          numReviews: numReviews,
          numViews: numViews,
          minstay: minstay,
          maxStay: maxStay,
          available: available,
        });
      })
      .catch(err => console.error(err));
  }

  toggleCheckinDropdown(e) {
    e.preventDefault();
    const { isCheckinOpen } = this.state;
    this.setState({ isCheckoutOpen: false }, () => setTimeout(() => this.setState({ isCheckinOpen: !isCheckinOpen }), 5));
  }

  toggleCheckoutDropdown(e) {
    e.preventDefault();
    const { isCheckoutOpen } = this.state;
    this.setState({ isCheckinOpen: false }, () => setTimeout(() => this.setState({ isCheckoutOpen: !isCheckoutOpen }), 5));
  }

  toggleGuestsDropdown(e) {
    e.preventDefault();
    const { isGuestsOpen } = this.state;
    this.setState({ isGuestsOpen: !isGuestsOpen });
  }

  updateCalendarMonth(value) {
    const { calendarMonth } = this.state;
    this.setState({ calendarMonth: calendarMonth.add(value, 'months') });
  }

  updateCheckinDate(e) {
    this.setState({ checkinValue: e.target.value });
  }

  updateCheckoutDate(e) {
    this.setState({ checkoutValue: e.target.value });
  }

  updateNumAdults(value) {
    this.setState(({ numAdults }) => ({ numAdults: numAdults += value }));
  }

  updateNumChildren(value) {
    this.setState(({ numChildren }) => ({ numChildren: numChildren += value }));
  }

  updateNumInfants(value) {
    this.setState(({ numInfants }) => ({ numInfants: numInfants += value }));
  }

  render() {
    const {
      numReviews, avgRating, isCheckinOpen, isCheckoutOpen, isGuestsOpen, numAdults, numChildren, numInfants, 
      guestMax, maxInfants, numViews, calendarMonth, checkinValue, checkoutValue, price, available,
    } = this.state;

    return (
      <StyledStickyModule>
        <StyledBooking>
          {/* <CloseButton /> */}
          <Price price={price} />
          <Reviews numReviews={numReviews} avgRating={avgRating} />
          <StyledBreak />
          <Dates
            isCheckinOpen={isCheckinOpen}
            isCheckoutOpen={isCheckoutOpen}
            calendarMonth={calendarMonth}
            updateCalendarMonth={this.updateCalendarMonth}
            updateCheckinDate={this.updateCheckinDate}
            updateCheckoutDate={this.updateCheckoutDate}
            checkinValue={checkinValue}
            checkoutValue={checkoutValue}
            toggleCheckinDropdown={this.toggleCheckinDropdown}
            toggleCheckoutDropdown={this.toggleCheckoutDropdown}
            available={available}
          />
          <Guests
            isOpen={isGuestsOpen}
            toggle={this.toggleGuestsDropdown}
            numAdults={numAdults}
            numChildren={numChildren}
            numInfants={numInfants}
            guestMax={guestMax}
            maxInfants={maxInfants}
            updateNumAdults={this.updateNumAdults}
            updateNumChildren={this.updateNumChildren}
            updateNumInfants={this.updateNumInfants}
          />
          <Book />
          <StyledBreak />
          <Info numViews={numViews} />
        </StyledBooking>
        <Report />
      </StyledStickyModule>
    );
  }
}

export default Booking;
