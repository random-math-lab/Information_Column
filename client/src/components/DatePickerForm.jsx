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
    return (
      <div className="form-group">
        <label htmlFor="dates">Dates</label>
        <DateRangePicker open="left" containerStyles={{display: "block"}}>
          <input id="dates" type="text" className="form-control"></input>
        </DateRangePicker>
      </div>
    )
  }
}
