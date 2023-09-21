import { Banner } from "../Banner";
import styles from "./bookblock.module.css";
const bookImages = [
  "cesarismodemocratico.jpeg",
  "delbuensalvaje.jpeg",
  "historiagrafica.jpeg",
  "librorojo2.jpg",
];

export const BookBlock = () => {
  return (
    <section className={styles.secondB}>
      <div>
        <h3 className={styles.parag1}>¿No sabes por donde empezar?</h3>

        <h1 className={styles.parag2}>Aquí tienes algunos libros históricos</h1>
      </div>
      <div className={styles.bookContainer}>
        {" "}
        Hola
        {/* \
        {frames.map((frame, index) => {
          return <Banner img={frame.img} footnote={frame.footnote} />;
        })}
        <div className={styles.bookCover}></div> */}
      </div>
    </section>
  );
};
