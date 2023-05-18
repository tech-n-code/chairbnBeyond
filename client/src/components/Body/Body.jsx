import React from "react";
import styles from "./Body.module.css";

import Gallery from "./Gallery/Gallery";

import ChairCover from "./ChairCover/ChairCover";

import AboutThisPlace from "./AboutThisPlace/AboutThisPlace";
import Amenities from "./Amenities/Amenities";
import Reviews from "./Reviews/Reviews";
import Reservation from "./Reservation/Reservation";
import Map from "./Map/Map";
import ThingsToKnow from "./ThingsToKnow/ThingsToKnow";
import HostInfo from "./Host/Host";
import PropertyOverview from "./PropertyOverview/PropertyOverview";

function Body(props) {
  return (
    <>
      <div className={styles["body-container"]}>
        <div className="titlebar">Property Title</div>
        <Gallery />
        <div className={styles["body-after-gallery-container"]}>
          <div className={styles["body-left-column-container"]}>
            <div className="overview"></div>
            <PropertyOverview />
            <ChairCover />
            <HostInfo />
            <AboutThisPlace />
            <Amenities listingId={props.listingId} />
            <div className="calendar">Calendar Component</div>
          </div>
          <div className={styles["body-right-column-container"]}>
            <Reservation className={styles["reservation"]} />
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
