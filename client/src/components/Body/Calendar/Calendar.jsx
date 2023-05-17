import React from "react";
import styles from "./Calendar.module.css";

export default function Calendar() {
    return (
        <div className={styles["calendar-component"]}>
            <div className={styles["group-section"]}>
                <div className={styles["top-border"]}></div>
            </div>
        </div>
    )
}