import React, { Component } from "react";
import NavigationBar from "../NavigationBar";

class Index extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <h1 className="m-2">Welcome to my website</h1>
      </div>
    );
  }
}

export default Index;
