import React from "react";
import styles from "./Calendar.module.css";

export default function Calendar() {
  return (
    <div className={styles["calendar-component"]}>
      <div className={styles["group-section"]}>
        <div className={styles["top-border"]}></div>
        <div className={styles["inner-container"]}>
          <div className={styles["inline-availability-calendar"]}>
            <div className={styles["header-container"]}>
              <div className={styles["nights-location-container"]}>
                <section className={styles["nights-location-section"]}>
                  <h2 className={styles["nights-location-text"]}>
                    5 nights in Aruba
                  </h2>
                </section>
              </div>
              <div className={styles["date-range-container"]}>
                <div className={styles["date-range"]}>
                  May 25, 2023 - May 30, 2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
