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
                    5 nights in Minot
                  </h2>
                </section>
              </div>
              <div className={styles["date-range-container"]}>
                <div className={styles["date-range"]}>
                  May 25, 2023 - May 30, 2023
                </div>
              </div>
            </div>
            <div className={styles["calendars-container-1"]}>
              <div className={styles["calendars-container-2"]}>
                <div className={styles["calendars-container-3"]}>
                  <div className={styles["calendars-container-4"]}>
                    <div className={styles["calendars-container-5"]}>
                      <div className={styles["calendars-container-6"]}>
                        <div className={styles["calendars-container-7"]}>
                          <div className={styles["calendar-days-container"]}>
                            <div className={styles["days-container"]}>
                              <ul className={styles["days-list"]}>
                                <li className={styles.day}>Su</li>
                                <li className={styles.day}>Mo</li>
                                <li className={styles.day}>Tu</li>
                                <li className={styles.day}>We</li>
                                <li className={styles.day}>Th</li>
                                <li className={styles.day}>Fr</li>
                                <li className={styles.day}>Sa</li>
                              </ul>
                            </div>
                            <div className={styles["days-container"]}>
                              <ul className={styles["days-list"]}>
                                <li className={styles.day}>Su</li>
                                <li className={styles.day}>Mo</li>
                                <li className={styles.day}>Tu</li>
                                <li className={styles.day}>We</li>
                                <li className={styles.day}>Th</li>
                                <li className={styles.day}>Fr</li>
                                <li className={styles.day}>Sa</li>
                              </ul>
                            </div>
                          </div>
                          <div className={styles["calendars-container-8"]}>
                            <div className={styles["arrow-container"]}>
                              <div className={styles["prev-arrow-container"]}>
                                <button className={styles["prev-arrow-button"]}>
                                  <span className={styles["prev-arrow-span"]}>&lt;</span>
                                </button>
                              </div>
                              <div className={styles["next-arrow-container"]}>
                                <button className={styles["next-arrow-button"]}>
                                  <span className={styles["next-arrow-span"]}>&gt;</span>
                                </button>
                              </div>
                              <div className={styles["next-arrow-container"]}></div>
                            </div>



                            <div className={styles["calendar-lean-section"]}></div>
                          </div>
                        </div>
                      </div>
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
