import React from "react";
import styles from "./Body.module.css";
import Amenities from "./Amenities/Amenities";
import Gallery from "./Gallery/Gallery";
function Body() {
  return (
    <div className={styles["body-container"]}>
      <Gallery />
    </div>
  );
}

export default Body;
