import './App.css';
import Header from './components/Header';
import About from './components/About';
import WorkEx from './components/WorkEx';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { useEffect } from 'react';

function App() {
  useEffect(() => {
    if (window.VANTA) {
      window.VANTA.NET({
        el: "#bg-animated",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xff3f81,
        spacing:15,
        // backgroundColor: 0x12122d,
        backgroundColor: 0x25,
        points: 10.00,
        maxDistance: 20.00
      });
    }
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    
    <div className="App">
      <div className="bg" id='bg-animated'>
      <Header/>
      </div>
      <About />
      <WorkEx />
      <Projects />
      {/* <Contact />  */}
      <button className="scroll-to-top" onClick={scrollToTop}>Back to Top</button>
     
      <Footer />

    </div>
   
  );
}

export default App;
