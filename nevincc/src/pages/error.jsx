import React, { Component } from "react";
import NavigationBar from "../NavigationBar";

export class ErrorPage extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <h1 className="text-center" style={{ marginTop: "20%" }}>
          Page Not Found
        </h1>
      </div>
    );
  }
}

export default ErrorPage;
