import React from "react";
import styles from "./Body.module.css";

import Gallery from "./Gallery/Gallery";

import ChairCover from "./ChairCover/ChairCover";

import AboutThisPlace from "./AboutThisPlace/AboutThisPlace";
import Amenities from "./Amenities/Amenities";

import Map from "./Map/Map";
import ThingsToKnow from "./ThingsToKnow/ThingsToKnow";

function Body() {
  return (
    <>
      <div className="titlebar">Property Title</div>
      <Gallery />
      <div className="columnsContainer">
        <div className="leftColumn">
          <div className="overview">Property Overview Component</div>
          <ChairCover />
          <div className="host">Host Component</div>
          <AboutThisPlace />
          <Amenities />
          <div className="calendar">Calendar Component</div>
        </div>
        <div className="rightColumn">
          <div className="reservation">Reservation Component</div>
        </div>
      </div>
      <div className="reviews">Reviews Component</div>
      <Map />
      <ThingsToKnow className="things" />
    </>
  );
}

export default Body;
