import React from "react";
import styles from "./Body.module.css";

import Gallery from "./Gallery/Gallery";

import ChairCover from "./ChairCover/ChairCover";

import AboutThisPlace from "./AboutThisPlace/AboutThisPlace";
import Amenities from "./Amenities/Amenities";

import Reviews from "./Reviews/Reviews";

import Map from "./Map/Map";
import ThingsToKnow from "./ThingsToKnow/ThingsToKnow";

function Body() {
  return (
    <>
      <div className={styles["body-container"]}>
        <div className="titlebar">Property Title</div>
        <Gallery />
        <div className={styles["body-after-gallery-container"]}>
          <div className={styles["body-column-container"]}>
            <div className={styles["body-left-column-container"]}>
              <div className={styles["body-column-left-div"]}>
                <div className="overview">Property Overview Component</div>
                <ChairCover />
                <div className="host">Host Component</div>
                <AboutThisPlace />
                <Amenities />
                <div className="calendar">Calendar Component</div>
              </div>
            </div>
            <div className={styles["body-right-column-container"]}>
              <div className={styles["body-column-right-conatiner-div"]}>
                <div className={styles["body-column-right-div"]}>
                  <div className="reservation">Reservation Component</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Reviews />
        <Map />
        <ThingsToKnow className="things" />
      </div>
    </>
  );
}

export default Body;
