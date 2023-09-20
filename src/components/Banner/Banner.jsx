import styles from "./banner.module.css";

export const Banner = (props) => {
  console.log(props);
  return (
    <header className={styles.banner}>
      <span>
        Venezuela forma parte de la zona geográfica con mayor diversidad en la
        región tropical de los Andes.{" "}
      </span>
    </header>
  );
};
