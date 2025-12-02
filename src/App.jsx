import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Research from './components/Research';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundAnimation from './components/BackgroundAnimation';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div style={{ minHeight: '100vh', color: 'var(--color-text)', position: 'relative' }}>
      <BackgroundAnimation />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Research />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
