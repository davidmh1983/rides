import React, { Component } from "react";
import Rides from "../data/rides.json";

export default class Ride extends Component {
  constructor(props) {
    super(props);
    this.state = {
      originalRides: Rides.rides,
      filterRides: Rides.rides
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let currentRides = this.state.originalRides;
    let filteredRides = [];
    filteredRides = currentRides.filter(item => {
      if (e.target.innerText === "All") {
        return true;
      } else {
        return item.type === e.target.innerText;
      }
    });
    this.setState({
      filterRides: filteredRides
    });
  }

  render() {
    return (
      <div className="search fixed">
        <div>
          <ul className="Ride">
            <li onClick={this.handleChange} value="all">
              All
            </li>
            <li onClick={this.handleChange} value="standard">
              Standard
            </li>
            <li onClick={this.handleChange} value="special">
              Special
            </li>
          </ul>
        </div>
        <div>
          <div className="p20">
            <ul>
              {this.state.filterRides.map((item, index) => (
                <li className="RideType" key={index}>
                  {item.title}
                </li>
              ))}
            </ul>
            <button>Request a city cat ride</button>
          </div>
        </div>
      </div>
    );
  }
}
