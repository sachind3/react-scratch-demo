import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Admin from "./Admin";
import User from "./User";

const App = () => {
  return (
    <div className="App">
      <header>Logo here</header>
      <Router>
        <Switch>
          <Route exact match path="/">
            <Admin />
          </Route>
          <Route exact path="/user/:name">
            <User />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
