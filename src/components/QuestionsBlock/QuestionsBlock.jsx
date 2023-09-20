import styles from "./questionsblock.module.css";

export const QuestionsBlock = () => {
  return (
    <section className={styles.questionB}>
      <h1 className={styles.socialQuestion}>
        ¿Tienes alguna <br />
        pregunta historica?
      </h1>
      <h2 className={styles.noteQuestion}>
        ¡Envianosla y la tomaremos en cuenta!
      </h2>
      <input className={styles.identityQuestion} />
    </section>
  );
};
