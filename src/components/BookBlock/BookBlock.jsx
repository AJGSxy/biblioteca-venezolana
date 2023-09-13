import styles from "./bookblock.module.css";
const bookImages = [
  "cesarismodemocratico.jpeg",
  "delbuensalvaje.jpeg",
  "historiagrafica.jpeg",
  "librorojo2.jpg",
];

const frames = [{ img: "", footnote: "" }, {}, {}, {}];
export const BookBlock = () => {
  return (
    <section className={styles.secondB}>
      <div>
        <h3 className={styles.parag1}>¿No sabes por donde empezar?</h3>

        <h1 className={styles.parag2}>Aquí tienes algunos libros históricos</h1>
      </div>
      <div className={styles.bookContainer}>
        {bookImages.map((img, index) => {
          return (
            <div
              className={styles.bookCover}
              key={index}
              style={{ backgroundImage: `url("./../../../public/${img}")` }}
            />
          );
        })}
        {/* <div className={styles.bookCover}></div> */}
      </div>
    </section>
  );
};
