import React, { Component } from "react";
import { Link } from "react-router-dom"; //

export default class Search extends Component {
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
      <div className="search">
        <div className="searchWrapper">
          <p className="small secondary">Hello</p>
          <p className="title primary">Where do you want to send your cat?</p>
          <Link to="/search">
            <input placeholder="search destination" onClick={this.showBig} />
          </Link>
        </div>
      </div>
    );
  }
}
