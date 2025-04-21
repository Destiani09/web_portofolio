import styles from './Projects.module.css';
import ProjectCard from './ProjectCard';

function Projects() {
  const projectList = [
    {
      name: "TopUp Games",
      description: "Membeli diamond untuk top up pada games seperti Mobile Legend, Free Fire, dan lain-lain.",
      technologies: "Laravel, HTML, CSS, Node.js",
      screenshots: ["/images/topup.jpg", "/images/tp1.jpg", "/images/tp2.jpg", "/images/tp3.jpg"],
      link: "https://drive.google.com/file/d/1Y_pnVw3kUnnnBLZ4SHHT1NcM10C6hUN6/view?usp=sharing"
    },
    {
      name: "Smart Door Lock | IOT",
      description: "Alat IOT yang mengembangkan Smart Door Lock yang dapat dikontrol menggunakan smartphone melalui aplikasi Blynk dan ESP32.",
      technologies: "Blynk, Arduino IDE",
      screenshots: ["/images/iot.png", "/images/iot1.png", "/images/iot3.png"],
      link: "https://youtu.be/4f0Z6igTW-w?si=hKVCLa40WHPQzkI7"
    },
    {
      name: "StockPlus",
      description: "Web untuk mmemantau barang barang inventaris toko dan menyimpan riwayat transaksi.",
      technologies: "HTML, Boostrap, PHP",
      screenshots: ["/images/S1.png", "/images/S2.png", "/images/S3.png", "/images/S4.png"],
      link: "https://drive.google.com/file/d/1huVJmdwUQUFQgmEt3_xOfNsiRYF4ucDb/view?usp=sharing"
    }
  ];

  return (
    <div className={styles.projects} id="projects">
      <h2>My Projects</h2>
      <div className={styles.projectGrid}>
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
            technologies={project.technologies}
            screenshots={project.screenshots}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
