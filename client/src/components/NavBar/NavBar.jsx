import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={styles["NavBar"]}>
      <div className={styles["logo"]}>
        <img src="./assets/chairbnbLogo.jpg" alt="chairbnb Logo" />
      </div>
      <div className={styles["buttonContainer"]}>
        <button className={styles["searchBarButton"]}>
          <div className={styles["littleSearchLabel"]}>Start your search</div>
          <div className={styles["littleSearchCircle"]}>
            <img src="./assets/littleSearchIcon-square.png" alt="Search" />
          </div>
        </button>
      </div>
      <div className={styles["AyhPlusGlobeContainer"]}>
        <div className={styles["Ayh"]}>Airbnb your home</div>
        <img src="./assets/globe.png" alt="globe" />
      </div>
      <div className={styles["userContainer"]}></div>
      <button>
        <div>
          <img src="./assets/hamburger.png" alt="hamburger" />
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </button>
    </div>
  );
}

export default NavBar;
