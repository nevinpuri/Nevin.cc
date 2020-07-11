import React, { Component } from "react";
import VPSStatus from "../VPSStatus/VPSStatus";
import NavigationBar from "../Navbar/NavigationBar";

class Status extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <VPSStatus />
      </div>
    );
  }
}

export default Status;
