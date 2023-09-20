import { Banner } from "../Banner";
import styles from "./bookblock.module.css";
const bookImages = [
  "cesarismodemocratico.jpeg",
  "delbuensalvaje.jpeg",
  "historiagrafica.jpeg",
  "librorojo2.jpg",
];

const frames = [
  { img: "Arturo", footnote: "1904" },
  { img: "Isaias", footnote: "1930" },
  { img: "Carlos", footnote: "1958" },
  { img: "Pedro", footnote: "1900" },
];
// frames.map((frame, index) => {
//   return <Frame img={frame.img} name="" />;
// });
export const BookBlock = () => {
  return (
    <section className={styles.secondB}>
      <div>
        <h3 className={styles.parag1}>¿No sabes por donde empezar?</h3>

        <h1 className={styles.parag2}>Aquí tienes algunos libros históricos</h1>
      </div>
      <div className={styles.bookContainer}>
        \
        {/* {frames.map((frame, index) => {
          return <Banner img={frame.img} footnote={frame.footnote} />;
        })}
        <div className={styles.bookCover}></div> */}
      </div>
    </section>
  );
};
