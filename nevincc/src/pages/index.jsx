import React, { Component } from "react";
import NavigationBar from "../NavigationBar";

class Index extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <div className="m-2">
          <h1>Welcome to my website</h1>
        </div>
      </div>
    );
  }
}

export default Index;
