import DrawerContact from './components/DrawerContact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './styles/App.scss';
import './styles/responsive.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <DrawerContact />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
