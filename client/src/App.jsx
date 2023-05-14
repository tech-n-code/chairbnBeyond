import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Amenities from "./components/amenities/amenities";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="header">
        <div className="navbar">NavBar Component</div>
      </header>

      <div className="titlebar">Property Title</div>
      <div className="gallery">Gallery Component</div>
      <div>
        <div>
          <div className="overview">Property Overview Component</div>
          <div className="chaircover">Chaircover</div>
          <div className="host">Host Component</div>
          <div className="about">About this place Component</div>
          <Amenities />
          <div className="calendar">Calendar Component</div>
        </div>
        <div className="reservation">Reservation Component</div>
      </div>
      <div className="reviews">Reviews Component</div>
      <div className="map">Map Component</div>
      <div className="things">Things to know</div>
      <div className="footer">Footer</div>
    </>
  );
}

export default App;
