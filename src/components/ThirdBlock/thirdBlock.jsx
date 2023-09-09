import styles from "./thirdblock.module.css";

export const ThirdBlock = () => {
  return (
    <section className={styles.thirdB}>
      <div className={styles.thirdContainer}>
        <h1 className={styles.titleEvents}>Mercado Principal de Maracaibo</h1>
        <h3 className={styles.commentsEvents}>
          El viejo mercado de Maracaibo durante su construccion, realizada entre
          1927-1928 después del incendio sufrido el 21/07/1927. Su estructura
          metalica fue fabricada en Londres por la firma Richter & Pickis,
          siendo inaugurado en agosto de 1931.
        </h3>
      </div>
    </section>
  );
};
