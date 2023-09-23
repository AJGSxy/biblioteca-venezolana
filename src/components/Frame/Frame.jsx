import styles from "./frame.module.css";

export const Frame = ({ name, dates, img }) => {
  return (
    <div className={styles.frameFather}>
      <div className={styles.frameCharacter}>
        <img src={`/public/${img}`} className={styles.characterImage} />
        <img src={`/public/MarcoNuevo.png`} className={styles.frameImage} />
      </div>
      <div className={styles.nameStyle}>
        {name} <br />
        {dates}
      </div>
    </div>
  );
};
