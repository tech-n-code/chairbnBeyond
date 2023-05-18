import styles from "./Guests.module.css";
import React, { useState } from "react";

function Guests() {
  const [isOpen, setIsOpen] = useState(false);
  const [guests, setGuests] = useState({
    adults: 1,
    children: 0,
    infants: 0,
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
    <div className={"guest-dropdown"}>
      <div className={"guest-dropdown-header"} onClick={toggleDropdown}>
        <span>
          {
            "Guests: ${guests.adults} Adults, ${guests.children} Children, ${guests.infants} Infants"
          }
        </span>
        <i />
      </div>
      {isOpen && (
        <div className={"guest-dropdown-content"}>
          <div className={"guest-count"}>
            <span>Adults</span>
            <div className={"guest-buttons"}>
              <button onClick={() => decrementGuests("adults")}>-</button>
              <span>{guests.adults}</span>
              <button onClick={() => incrementGuests("adults")}>+</button>
            </div>
          </div>
          <div className={"guest-count"}>
            <span>Children</span>
            <div className={"guest-buttons"}>
              <button onClick={() => decrementGuests("children")}>-</button>
              <span>{guests.children}</span>
              <button onClick={() => incrementGuests("children")}>+</button>
            </div>
          </div>
          <div className={"guest-count"}>
            <span>Infants</span>
            <div className={"guest-buttons"}>
              <button onClick={() => decrementGuests("infants")}>-</button>
              <span>{guests.infants}</span>
              <button onClick={() => incrementGuests("infants")}>+</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Guests;
