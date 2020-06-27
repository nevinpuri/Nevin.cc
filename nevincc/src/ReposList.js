import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Repo from "./Repo";
import axios from "axios";
import "./style.css";

export class ReposList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      githubTitles: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    axios
      .get("https://api.github.com/users/Nevin1901/repos")
      .then((res) => {
        const { data } = res;
        data.map((items) => {
          this.setState({
            githubTitles: [
              ...this.state.githubTitles,
              {
                title: items.name,
                description: items.description,
                language: items.language,
                url: items.html_url,
                stars: items.stargazers_count,
                branch: items.default_branch,
              },
            ],
          });
        });
        console.log(this.state.githubTitles);
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div className="repo-card">
        {this.state.githubTitles.map((repo) => (
          <Repo
            key={uuidv4()}
            repoName={repo.title}
            repoDesc={repo.description}
            lang={repo.language}
            url={repo.url}
            stars={repo.stars}
            branch={repo.branch}
          />
        ))}
      </div>
    );
  }
}

export default ReposList;
