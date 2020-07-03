import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./style.css";

export class Repo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  checkImage = () => {
    // TODO: make this function check if file exists in directory
    return false;
  };

  render() {
    return (
      <div>
        <div className="m-2 showcase-card">
          <Card style={{ height: "30rem", width: "18rem" }}>
            <Card.Img
              className="border-bottom"
              src={`https://raw.githubusercontent.com/Nevin1901/${this.props.repoName}/${this.props.branch}/images/1.png`}
              alt="No Image Found"
              height="180"
              width="286"
            ></Card.Img>
            <Card.Body>
              <Card.Title>{this.props.repoName}</Card.Title>
              <Card.Text className="text-secondary">
                {this.props.repoDesc}
              </Card.Text>
              <div className="github-button">
                <Button variant="secondary" href={this.props.url}>
                  Github
                </Button>
                <p className="github-stars">
                  <span role="img" aria-label="star-emoji">
                    🌟
                  </span>{" "}
                  {this.props.stars}
                </p>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default Repo;
