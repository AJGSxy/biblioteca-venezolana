import styles from "./frame.module.css";

export const Frame = ({ name, dates, img }) => {
  return (
    <div className={styles.frameFather}>
      <div
        className={styles.photoC}
        style={{ backgroundImage: `url(./../../../public/${img})` }}
      >
        <div className={styles.frameCharacter}></div>
      </div>
      <div className={styles.nameStyle}>
        {name} <br />
        {dates}
      </div>
    </div>
  );
};
