import styles from "./secondblock.module.css";
export const SecondBlock = () => {
  return (
    <section className={styles.secondB}>
      {" "}
      <div>
        <h3 className={styles.parag1}>¿No sabes por donde empezar?</h3>

        <h1 className={styles.parag2}>Aquí tienes algunos libros históricos</h1>
      </div>
    </section>
  );
};
