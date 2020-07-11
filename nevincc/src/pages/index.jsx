import React, { Component } from "react";
import NavigationBar from "../Navbar/NavigationBar";

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
