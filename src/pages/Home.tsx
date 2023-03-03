import AboutMe from '../components/AboutMe';
import Introduction from '../components/Introduction';
import OverviewMe from '../components/OverviewMe';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Skills from '../components/Skills';
import '../styles/home.scss';
import '../styles/responsive-home.scss';

const Home = () => {
  document.querySelector('body')!.className = 'homePage';

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

export default Home;
