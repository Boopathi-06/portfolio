import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Education from './Components/Education';
import Achievements from './Components/Achievements';
import Skills from './Components/Skills';
import Projects from './Components/Projects';

function App() {
  return (
    <div>
      {/* Home Section */}
      <Home />

      {/* About Section */}
      <About />
      <Education />
      <Skills />
      <Achievements />
      <Projects />
      <Contact/>
      
    
    </div>
  );
}

export default App;
