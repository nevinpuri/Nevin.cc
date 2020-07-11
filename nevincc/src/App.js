import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import IndexPage from "./pages/index.jsx";
import Projects from "./pages/projects.jsx";
import Status from "./pages/status.jsx";
import About from "./pages/about.jsx";
import ErrorPage from "./pages/error.jsx";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/status" component={Status} />
          <Route exact path="/about" component={About} />
          <Route exact path="/error" component={ErrorPage} />
          <Redirect to="/error" />
        </Switch>
      </Router>
    );
  }
}

export default App;
