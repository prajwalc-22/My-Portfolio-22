import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import './App.css'
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Projects from "./Components/Projects/Projects";
import Testimonial from "./Components/Testimonials/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import {themeContext} from './Context'
import { useContext } from 'react';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background : darkMode? 'black': '',
        color : darkMode? 'white': ''
      }}
    >
      <Navbar/>
      <Intro/>
     <Skills/>
     <Experience/>
     <Works/>
     <Projects/>
     <Testimonial />
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
