import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import CONFIG from '../config';
import Project from './Project';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [toProjectsPage, setToProjectsPage] = useState(false);
  const page = window.location.href.split('/')[3];
  let fetchString = `${CONFIG.BACKEND_URL}/projects`;

  if (page !== 'projects') {
    fetchString += `?numberOfProject=3`;
  }

  const fetchProjectsData = () => {
    fetch(fetchString)
      .then((res) => res.json())
      .then((resJson) => setProjects(resJson))
      .catch((err) => alert(err));
  };

  const buttonHandler = () => {
    setToProjectsPage(true);
  };

  useEffect(() => fetchProjectsData(), []);

  return (
    <div id="projects" className="container">
      <h1 className="border-effect head-of-each-section">Projects</h1>

      <div id="projects-subcontainer">
        {projects.length > 0
          ? projects.map((data, index) => {
              return (
                <Project key={index} number={index + 1} projectData={data} />
              );
            })
          : null}
      </div>

      {page !== 'projects' ? (
        <button
          id="see-more-projects"
          className="button-effect button-yellow"
          onClick={buttonHandler}
        >
          👀See More Projects
        </button>
      ) : null}

      {toProjectsPage ? <Navigate to="/projects" /> : null}
    </div>
  );
};

export default Projects;
