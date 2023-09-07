import styles from "./hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.firstContent}>
        <h1 className={styles.mainTitle}>
          Descubre todo sobre la historia de Venezuela
        </h1>
        <input
          // className={styles.search}
          type="search"
          placeholder="Escribe algún personaje, libro, hecho histórico, etc..."
        />
      </div>
    </section>
  );
};
