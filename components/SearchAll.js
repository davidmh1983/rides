import React, { Component } from "react";
import { Link } from "react-router-dom"; //

export default class SearchAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openBig: false
    };
  }

  showBig = () => {
    this.setState({ openBig: true });
  };

  render() {
    return (
      <div className="searchAll search">
        <div className="searchWrapper">
          <p className="small secondary">Cancel</p>
          <p className="title primary">Cat-off</p>
          <Link to="/">
            <input placeholder="search destination" onClick={this.showBig} />
          </Link>
        </div>
      </div>
    );
  }
}
