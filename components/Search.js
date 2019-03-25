import React, { Component } from "react";
import { Link } from "react-router-dom";
import data from "../data/destinations.json";
import List from "./List";

export default class SearchAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openBig: false,
      originalList: data.destinations,
      filterList: []
      //cityList: data.destinations.filter(this.checkCity),
      //locationList: data.destinations.filter(this.checkLocation)
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let currentList = [];
    let filteredList = [];
    if (e.target.value !== "") {
      currentList = data.destinations;
      filteredList = currentList.filter(item => {
        const lcItem = item.structured_formatting.name.toLowerCase();
        const filtro = e.target.value.toLowerCase();
        return lcItem.includes(filtro);
      });
    } else {
      filteredList = [];
    }
    this.setState({
      filterList: filteredList
    });
  }

  checkLocation = location => {
    return location.type === "location";
  };

  checkCity = city => {
    return city.type === "city";
  };

  render() {
    return (
      <div>
        <div className="searchAll search">
          <div className="searchWrapper">
            <Link to="/">
              <p className="small secondary">Cancel</p>
            </Link>
            <p className="title primary">Cat-off</p>
            <input
              placeholder="search destination"
              onChange={this.handleChange}
            />
          </div>
          <List list={this.state.filterList} />
        </div>
      </div>
    );
  }
}
