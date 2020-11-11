import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Menu from "./Menu";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";

const Body = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/menu" exact component={Menu} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/about" exact component={About} />
        <Redirect to="/" from="/home" />
      </Switch>
    </div>
  );
};

export default Body;
