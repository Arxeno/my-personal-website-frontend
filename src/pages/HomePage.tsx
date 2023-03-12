import AboutMe from '../components/AboutMe';
import Introduction from '../components/Introduction';
import OverviewMe from '../components/OverviewMe';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Skills from '../components/Skills';
import '../styles/home.scss';
import '../styles/responsive-home.scss';

const HomePage = () => {
  document.querySelector('body')!.className = 'homePage';
  const homeButton = document.querySelector<HTMLElement>('#homeButton');
  const overviewMeButton =
    document.querySelector<HTMLElement>('#overviewMeButton');

  if (homeButton) {
    homeButton!.style.display = 'none';
  }

  if (overviewMeButton) {
    overviewMeButton!.style.display = 'block';
  }

  return (
    <div id="main">
      <Introduction />
      <OverviewMe />
      <Skills />
      <Services />
      <Projects />
      <AboutMe />
    </div>
  );
};

export default HomePage;
