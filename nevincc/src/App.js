import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import IndexPage from "./pages/index.jsx";
import Projects from "./pages/projects.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Redirect to="/error" />
        </Switch>
      </Router>
    );
  }
}

export default App;
