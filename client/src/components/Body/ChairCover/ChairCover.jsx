import styles from "./ChairCover.module.css"

function ChairCover() {

  return (
    <>
      <div className={styles["chaircover"]}>
        <div className={styles["chaircoverLogo"]}>
          <span className={styles["pink"]}>chair</span>cover
        </div>
        <div className={styles["chaircoverDescription"]}>
          Every booking includes free protection from Chair cancellations,
          sitting inaccuracies, and other issues like trouble sitting in.
        </div>
        <a>Learn More</a>
      </div>
    </>
  );
}

export default ChairCover;
