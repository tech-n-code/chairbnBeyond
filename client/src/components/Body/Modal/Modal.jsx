import React, { useState } from "react";
import styles from "./Modal.module.css";

function Modal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }
  return (
    <div className={styles["modal"]}>
      <div className={styles["modal-button"]}>
        <button className={styles["close-button"]} onClick={onClose}>
          X
        </button>
      </div>
      <div className={styles["modal-header"]}></div>
      <div className={styles["modal-body-container"]}>
        <div className={styles["modal-body"]}>
          <div className={styles["modal-body-title-div"]}>
            <h2 className={styles["modal-body-title"]}>
              What this place offers
            </h2>
          </div>
          <div className={styles["modal-amenity-body"]}>
            <div className={styles["modal-amenity-block"]}>
              <div className={styles["modal-amenity-title-div"]}>
                <h3 className={styles["modal-amenity-title"]}>Bathroom</h3>
              </div>
              <div className={styles["modal-amenity-div-block"]}>
                <div className={styles["modal-amenity-div"]}>
                  <div className={styles["modal-amenity-inner-div"]}>
                    <div className={styles["modal-amenity-icon-div"]}></div>
                    <div className={styles["modal-amenity-text-div"]}>
                      Bathtub
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
