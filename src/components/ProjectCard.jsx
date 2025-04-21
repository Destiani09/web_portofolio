import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './Projects.module.css';

function ProjectCard({ name, description, technologies, screenshots, link }) {
  const [showDetail, setShowDetail] = useState(false);
  const toggleDetail = () => setShowDetail(!showDetail);

  return (
    <div className={styles.projectCard}>
      <h3>{name}</h3>
      <div className={styles.carouselContainer}>
        <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
          {screenshots.map((img, i) => (
            <div key={i}>
              <img src={img} alt={`Screenshot ${i + 1} dari ${name}`} />
            </div>
          ))}
        </Carousel>
      </div>
      <button onClick={toggleDetail} className={styles.detailButton}>
        {showDetail ? "Sembunyikan Detail" : "Tampilkan Detail"}
      </button>
      {showDetail && (
        <div className={styles.detail}>
          <p>{description}</p>
          <p><strong>Technologies:</strong> {technologies}</p>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
              Lihat Demo
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
