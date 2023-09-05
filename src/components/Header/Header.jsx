import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <span>BOOK LOGO</span>
      <span className={styles.menu}>Holola</span>
    </header>
  );
};
