import { useEffect, useState } from "react";
import styles from "./aboutThisPlace.modules.css";

function AboutThisPlace() {
  const [aboutData, setAboutData] = useState(null);

  const fetchAboutData = async () => {
    return fetch(`http://localhost:3003/api/about/2`)
      .then((response) => response.json())
      .then((data) => {
        setAboutData(data);
        // console.log(aboutData);
      });
  };

  useEffect(() => {
    fetchAboutData();
  }, []);

  return (
    <div className={styles["about"]}>
      {aboutData !== null ? (
        <>
          <h2 className="aboutTitle">About This Place</h2>
          <div>{aboutData[0].description}</div>
          <a className="aboutShowMore">Show more &gt;</a>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default AboutThisPlace;
