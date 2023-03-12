const ProjectsPage = () => {
  document.querySelector('body')!.className = 'projectsPage';
  document.querySelector<HTMLElement>('#homeButton')!.style.display = 'block';
  document.querySelector<HTMLElement>('#overviewMeButton')!.style.display =
    'none';

  return <div>ProjectsPage</div>;
};

export default ProjectsPage;
