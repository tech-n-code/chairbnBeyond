import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={styles["NavBar"]}>
      <div className={styles["logo"]}>
        <img className={styles["chairbnbLogo"]} src="../src/assets/chairbnbLogo.jpg" alt="chairbnb Logo" />
      </div>
      <div className={styles["searchButtonContainer"]}>
        <button className={styles["searchBarButton"]}>
          <div className={styles["littleSearchLabel"]}>Start your search</div>
          <div className={styles["littleSearchCircle"]}>
            <img className={styles["magnifyingGlass"]}src="../src/assets/littleSearchIcon-square.png" alt="Search" />
          </div>
        </button>
      </div>
      <div className={styles["AyhPlusGlobeContainer"]}>
        <div className={styles["Ayh"]}>Airbnb your home</div>
        <img className={styles["globe"]} src="../src/assets/globe.png" alt="globe" />
      </div>
      <div className={styles["userContainer"]}>
      <button>
        <div>
          <img className={styles["hamburger"]} src="../src/assets/hamburger.png" alt="hamburger" />
        </div>
        <div>
          <img className={styles["person"]} src="../src/assets/person.png" alt="personLogo" />
        </div>
      </button>
      </div>
    </div>
  );
}

export default NavBar;
