import React, { Component } from 'react'
import DateRangePicker from 'react-bootstrap-daterangepicker';
import $ from 'jquery';

export default class DatePickerForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      guests: []
    }
  }

  componentDidMount(){
    $.ajax({
      url: '/api/guests',
      type: 'GET',
      success: (data) =>{
        console.log("received data from server", data);
        this.setState({
          guests: data
        })
      }
    })
  }

  render() {
    let unitPrice = this.state.guests.map(guest =>{
      return guest.price
    });
    return (
    <div className="booking">
      <h3 className="booking-price">$ {unitPrice[1]} <span className="booking-per-night">per night</span></h3>
      <hr></hr>
      <form className="form-group">
        <label htmlFor="dates">Dates</label>
        <DateRangePicker open="left" containerStyles={{display: "block"}}>
          <input id="dates" type="text" className="form-control"></input>
        </DateRangePicker>
      </form>
      <form className='form-group'>
        <label htmlFor="guests">Guests</label>
        <input type="number" className="form-control" id="guests" aria-describedby="emailHelp" placeholder=""></input>
      </form>
      <button className="btn btn-bwm btn-confirm btn-block btn btn-danger">Reserve</button>
      <hr></hr>
      <p className="booking-note-title">People are interested into this house</p>
      <p className="booking-note-text">More than 500 people checked this rental in last month</p>
    </div>
    )
  }
}
