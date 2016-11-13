import React from 'react';
import GitHub from 'github-api';
const gh = new GitHub();
const jeremyrajan = gh.getUser('jeremyrajan');
const Loader = require('halogen/PulseLoader');

const Project = (props) => (
  <li><a className="button" target="_blank" href={props.link}>{props.name}</a></li>
);

const fromLocalStorage = () => {
  if (!window.localStorage) {
    return;
  }

  return JSON.parse(localStorage.getItem('jeremy_rajan_github'));
};

const toLocalStorage = (key, val) => {
  if (!window.localStorage) {
    return;
  }

  localStorage.setItem(key, JSON.stringify(val));
  return true; 
}

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: fromLocalStorage() || []
    }

    // if we cant find in localStorage then continue
    if (!this.state.projects.length) {
      jeremyrajan.listRepos()
      .then(({ data: reposJson }) => {
        const repos = reposJson.filter(f => !f.fork 
            && !f.name.includes('github.io') 
            && !f.name.includes('photoSticker')
            && !f.name.includes('MySite')
            && !f.name.includes('Multiple')
            && !f.name.includes('angular-seed')
            && !f.name.includes('Codeignitor')
            && !f.name.includes('Wordpress-Blank')
            && !f.name.includes('React-Fun'));
        toLocalStorage('jeremy_rajan_github', repos); // store to localStorage
        this.setState({projects: repos });
      });
    }
  }

  render() {
    if (!this.state.projects.length) {
      return (
         <div id="projects">
          <Loader color="#26A65B" size="16px" margin="4px"/>
        </div>
      );
    }

    const projects = this.state.projects.map((p, key) =>  <Project key={key} name={p.name} link={p.html_url} />);
    return (
      <div id="projects">
        <h1>OSS</h1>
        <ul>{projects}</ul>
      </div>
    );
  }
}

export default Projects;