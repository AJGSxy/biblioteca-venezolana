import styles from "./frame.module.css";

export const Frame = ({ name, date, img }) => {
  return (
    <div className={styles.frameFather}>
      <div className={styles.frameCharacter}>
        <div
          className={styles.photoC}
          style={{ backgroundImage: `url(./../../../public/${img})` }}
        ></div>
      </div>
      <div>{name}</div>
    </div>
  );
};
