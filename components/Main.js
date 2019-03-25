import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import Ride from "./Ride";

const Main = () => (
  <main>
    <Route exact path="/" component={Home} />
    <Route path="/search" component={Search} />
    <Route path="/ride" component={Ride} />
  </main>
);

export default Main;
