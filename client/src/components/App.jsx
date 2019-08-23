import React, { Component } from 'react';
import DatePickerForm from './DatePickerForm.jsx'

export default class App extends Component {

  render() {
    return (
      <div className="container">
        <h3 className="booking-price">$ 80 <span className="booking-per-night">per night</span></h3>
        <hr></hr>
        <DatePickerForm />
        <div className='form-group'>
          <label htmlFor="guests">Guests</label>
          <input type="number" className="form-control" id="guests" aria-describedby="emailHelp" placeholder=""></input>
        </div>
        <button className="btn btn-bwm btn-confirm btn-block btn btn-danger">Reserve</button>
        <hr></hr>
        <p className="booking-note-title">People are interested into this house</p>
        <p className="booking-note-text">More than 500 people checked this rental in last month</p>
      </div>
    )
  }
}
