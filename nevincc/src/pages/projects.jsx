import React, { Component } from "react";
import NavigationBar from "../NavigationBar";
import ReposList from "../ReposList";
import "../style.css";

export class Projects extends Component {
  render() {
    return (
      <div>
        <div>
          <NavigationBar />
        </div>
        <div>
          <ReposList />
        </div>
      </div>
    );
  }
}

export default Projects;
