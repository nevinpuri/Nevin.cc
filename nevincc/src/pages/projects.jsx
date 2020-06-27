import React, { Component } from "react";
import NavigationBar from "../NavigationBar";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ReposList from "../ReposList";
import "../style.css";

export class Projects extends Component {
  render() {
    return (
      <div>
        <div>
          <NavigationBar />
        </div>
        <ReposList />
      </div>
    );
  }
}

export default Projects;
