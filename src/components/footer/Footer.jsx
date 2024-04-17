import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Suham Hamid</div>
      <div className={styles.text}>
        {`Suham's personal project © All rights reserved.`}
      </div>
    </div>
  );
};

export default Footer;
