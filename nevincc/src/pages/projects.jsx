import React, { Component } from "react";
import NavigationBar from "../Navbar/NavigationBar";
import ReposList from "../Repos/ReposList";
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
