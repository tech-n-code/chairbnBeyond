import { useEffect, useState } from "react";
import styles from "./TitleBar.module.css";

function TitleBar(props) {
    const [titleData, setTitleData] = useState([]);

    const fetchTitleData = async () => {
        try {
          const response = await fetch(`http://localhost:3050/api/title/${props.listingId}`);
          const data = await response.json();
          console.log(data);
          setTitleData(data);
        } catch (error) {
          console.log(error);
        }
      };

    useEffect(() => {
        fetchTitleData();
      }, []);

  return (
    <>
      <div className={styles["titlebar"]}>
        <div className={styles["titleContainer"]}>
          <img src="../../../../src/assets/accessibility.png" alt="" />
            {titleData.length > 0 ? (<div className={styles["actualTitle"]}>{titleData[0].title}</div>) : (<div>Loading...</div>)}
          {/* <div className={styles["actualTitle"]}>{titleData[0].title}Property Title</div> */}
        </div>

        <div className={styles["extraInfo"]}>
          <div className={styles["extraInfoLeft"]}>
            <span className={styles["starIcon"]}>&#9733;</span>
            <div className={styles["infoElement"]}>4.95</div>
            <div className={styles["infoElement"]}> &#x2022; </div>
            <div className={styles["infoElement"]}>
              <a 
            //   href="nothingyet"
              >4 Reviews</a>
            </div>
            <div className={styles["infoElement"]}> &#x2022; </div>
            <div className={styles["infoElement"]}>
              <a 
            //   href="nothingyet"
              >Milano, Lombardia, Italy</a>
            </div>
          </div>
          <div className={styles["extraInfoRight"]}>
            <div className={styles["infoElement"]}>
              <img
                className={styles["upload"]}
                src="../../../../src/assets/upload.png"
                alt=""
              />
            </div>
            <div className={styles["infoElement"]}>
              <a 
            //   href="nothingyet"
              >Share</a>
            </div>
            <div className={styles["infoElement"]}>&#10084;</div>
            <div className={styles["infoElement"]}>
              <a 
            //   href="nothingyet"
              >Save</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TitleBar;
