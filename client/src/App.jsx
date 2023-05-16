import { useState } from "react";
import Amenities from "./components/amenities/amenities";
import "./index.css";

import Map from "./components/amenities/Map/Map.jsx"

import AboutThisPlace from "./components/AboutThisPlace/AboutThisPlace";
import NavBar from "./components/NavBar/NavBar";
import ChairCover from "./components/ChairCover/ChairCover.jsx";
import ThingsToKnow from "./components/thingsToKnow/ThingsToKnow";
import Gallery from "./components/gallery/Gallery"


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="header">
        <NavBar className="navbar"/>
      </header>
      <div className="titlebar">Property Title</div>
      <div className="gallery">Gallery Component</div>
      <Gallery/>
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

      <div className="map">Map Component <Map/></div>

      <ThingsToKnow className="things" />

      <div className="footer">Footer</div>
    </>
  );
}

export default App;
