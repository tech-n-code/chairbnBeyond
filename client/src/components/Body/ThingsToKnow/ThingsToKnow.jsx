import React from "react";
import styles from "./ThingsToKnow.module.css";

export default function ThingsToKnow() {
  return (
    <div className={styles["component-container"]}>
      <div className={styles["component-title"]}>
        <h2 className={styles["component-heading"]}>Things to know</h2>
      </div>
      <div className={styles["thingsToKnowContent"]}>
        <div className={styles["subsection-container"]}>
          <div className={styles["subtitle-container"]}>
            <h3 className={styles["component-subtitle"]}>House rules</h3>
          </div>
          <div className={styles["list-item-container"]}>
            <span className={styles["list-item"]}>Flexible check-in</span>
          </div>
          <div className={styles["list-item-container"]}>
            <span className={styles["list-item"]}>2 guests maximum</span>
          </div>
          <div className={styles["list-item-container"]}>
            <span className={styles["list-item"]}>No pets</span>
          </div>
          <div className={styles["show-more-container"]}>Show more &gt;</div>
        </div>
        <div className={styles["subsection-container"]}>
          <div className={styles["subtitle-container"]}>
            <h3 className={styles["component-subtitle"]}>Safety & property</h3>
          </div>
          <div className={styles["list-item-container"]}>
            <span className={styles["list-item"]}>
              No carbon monoxide alarm
            </span>
          </div>
          <div className={styles["list-item-container"]}>
            <span className={styles["list-item"]}>Security camera</span>
          </div>
          <div className={styles["list-item-container"]}>
            <span className={styles["list-item"]}>Smoke alarm</span>
          </div>
          <div className={styles["show-more-container"]}>Show more &gt;</div>
        </div>
        <div className={styles["subsection-container"]}>
          <div className={styles["subtitle-container"]}>
            <h3 className={styles["component-subtitle"]}>
              Cancellation policy
            </h3>
          </div>
          <div className={styles["list-item-container"]}>
            <span className={styles["list-item"]}>
              Free cancellation before Jun 7.
            </span>
          </div>
          <div className={styles["list-item-container"]}>
            <span className={styles["list-item"]}>
              Review the Host's full cancellation policy which applies even if
              you cancel for illness or disruptions caused by COVID-19.
            </span>
          </div>
          <div className={styles["show-more-container"]}>Show more &gt;</div>
        </div>
      </div>
    </div>
  );
}
