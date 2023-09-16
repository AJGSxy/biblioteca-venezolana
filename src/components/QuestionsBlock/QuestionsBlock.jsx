import styles from "./questionsblock.module.css";

export const QuestionsBlock = () => {
  return (
    <section className={styles.questionB}>
      <h1 className={styles.socialQuestion}>
        Tienes alguna pregunta historica?
      </h1>
      <h3 className={styles.noteQuestion}>
        Envianosla y la tomaremos en cuenta!
      </h3>
    </section>
  );
};
