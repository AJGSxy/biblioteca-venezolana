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
      <input
        className={styles.identityQuestion}
        type="text"
        placeholder="Nombre y apellido"
      />

      <input className={styles.anonymousBox} type="checkbox" />
      <h3 className={styles.formQuestion}>
        ¿Qué información no puede faltar en nuestra biblioteca digital?
      </h3>
      <input
        className={styles.visitorQuestion}
        type="text"
        placeholder="Mi pregunta es..."
      />
    </section>
  );
};
