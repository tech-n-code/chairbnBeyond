import styles from "./Guests.module.css";
import React, { useState } from "react";

function Guests() {
  const [isOpen, setIsOpen] = useState(false);
  const [guests, setGuests] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const incrementGuests = (type) => {
    setGuests((prevState) => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  const decrementGuests = (type) => {
    setGuests((prevState) => ({
      ...prevState,
      [type]: prevState[type] > 0 ? prevState[type] - 1 : 0,
    }));
  };

  return (
    <div className={styles["guest-dropdown"]}>
      <button
        className={styles["guest-dropdown-header"]}
        onClick={toggleDropdown}
      > 
        <div className={styles["GACI"]}>
  <span>GUESTS</span>
  <span>
    Adults: {guests.adults}
    {guests.children > 0 && `, Children: ${guests.children}`}
    {guests.infants > 0 && `, Infants: ${guests.infants}`}
    {guests.pets > 0 && `, Pets: ${guests.pets}`}
  </span>
</div>
        <img
          className={styles["downArrow"]}
          src={isOpen ? "../../../../src/assets/upArrow-removebg-preview.png" : "../../../../src/assets/downArrow-removebg-preview.png"}
          alt="down-arrow"
        />
      </button>
      {isOpen && (
        <div className={styles["guest-dropdown-content"]}>
          <div className={styles["guest-count"]}>
            <div className={styles["guest-class"]}>
              <h4>Adults</h4>
              <p>Age 13+</p>
            </div>
            <div className={styles["guest-buttons"]}>
              <button onClick={() => decrementGuests("adults")}>-</button>
              <span>{guests.adults}</span>
              <button onClick={() => incrementGuests("adults")}>+</button>
            </div>
          </div>
          <div className={styles["guest-count"]}>
            <div className={styles["guest-class"]}>
              <h4>Children</h4>
              <p>Ages 2-12</p>
            </div>
            <div className={styles["guest-buttons"]}>
              <button onClick={() => decrementGuests("children")}>-</button>
              <span>{guests.children}</span>
              <button onClick={() => incrementGuests("children")}>+</button>
            </div>
          </div>
          <div className={styles["guest-count"]}>
            <div className={styles["guest-class"]}>
              <h4>Infants</h4>
              <p>Under 2</p>
            </div>
            <div className={styles["guest-buttons"]}>
              <button onClick={() => decrementGuests("infants")}>-</button>
              <span>{guests.infants}</span>
              <button onClick={() => incrementGuests("infants")}>+</button>
            </div>
          </div>
          <div className={styles["guest-count"]}>
            <div className={styles["guest-class"]}>
              <h4>Pets</h4>
            </div>
            <div className={styles["guest-buttons"]}>
              <button onClick={() => decrementGuests("pets")}>-</button>
              <span>{guests.pets}</span>
              <button onClick={() => incrementGuests("pets")}>+</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Guests;
