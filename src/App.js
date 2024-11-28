import './App.css';
import Header from './components/Header';
import About from './components/About';
import WorkEx from './components/WorkEx';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <About />
      <WorkEx />
      <Projects />
      <Contact /> 
      <Footer />
    </div>
  );
}

export default App;
