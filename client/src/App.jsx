import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Amenities from "./components/amenities/amenities";
import "./index.css";
import AboutThisPlace from "./components/aboutThisPlace";

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
          <div className="chaircover">
            <div className="chaircoverLogo">
              <span className="pink">chair</span>cover
            </div>
            <div className="chaircoverDescription">
              Every booking includes free protection from Chair cancellations,
              sitting inaccuracies, and other issues like trouble sitting in.
            </div>
            <a>Learn More</a>
          </div>
          <div className="host">Host Component</div>
          <Amenities />
          <AboutThisPlace />



          <div className="calendar">Calendar Component</div>
        </div>
        <div className="rightColumn">
          <div className="reservation">Reservation Component</div>
        </div>
      </div>
      <div className="reviews">Reviews Component</div>
      <div className="map">Map Component</div>
      <div className="things">Things to know</div>
      <div className="footer">Footer</div>
    </>
  );
}

export default App;
