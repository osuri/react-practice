import React from "react";
import {BrowserRouter as Router, Route, Switch, NavLink, Redirect} from 'react-router-dom';
import About from "./About";
import Hidden from "./Hidden";
import Home from "./Home";
import NavBar from "./NavBar";
import NotFound from "./NotFound";
import PrivatePage from "./PrivatePage";


import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <PrivatePage path="/hidden" component={Hidden} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}
