import styles from "./PropertyOverview.module.css";
import React, { useEffect, useState } from "react";

function PropertyOverview() {
  const [hostPhoto, setHostPhoto] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4001/api/hosts/photo/1`)
      .then((res) => res.json())
      .then((data) => {
        setHostPhoto(data.photo_url);
      });
  }, []);
  return (
    <>
      <div className={styles.propertyOverview}>
        <div>
          <span className={styles.hostedBy}>
            Room in a townhouse hosted by Christi-Anna
          <img src={hostPhoto} className={styles.userPicture} />
          </span>
          <div className={styles.infoContainer}>
            <span className={`${styles.chairInfo} ${styles.bedimg}`}>double bed</span>
            <span className={`${styles.chairInfo} ${styles.showerimg}`}>full bathroom</span>
            <span className={`${styles.chairInfo} ${styles.inhouse}`}>host lives here</span>
          </div>
          <div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PropertyOverview;
