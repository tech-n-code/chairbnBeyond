import { useState } from "react";
import Amenities from "./components/amenities/amenities";
import "./index.css";
import AboutThisPlace from "./components/AboutThisPlace/AboutThisPlace";
import ChairCover from "./components/ChairCover/ChairCover.jsx";
import ThingsToKnow from "./components/thingsToKnow/ThingsToKnow";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="header">
        <div className="navbar">NavBar Component</div>
      </header>
      <div className="titlebar">Property Title</div>
      <div className="gallery">Gallery Component</div>
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
      <div className="map">Map Component</div>
      <ThingsToKnow className="things" />
      <div className="footer">Footer</div>
    </>
  );
}

export default App;
