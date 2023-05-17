// import { useEffect, useState } from "react";
import styles from "./gallery.module.css";

function Gallery() {
  // const [gallery, setGallery] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:3010/api/gallery")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAmenities(data);
  //       console.log(gallery);
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching gallery: ", err);
  //     });
  // }, []);

  return (
    <div className={styles["img-container"]}>
      <div className={styles.item1}>
        <img
          src="https://na.rdcpix.com/625946635/a545dc497c1d4e1385851ca5e12f5a14w-c0rd-w832_h468_r4_q80.jpg"
          alt="image 1"
        />
      </div>
      <div className={styles.gallery}>
        <div className={styles["gallery-item"]}>
          <img
            src="https://cdn.abcotvs.com/dip/images/895569_073115-cc-Breaking-Bad-Jesse-3.jpg"
            alt="image 2"
          />
        </div>
        <div className={styles["gallery-item"]}>
          <img
            src="https://i.ytimg.com/vi/ZkuUC995PSw/maxresdefault.jpg"
            alt="image 3"
            className={styles.img3}
          />
        </div>
        <div className={styles["gallery-item"]}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqPZkX8EqX-UGLOK2yVqvSgDGvNBdOsPFmgA&usqp=CAU"
            alt="image 4"
          />
        </div>
        <div className={styles["gallery-item"]}>
          <img
            src="https://apriljulia.files.wordpress.com/2012/12/screen-shot-2013-06-07-at-9-37-47-pm.png"
            alt="image 5"
            className={styles.img5}
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
