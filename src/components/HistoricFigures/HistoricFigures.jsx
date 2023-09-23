import { Frame } from "../Frame";
import styles from "./historicfigures.module.css";

const frames = [
  {
    name: "Juan Vicente Gomez",
    date: "(1857-1935)",
    img: "retratoJVG.png",
    id: "0",
  },
  {
    name: "Mario Briceño Iragorry",
    date: "(1897-1958)",
    img: "retratoMBI.png",
    id: "1",
  },
  {
    name: "Arturo Urlar Pietri",
    date: "(1906-2001)",
    img: "retratoAUP.png",
    id: "2",
  },
  {
    name: "Isaias Medina Angarita",
    date: "(1897-1953)",
    img: "retratoIMA.png",
    id: "3",
  },
  {
    name: "Marcos Perez Jimenez",
    date: "(1914-2001)",
    img: "retratoMPJ.png",
    id: "4",
  },
];

export const HistoricFigures = () => {
  return (
    <section className={styles.fourthB}>
      <div className={styles.frameContainer}>
        {frames.map((frame) => {
          return (
            <Frame
              name={frame.name}
              dates={frame.date}
              img={frame.img}
              key={frame.id}
            />
          );
        })}
      </div>
    </section>
  );
};
