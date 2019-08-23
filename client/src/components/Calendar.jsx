import React, { Component } from 'react'
import DateRangePicker from 'react-bootstrap-daterangepicker';

export default class Calendar extends Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="dates">Dates</label>
          {/* <DateRangePicker open="left" containerStyles={{display: "block"}}>
            <input id="dates" type="text" className="form-control"></input>
          </DateRangePicker> */}
        </div>
      </form>
    )
  }
}
