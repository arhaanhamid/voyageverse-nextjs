import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>VoyageVerse</div>
      <div className={styles.text}>
        {`© All rights reserved under VoyageVerse.`}
      </div>
    </div>
  );
};

export default Footer;
