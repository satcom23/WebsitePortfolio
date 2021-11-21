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
      <div className = "bio">
        <About />
        <Skills />
      </div>
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
