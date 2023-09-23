import { Banner } from "../Banner";
import styles from "./bookblock.module.css";
const bookImages = [
  "cesarismodemocratico.jpeg",
  "delbuensalvaje.jpeg",
  "historiagrafica.jpeg",
  "librorojo3.png",
];

export const BookBlock = () => {
  return (
    <section className={styles.secondB}>
      <div className={styles.paragContainer}>
        <h3 className={styles.parag1}>¿No sabes por donde empezar?</h3>

        <h1 className={styles.parag2}>Aquí tienes algunos libros históricos</h1>
      </div>
      <div className={styles.bookContainer}>
        {bookImages.map((bookImage, index) => {
          return (
            <img width={200} src={bookImage} key={index} alt={bookImage} />
          );
        })}
      </div>
    </section>
  );
};
