import styles from "./Reservation.module.css";

function Reservation() {
  return (
    <>
      <div className={styles["reservation"]}>
        <div className={styles["reservationTitle"]}>
          <div>Rate/night</div>
          <div className={styles["reviews"]}>stars/reviews</div>
        </div>
        <div className={styles["reservationDetails"]}>
          <div className={styles["checkInOut"]}>
            <button className={styles["checkIn"]}>CHECK-IN</button>
            <button className={styles["checkOut"]}>CHECK-OUT</button>
          </div>
          <button className={styles["guests"]}>GUESTS</button>
        </div>
        <div className={styles["reserveButton"]}>
          <button className={styles["reserve"]}>Reserve</button>
        </div>
        <div>
          <p>You won't be charged yet</p>
        </div>
        <div className={styles["costBreakdown"]}>
          <div className={styles["roomFee"]}>
            <div>$55 x 5 nights</div>
            <div>$274</div>
          </div>
          <div className={styles["cleaningFee"]}>
            <div>Cleaning fee</div>
            <div>$14</div>
          </div>
          <div className={styles["serviceFee"]}>
            <div>Chairbnb service fee</div>
            <div>$41</div>
          </div>
        </div>
        <div className={styles["totalFee"]}>
          <div>Total before taxes</div>
          <div>$329</div>
        </div>
      </div>
    </>
  );
}

export default Reservation;
