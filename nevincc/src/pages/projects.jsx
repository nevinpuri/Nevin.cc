import React, { Component } from "react";
import NavigationBar from "../NavigationBar";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import urlShortenerImage from "../images/url-shortener-img.png";
import weatherImage from "../images/weather-app-img.png";

require("../projects.css");

export class Projects extends Component {
  render() {
    return (
      <div>
        <div>
          <NavigationBar />
        </div>
        <div className="showcase-card">
          <div classname="main-card">
            <Card style={{ width: "18rem" }} className="m-3">
              <Card.Img
                className="border-bottom"
                src={urlShortenerImage}
              ></Card.Img>
              <Card.Body>
                <Card.Title className="text-center">
                  React URL Shortener
                </Card.Title>
                <Card.Text className="text-center text-secondary">
                  A Simple URL Shortener built in react as the frontend, and
                  using express as the backend. It also interacts with mongodb,
                  to store all of the links in a database
                </Card.Text>
                <div className="text-center">
                  <Button
                    className="center"
                    variant="primary"
                    href="https://github.com/Nevin1901/React-URL-Shortener"
                  >
                    Github
                  </Button>
                  <Button className="center m-2" variant="secondary">
                    Website
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="main-card">
            <Card style={{ width: "18rem" }} className="m-3">
              <Card.Img className="border-bottom" src={weatherImage}></Card.Img>
              <Card.Body>
                <Card.Title className="text-center">
                  Javascript Weather App
                </Card.Title>
                <Card.Text className="text-center text-secondary">
                  A website which uses openweather API to show the user both a
                  map of the weather around them, as well as the current info
                  about the weather
                </Card.Text>
                <div className="text-center">
                  <Button className="center" variant="primary">
                    Github
                  </Button>
                  <Button className="center m-2" variant="secondary">
                    Website
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
