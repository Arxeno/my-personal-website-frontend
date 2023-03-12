import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DrawerContact from './components/DrawerContact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import './styles/App.scss';
import './styles/responsive.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <DrawerContact />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
