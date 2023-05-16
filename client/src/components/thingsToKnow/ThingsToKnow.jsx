import React from "react";
import styles from "./ThingsToKnow.module.css";

export default function ThingsToKnow() {
  return (
    <div className={styles["component-container"]}>
      <div className={styles["component-subcontainer-1"]}>
        <div className={styles["component-subcontainer-2"]}>
          <div className={styles["top-border"]}></div>
          <div className={styles["component-subcontainer-3"]}>
            <div className={styles["component-subcontainer-4"]}>
              <div className={styles["title-container"]}>
                <div className={styles["component-title"]}>
                  <section className={styles["title-section"]}>
                    <h2 className={styles["component-heading"]}>
                      Things to know
                    </h2>
                  </section>
                </div>
              </div>
              <div className={styles["component-subcontainer-5"]}>
                <div className={styles["subsection-container-1"]}>
                  <div className={styles["subsection-container-2"]}>
                    <div className={styles["subsection-container-3"]}>
                      <div className={styles["subtitle-container-1"]}>
                        <h3 className={styles["component-subtitle-1"]}>
                          House rules
                        </h3>
                      </div>
                      <div className={styles["list-item-container-1"]}>
                        <div className={styles["list-item-container-2"]}>
                          <span className={styles["list-item-1"]}>
                            Flexible check-in
                          </span>
                        </div>
                      </div>
                      <div className={styles["list-item-container-1"]}>
                        <div className={styles["list-item-container-2"]}>
                          <span className={styles["list-item-1"]}>
                            2 guests maximum
                          </span>
                        </div>
                      </div>
                      <div className={styles["list-item-container-1"]}>
                        <div className={styles["list-item-container-2"]}>
                          <span className={styles["list-item-1"]}>No pets</span>
                        </div>
                      </div>
                      <div className={styles["show-more-container-1"]}>
                        Show more &gt;
                        {/* <button className={styles["show-more-button"]}>
                          <span className={styles["show-more-arrow"]}>
                            <span className={styles["show-more"]}>Show more &gt;</span>
                            <span className={styles["arrow-container"]}></span>
                          </span>
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["subsection-container-1"]}>
                  <div className={styles["subsection-container-2"]}>
                    <div className={styles["subsection-container-3"]}>
                      <div className={styles["subtitle-container-1"]}>
                        <h3 className={styles["component-subtitle-1"]}>
                          Safety & property
                        </h3>
                      </div>
                      <div className={styles["list-item-container-1"]}>
                        <div className={styles["list-item-container-2"]}>
                          <span className={styles["list-item-1"]}>
                            No carbon monoxide alarm
                          </span>
                        </div>
                      </div>
                      <div className={styles["list-item-container-1"]}>
                        <div className={styles["list-item-container-2"]}>
                          <span className={styles["list-item-1"]}>
                            Security camera
                          </span>
                        </div>
                      </div>
                      <div className={styles["list-item-container-1"]}>
                        <div className={styles["list-item-container-2"]}>
                          <span className={styles["list-item-1"]}>
                            Smoke alarm
                          </span>
                        </div>
                      </div>
                      <div className={styles["show-more-container-1"]}>
                        Show more &gt;
                        {/* <button className={styles["show-more-button"]}>
                          <span className={styles["show-more-arrow"]}>
                            <span className={styles["show-more"]}>Show more &gt;</span>
                            <span className={styles["arrow-container"]}></span>
                          </span>
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["subsection-container-1"]}>
                  <div className={styles["subsection-container-2"]}>
                    <div className={styles["subsection-container-4"]}>
                      <div className={styles["subtitle-container-2"]}>
                        <h3 className={styles["component-subtitle-2"]}>
                          Cancellation policy
                        </h3>
                      </div>
                      <div className={styles["list-item-container-3"]}>
                        <span className={styles["list-item-2"]}>
                          Free cancellation before Jun 7.
                        </span>
                      </div>
                      <div className={styles["list-item-container-3"]}>
                        <span className={styles["list-item-2"]}>
                          Review the Host’s full cancellation policy which
                          applies even if you cancel for illness or disruptions
                          caused by COVID-19.
                        </span>
                      </div>
                      <div className={styles["show-more-container-2"]}>
                        Show more &gt;
                        {/* <button className={styles["show-more-button"]}>
                          <span className={styles["show-more-arrow"]}>
                            <span className={styles["show-more"]}>Show more &gt;</span>
                            <span className={styles["arrow-container"]}></span>
                          </span>
                        </button> */}
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
