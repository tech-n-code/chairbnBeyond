import styles from "./propertyOverview.module.css";

function PropertyOverview() {

  return (
    <>
      <div className={styles.propertyOverview}>
        <div>
          <span className={styles.hostedBy}>
            Room in a townhouse hosted by Christi-Anna
          </span>
          <div className={styles.infoContainer}>
            <span className={`${styles.chairInfo} ${styles.bedimg}`}>double bed</span>
            <span className={`${styles.chairInfo} ${styles.showerimg}`}>full bathroom</span>
            <span className={`${styles.chairInfo} ${styles.inhouse}`}>host lives here</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default PropertyOverview;
