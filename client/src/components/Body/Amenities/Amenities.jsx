import { useEffect, useState } from "react";
import styles from "./Amenities.module.css";
import Modal from "./Modal/Modal.jsx";

function Amenities() {
  const [amenities, setAmenities] = useState([]);
  const [tenAmenities, setTenAmenities] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    fetch("http://localhost:3002/api/amenities/1")
      .then((res) => res.json())
      .then((data) => {
        setAmenities(data);
        console.log(amenities);
      })
      .catch((err) => {
        console.error("Error fetching amenities: ", err);
      })
      .then(
        fetch("http://localhost:3002/api/amenities/ten/1").then((res) =>
          res.json().then((data) => setTenAmenities(data))
        )
      );
  }, []);
  return (
    <div className={styles["master_container"]}>
      <div className={styles["amenities-div"]}>
        <div className={styles["title_div"]}>
          <div className={styles["title_header"]}>
            <h2 className={styles["title"]}>What this place offers</h2>
          </div>
        </div>

        <div className={styles["amenity-table"]}>
          {tenAmenities.map((amenity) => (
            <div className={styles["amenities_div"]}>
              <div className={styles["amenity_svg"]}></div>
              <div className={styles["amenity"]}>{amenity.amenity}</div>
            </div>
          ))}
        </div>
        <div className={styles["amenities-button-div"]}>
          <button
            type="button"
            className={styles["show-amenities-button"]}
            onClick={openModal}
          >
            Show all {amenities.length} amenities
          </button>
          <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </div>
    </div>
  );
}

export default Amenities;
