import React from "react";
import styles from "./Body.module.css";

import TitleBar from "./TitleBar/TitleBar";
import Gallery from "./Gallery/Gallery";
import PropertyOverview from "./PropertyOverview/PropertyOverview";
import ChairCover from "./ChairCover/ChairCover";
import HostInfo from "./Host/Host";
import AboutThisPlace from "./AboutThisPlace/AboutThisPlace";
import Amenities from "./Amenities/Amenities";
import Reservation from "./Reservation/Reservation";
import Reviews from "./Reviews/Reviews";
import Map from "./Map/Map";
import ThingsToKnow from "./ThingsToKnow/ThingsToKnow";



function Body(props) {
  return (
    <>
      <div className={styles["body-container"]}>
        <TitleBar listingId={props.listingId}/>
        <Gallery />
        <div className={styles["body-after-gallery-container"]}>
          <div className={styles["body-left-column-container"]}>
            <PropertyOverview />
            <ChairCover />
            <HostInfo />
            <AboutThisPlace />
            <Amenities listingId={props.listingId} />
            <div className="calendar">Calendar Component</div>
          </div>
          <div className={styles["body-right-column-container"]}>
            <Reservation listingId={props.listingId} className={styles["reservation"]} />
          </div>
        </div>
        <Reviews />
        <Map listingId={props.listingId}/>
        <ThingsToKnow className="things" />
      </div>
    </>
  );
}

export default Body;
