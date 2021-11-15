//import './App.css';
import Header from './components/Header'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import "./tailwind.css";


function App() {
  return (
    <main className = "text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
