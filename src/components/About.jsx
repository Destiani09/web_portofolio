import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGit, FaUniversity, FaPhp, FaMicrosoft, FaTools } from 'react-icons/fa';
import styles from './About.module.css';

function About() {
  return (
    <div className={styles.about}>
      <h2>About Me</h2>
      <p className={styles.bio}>
        Saya lahir di Cimahi hari Kamis tanggal 09 Desember 2004.
      </p>

      <h3>
        <FaUniversity className={styles.educationIcon} />
        Pendidikan
      </h3>
      <p className={styles.pp}>Saat ini saya kuliah di kampus Institut Teknologi Nasional Bandung di jln. Cikutra Bandung. Saya lulusan pendidikan dari :</p>
      <ul className={styles.pendidikanList}>
        <li>SDIT Avicenna (Bekasi)</li>
        <li>PonPes Putri Al-Kenaniyah (Jakarta)</li>
        <li>MTs Al-Kenaniyah (Jakarta)</li>
        <li>SMKN 1 Cimahi - Rekayasa Perangkat Lunak (Cimahi)</li>
      </ul>

      <h3>
        <FaTools className={styles.educationIcon} />
        Skills
      </h3>
      <div className={styles.skills}>
        <div className={styles.skillItem}>
          <FaHtml5 style={{ color: '#e34c26' }} className={styles.icon} />
          <span>HTML</span>
        </div>
        <div className={styles.skillItem}>
          <FaCss3Alt style={{ color: '#2965f1' }} className={styles.icon} />
          <span>CSS</span>
        </div>
        <div className={styles.skillItem}>
          <FaJs style={{ color: '#f0db4f' }} className={styles.icon} />
          <span>JavaScript</span>
        </div>
        <div className={styles.skillItem}>
          <FaReact style={{ color: '#61dbfb' }} className={styles.icon} />
          <span>React</span>
        </div>
        <div className={styles.skillItem}>
          <FaGit style={{ color: '#f1502f' }} className={styles.icon} />
          <span>Git</span>
        </div>
        <div className={styles.skillItem}>
          <FaPhp style={{ color: '#8e5f5f' }} className={styles.icon} />
          <span>PHP</span>
        </div>
        <div className={styles.skillItem}>
          <FaMicrosoft style={{ color: '#00a4ef' }} className={styles.icon} />
          <span>Microsoft</span>
        </div>
      </div>
    </div>
  );
}

export default About;
