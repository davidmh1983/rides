import React from "react";
import { Link } from "react-router-dom";

const List = props => (
  <div>
    <ul>
      {props.list.map((item, index) => (
        <Link key={index} to="/Ride">
          <li key={index}>
            <div className="ListItem">
              <div className="ListItem__logo">
                <img
                  src={
                    item.type === "city"
                      ? "../assets/i-marker.svg"
                      : "../assets/i-building.svg"
                  }
                  alt={item.type}
                  height="20px"
                  width="20px"
                />
              </div>
              <div className="ListItem__text">
                <div className="ListItem__text__title">
                  {item.structured_formatting.name}
                </div>
                <div className="ListItem__text__text">
                  <span>{item.structured_formatting.address}</span>
                  <span>{item.structured_formatting.city}</span>
                  <span>{item.structured_formatting.state}</span>
                  <span>{item.structured_formatting.country}</span>
                </div>
              </div>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  </div>
);

export default List;
