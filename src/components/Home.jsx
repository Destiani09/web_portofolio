import { useState, useEffect, useRef } from 'react';  // Pastikan useRef diimpor
import { FaHeart } from 'react-icons/fa';
import styles from './Home.module.css';
import profile from '../assets/aku.jpg';

function Home() {
  const [animateText, setAnimateText] = useState(false);
  const homeRef = useRef(null); // Ref untuk Home

  const handleScroll = () => {
    if (homeRef.current) {
      const rect = homeRef.current.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
      
      // Animasi akan aktif jika elemen terlihat
      if (isVisible) {
        setAnimateText(true);
      } else {
        setAnimateText(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);  // Tambahkan event scroll
    return () => window.removeEventListener('scroll', handleScroll);  // Bersihkan event ketika komponen dilepas
  }, []);

  return (
    <div className={styles.home} ref={homeRef} id="home">
      <img src={profile} alt="Profile" className={styles.profileImg} />
      <h2 className={styles.subtitle}>Hallo, I'm</h2>
      <h1 className={styles.name}>Destiani Mahaputri</h1>
      <p className={styles.title}>Sangat Antusias Desain dan Programmer 💻 | Suka Biru 💙 | Makan enjoyer 🍜</p>
      <p className={`${styles.desc} ${animateText ? styles.animate : ''}`}>
        Warna biru muda adalah zona nyaman ku dan aku suka suka mendesain walaupun hasilnya tidak bagus{' '}
        <FaHeart style={{ color: '#89CFF0' }} />
      </p>
      <div className={styles.links}>
        <a href="#about" className={styles.button}>About Me</a>
        <a href="#projects" className={styles.button}>Projects</a>
        <a href="#contact" className={styles.button}>Contact</a>
      </div>
    </div>
  );
}

export default Home;
