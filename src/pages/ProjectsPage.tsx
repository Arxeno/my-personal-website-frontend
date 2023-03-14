import Projects from '../components/Projects';
import '../styles/projects.scss';
import '../styles/responsive-projects.scss';

const ProjectsPage = () => {
  document.querySelector('body')!.className = 'projectsPage';
  document.querySelector<HTMLElement>('#homeButton')!.style.display = 'block';
  document.querySelector<HTMLElement>('#overviewMeButton')!.style.display =
    'none';

  return (
    <div id="main">
      <Projects />
    </div>
  );
};

export default ProjectsPage;
