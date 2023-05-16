import React from "react";
import styles from "./Reviews.module.css";

export default function Reviews() {
  return (
    <div className={styles["reviews-section"]}>
      <div className={styles["group-section"]}>
        <div className={styles["component-container"]}>
          <div className={styles["component-subcontainer-1"]}>
            <div className={styles["top-border"]}></div>
            <div className={styles["component-subcontainer-2"]}>
              <section className={styles["lean-section"]}>
                <div className={styles["title-container"]}>
                  <span className={styles["star-container"]}>★</span>
                  <span className={styles["rating-reviews"]}>
                    <h2 className={styles["section-header"]}>
                      <span className={styles["rating-reviews-text"]}>
                        4.95 · 21 reviews
                      </span>
                    </h2>
                  </span>
                </div>
                <div className={styles["attributes-section"]}>
                  <div className={styles["attributes-container"]}>
                    <div className={styles["attributes-lean-container"]}>
                      <div className={styles["attribute-container-1"]}>
                        <div className={styles["attribute-container-2"]}>
                          <div className={styles["attribute-rating-container"]}>
                            <div className={styles.attribute}>Cleanliness</div>
                            <div className={styles["rating-container"]}>
                              <div
                                className={styles["rating-slider-container"]}
                              >
                                <span className={styles["rating-slider"]}></span>
                              </div>
                              <span className={styles["attribute-rating"]}>5.0</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles["attribute-container-1"]}>
                        <div className={styles["attribute-container-2"]}>
                          <div className={styles["attribute-rating-container"]}>
                            <div className={styles.attribute}>Accuracy</div>
                            <div className={styles["rating-container"]}>
                              <div
                                className={styles["rating-slider-container"]}
                              >
                                <span className={styles["rating-slider"]}></span>
                              </div>
                              <span className={styles["attribute-rating"]}>5.0</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles["attribute-container-1"]}>
                        <div className={styles["attribute-container-2"]}>
                          <div className={styles["attribute-rating-container"]}>
                            <div className={styles.attribute}>Communication</div>
                            <div className={styles["rating-container"]}>
                              <div
                                className={styles["rating-slider-container"]}
                              >
                                <span className={styles["rating-slider"]}></span>
                              </div>
                              <span className={styles["attribute-rating"]}>5.0</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles["attribute-container-1"]}>
                        <div className={styles["attribute-container-2"]}>
                          <div className={styles["attribute-rating-container"]}>
                            <div className={styles.attribute}>Location</div>
                            <div className={styles["rating-container"]}>
                              <div
                                className={styles["rating-slider-container"]}
                              >
                                <span className={styles["rating-slider"]}></span>
                              </div>
                              <span className={styles["attribute-rating"]}>5.0</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles["attribute-container-1"]}>
                        <div className={styles["attribute-container-2"]}>
                          <div className={styles["attribute-rating-container"]}>
                            <div className={styles.attribute}>Check-in</div>
                            <div className={styles["rating-container"]}>
                              <div
                                className={styles["rating-slider-container"]}
                              >
                                <span className={styles["rating-slider"]}></span>
                              </div>
                              <span className={styles["attribute-rating"]}>5.0</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles["attribute-container-1"]}>
                        <div className={styles["attribute-container-2"]}>
                          <div className={styles["attribute-rating-container"]}>
                            <div className={styles.attribute}>Value</div>
                            <div className={styles["rating-container"]}>
                              <div
                                className={styles["rating-slider-container"]}
                              >
                                <span className={styles["rating-slider"]}></span>
                              </div>
                              <span className={styles["attribute-rating"]}>5.0</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
