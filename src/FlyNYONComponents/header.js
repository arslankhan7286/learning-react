import React, { Component } from "react";
import Time from "react-time-format";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let celebrateDay = new Date("2016-10-05");
    return (
      <div className="header">
        <header className="App-header">
          <div className="banner">
            <img src="/images/Screen_Shot_2020-12-07_at_4.23.22_PM.png" />
          </div>
        </header>
        <div className="time-zone">
          <p id="sales">SALE ENDS IN...</p>
          <p id="zone">
            <Time value={Date.now()} format="DD" /> :{" "}
          </p>
          <p>
            {" "}
            <Time value={Date.now()} format="hh : mm : ss" />
          </p>
          <p id="p-hours">DAYS HOURS MINUTES SECONDS</p>
        </div>
      </div>
    );
  }
}

export default Header;
