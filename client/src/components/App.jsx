import React, { Component } from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import $ from 'jquery';

export default class App extends Component {
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
    return (
      <div className="container">
        <h3 className="booking-price">$ 80 <span className="booking-per-night">per night</span></h3>
        <hr></hr>
        <div className="form-group">
          <label htmlFor="dates">Dates</label>
          <DateRangePicker open="left" containerStyles={{display: "block"}}>
            <input id="dates" type="text" className="form-control"></input>
          </DateRangePicker>
        </div>
        <div className='form-group'>
          <label htmlFor="guests">Guests</label>
          <input type="number" className="form-control" id="guests" aria-describedby="emailHelp" placeholder=""></input>
        </div>
        <button className="btn btn-bwm btn-confirm btn-block">Reserve place now</button>
        <hr></hr>
        <p className="booking-note-title">People are interested into this house</p>
        <p className="booking-note-text">More than 500 people checked this rental in last month</p>
      </div>
    )
  }
}
