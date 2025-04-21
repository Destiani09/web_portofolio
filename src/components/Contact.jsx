import { FiMail, FiPhoneCall } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io"; 
import { FaRegAddressBook } from "react-icons/fa"; 
import styles from './Contact.module.css';

function Contact() {
  return (
    <div className={styles.contact}>
      <h2 className={styles.header}>
        <FaRegAddressBook className={styles.headerIcon} />
        Contact Me
      </h2>
      
      <div className={styles.contactInfo}>
        <p>
          <FiMail className={styles.icon} />
          <a href="mailto:destimp@gmail.com" className={styles.link}>
            destimp@gmail.com
          </a>
        </p>
        
        <p>
          <FiPhoneCall className={styles.icon} />
          <a href="tel:+6282112137061" className={styles.link}>
            082112137061
          </a>
        </p>
        
        <p>
          <IoLogoInstagram className={styles.icon} />
          <a
            href="https://www.instagram.com/destianz_/?utm_source=ig_web_button_share_sheet"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            @destianz_
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
