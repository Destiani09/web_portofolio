import { useState } from 'react';
import { FiSun, FiMoon } from "react-icons/fi";
import styles from './App.module.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? styles.dark : styles.light}>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>MyPortfolio</div>
          <ul className={styles.navLinks}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button onClick={toggleMode} className={styles.toggleButton}>
            {darkMode ? <FiSun color="black" /> : <FiMoon color="black" />}
          </button>
          
        </nav>
      </header>

      <main className={styles.main}>
        <section id="home" className={styles.section}><Home /></section>
        <section id="about" className={styles.section}><About /></section>
        <section id="projects" className={styles.section}><Projects /></section>
        <section id="contact" className={styles.section}><Contact /></section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
