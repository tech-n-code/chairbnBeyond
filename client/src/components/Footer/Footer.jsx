import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
      <div className={styles["footer"]}>
        <div className={styles["supportContainer"]}>
          <div className={styles["title"]}>Support</div>
          <div>
            <div className={styles["containerElement"]}>Help Center</div>
            <div className={styles["containerElement"]}>Chaircover</div>
            <div className={styles["containerElement"]}>
              Supporting people with disabilities
            </div>
            <div className={styles["containerElement"]}>
              Cancellation options
            </div>
            <div className={styles["containerElement"]}>
              Our CHOVID-19 Response
            </div>
            <div className={styles["containerElement"]}>
              Report a neighborhood concern
            </div>
          </div>
        </div>
        <div className={styles["communityContainer"]}>
          <div className={styles["title"]}>Community</div>
          <div>
            <div className={styles["containerElement"]}>
              Chairbnb.org: disaster relief housing
            </div>
            <div className={styles["containerElement"]}>
              Chombating discrimination
            </div>
          </div>
        </div>
        <div className={styles["hostingContainer"]}>
          <div className={styles["title"]}>Hosting</div>
          <div>
            <div className={styles["containerElement"]}>Chairbnb your home</div>
            <div className={styles["containerElement"]}>
              Chaircover for Hosts
            </div>
            <div className={styles["containerElement"]}>
              Explore hosting resources
            </div>
            <div className={styles["containerElement"]}>
              Visit our community forum
            </div>
            <div className={styles["containerElement"]}>
              How to chair responsibly
            </div>
            <div className={styles["containerElement"]}>
              Chairbnb-friendly apartments
            </div>
          </div>
        </div>
        <div className={styles["chairbnbContainer"]}>
          <div className={styles["title"]}>Chairbnb</div>
          <div>
            <div className={styles["containerElement"]}>Newsroom</div>
            <div className={styles["containerElement"]}>
              Learn about new features
            </div>
            <div className={styles["containerElement"]}>
              Letter from our founders
            </div>
            <div className={styles["containerElement"]}>Careers</div>
            <div className={styles["containerElement"]}>Investors</div>
            <div className={styles["containerElement"]}>Gift cards</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
