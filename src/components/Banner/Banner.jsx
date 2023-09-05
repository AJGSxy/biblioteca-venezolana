import styles from "./banner.module.css";

export const Banner = () => {
  return (
    <header className={styles.header}>
      <span>BOOK LOGO</span>
      <span className={styles.menu}>Holola</span>
    </header>
  );
};
