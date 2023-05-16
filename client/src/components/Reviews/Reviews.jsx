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
                            <span className={styles["rating-reviews-text"]}>4.95 · 21 reviews</span>
                        </h2>
                    </span>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
