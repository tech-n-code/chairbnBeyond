import React, { useEffect, useState } from "react";
import styles from "./Reviews.module.css";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("http://localhost:3005/api/reviews");
        const data = await response.json();
        setReviews(data);
        console.log("fetched reviews:", data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);


  return (
    <div className={styles["reviews-component"]}>
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
                                <span
                                  className={styles["rating-slider"]}
                                ></span>
                              </div>
                              <span className={styles["attribute-rating"]}>
                                5.0
                              </span>
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
                                <span
                                  className={styles["rating-slider"]}
                                ></span>
                              </div>
                              <span className={styles["attribute-rating"]}>
                                5.0
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles["attribute-container-1"]}>
                        <div className={styles["attribute-container-2"]}>
                          <div className={styles["attribute-rating-container"]}>
                            <div className={styles.attribute}>
                              Communication
                            </div>
                            <div className={styles["rating-container"]}>
                              <div
                                className={styles["rating-slider-container"]}
                              >
                                <span
                                  className={styles["rating-slider"]}
                                ></span>
                              </div>
                              <span className={styles["attribute-rating"]}>
                                5.0
                              </span>
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
                                <span
                                  className={styles["rating-slider"]}
                                ></span>
                              </div>
                              <span className={styles["attribute-rating"]}>
                                5.0
                              </span>
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
                                <span
                                  className={styles["rating-slider"]}
                                ></span>
                              </div>
                              <span className={styles["attribute-rating"]}>
                                5.0
                              </span>
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
                                <span
                                  className={styles["rating-slider"]}
                                ></span>
                              </div>
                              <span className={styles["attribute-rating"]}>
                                5.0
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["reviews-section"]}>
                  <div className={styles["reviews-section-container"]}>
                    <div className={styles["reviews-section-spacing"]}>


                    {reviews.map((review, index) => (
              <div className={styles["individual-review-container-1"]} key={index}>
                {/* Individual review JSX */}
                <div className={styles["user-date-section"]}>
                  <div className={styles["user-date-container"]}>
                    <div className={styles["name-date-container"]}>
                      <h3 className={styles["user-name"]}>{review.fname}</h3>
                      <div className={styles["review-date-container"]}>
                        <div className={styles["review-date"]}>
                          <ol className={styles["date-list"]}>
                            <li className={styles.date}>{review.date}</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                    <div className={styles["user-photo-container"]}>
                      <div className={styles["user-photo-formatting-1"]}>
                        <div className={styles["user-photo-formatting-2"]}>
                          <div className={styles["user-photo-formatting-3"]}>
                            <img
                              className={styles.picture}
                              src={review.userPhoto}
                              alt={review.fname}
                            />
                            <div className={styles["user-unknown"]}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["review-container-1"]}>
                  <div className={styles["review-container-2"]}>
                    <span className={styles["review-span-1"]}>
                      <span className={styles["review-span-2"]}>
                        {review.review}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            ))}


                      {/* <div className={styles["individual-review-container-1"]}>
                        <div
                          className={styles["individual-review-container-1"]}
                        >
                          <div className={styles["user-date-section"]}>
                            <div className={styles["user-date-container"]}>
                              <div className={styles["name-date-container"]}>
                                <h3 className={styles["user-name"]}>Tanya</h3>
                                <div
                                  className={styles["review-date-container"]}
                                >
                                  <div className={styles["review-date"]}>
                                    <ol className={styles["date-list"]}>
                                      <li className={styles.date}>
                                        October 2022
                                      </li>
                                    </ol>
                                  </div>
                                </div>
                              </div>
                              <div className={styles["user-photo-container"]}>
                                <div
                                  className={styles["user-photo-formatting-1"]}
                                >
                                  <div
                                    className={
                                      styles["user-photo-formatting-2"]
                                    }
                                  >
                                    <div
                                      className={
                                        styles["user-photo-formatting-3"]
                                      }
                                    >
                                      <img
                                        className={styles.picture}
                                        src="https://a0.muscache.com/im/pictures/user/5fc87401-013c-453f-b853-352d2b213b92.jpg?im_w=240"
                                        alt="Tanya"
                                      />
                                      <div
                                        className={styles["user-unknown"]}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles["review-container-1"]}>
                            <div className={styles["review-container-2"]}>
                              <span className={styles["review-span-1"]}>
                                <span className={styles["review-span-2"]}>
                                  It was a good stay, with a little issue with
                                  other guests that was promptly resolved with
                                  the host, very prompt!
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      
                      {/* <div className={styles["individual-review-container-1"]}>
                        <div
                          className={styles["individual-review-container-1"]}
                        >
                          <div className={styles["user-date-section"]}>
                            <div className={styles["user-date-container"]}>
                              <div className={styles["name-date-container"]}>
                                <h3 className={styles["user-name"]}>Tanya</h3>
                                <div
                                  className={styles["review-date-container"]}
                                >
                                  <div className={styles["review-date"]}>
                                    <ol className={styles["date-list"]}>
                                      <li className={styles.date}>
                                        October 2022
                                      </li>
                                    </ol>
                                  </div>
                                </div>
                              </div>
                              <div className={styles["user-photo-container"]}>
                                <div
                                  className={styles["user-photo-formatting-1"]}
                                >
                                  <div
                                    className={
                                      styles["user-photo-formatting-2"]
                                    }
                                  >
                                    <div
                                      className={
                                        styles["user-photo-formatting-3"]
                                      }
                                    >
                                      <img
                                        className={styles.picture}
                                        src="https://a0.muscache.com/im/pictures/user/5fc87401-013c-453f-b853-352d2b213b92.jpg?im_w=240"
                                        alt="Tanya"
                                      />
                                      <div
                                        className={styles["user-unknown"]}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles["review-container-1"]}>
                            <div className={styles["review-container-2"]}>
                              <span className={styles["review-span-1"]}>
                                <span className={styles["review-span-2"]}>
                                  It was a good stay, with a little issue with
                                  other guests that was promptly resolved with
                                  the host, very prompt!
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles["individual-review-container-1"]}>
                        <div
                          className={styles["individual-review-container-1"]}
                        >
                          <div className={styles["user-date-section"]}>
                            <div className={styles["user-date-container"]}>
                              <div className={styles["name-date-container"]}>
                                <h3 className={styles["user-name"]}>Tanya</h3>
                                <div
                                  className={styles["review-date-container"]}
                                >
                                  <div className={styles["review-date"]}>
                                    <ol className={styles["date-list"]}>
                                      <li className={styles.date}>
                                        October 2022
                                      </li>
                                    </ol>
                                  </div>
                                </div>
                              </div>
                              <div className={styles["user-photo-container"]}>
                                <div
                                  className={styles["user-photo-formatting-1"]}
                                >
                                  <div
                                    className={
                                      styles["user-photo-formatting-2"]
                                    }
                                  >
                                    <div
                                      className={
                                        styles["user-photo-formatting-3"]
                                      }
                                    >
                                      <img
                                        className={styles.picture}
                                        src="https://a0.muscache.com/im/pictures/user/5fc87401-013c-453f-b853-352d2b213b92.jpg?im_w=240"
                                        alt="Tanya"
                                      />
                                      <div
                                        className={styles["user-unknown"]}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles["review-container-1"]}>
                            <div className={styles["review-container-2"]}>
                              <span className={styles["review-span-1"]}>
                                <span className={styles["review-span-2"]}>
                                  It was a good stay, with a little issue with
                                  other guests that was promptly resolved with
                                  the host, very prompt!
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles["individual-review-container-1"]}>
                        <div
                          className={styles["individual-review-container-1"]}
                        >
                          <div className={styles["user-date-section"]}>
                            <div className={styles["user-date-container"]}>
                              <div className={styles["name-date-container"]}>
                                <h3 className={styles["user-name"]}>Tanya</h3>
                                <div
                                  className={styles["review-date-container"]}
                                >
                                  <div className={styles["review-date"]}>
                                    <ol className={styles["date-list"]}>
                                      <li className={styles.date}>
                                        October 2022
                                      </li>
                                    </ol>
                                  </div>
                                </div>
                              </div>
                              <div className={styles["user-photo-container"]}>
                                <div
                                  className={styles["user-photo-formatting-1"]}
                                >
                                  <div
                                    className={
                                      styles["user-photo-formatting-2"]
                                    }
                                  >
                                    <div
                                      className={
                                        styles["user-photo-formatting-3"]
                                      }
                                    >
                                      <img
                                        className={styles.picture}
                                        src="https://a0.muscache.com/im/pictures/user/5fc87401-013c-453f-b853-352d2b213b92.jpg?im_w=240"
                                        alt="Tanya"
                                      />
                                      <div
                                        className={styles["user-unknown"]}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles["review-container-1"]}>
                            <div className={styles["review-container-2"]}>
                              <span className={styles["review-span-1"]}>
                                <span className={styles["review-span-2"]}>
                                  It was a good stay, with a little issue with
                                  other guests that was promptly resolved with
                                  the host, very prompt!
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles["individual-review-container-1"]}>
                        <div
                          className={styles["individual-review-container-1"]}
                        >
                          <div className={styles["user-date-section"]}>
                            <div className={styles["user-date-container"]}>
                              <div className={styles["name-date-container"]}>
                                <h3 className={styles["user-name"]}>Tanya</h3>
                                <div
                                  className={styles["review-date-container"]}
                                >
                                  <div className={styles["review-date"]}>
                                    <ol className={styles["date-list"]}>
                                      <li className={styles.date}>
                                        October 2022
                                      </li>
                                    </ol>
                                  </div>
                                </div>
                              </div>
                              <div className={styles["user-photo-container"]}>
                                <div
                                  className={styles["user-photo-formatting-1"]}
                                >
                                  <div
                                    className={
                                      styles["user-photo-formatting-2"]
                                    }
                                  >
                                    <div
                                      className={
                                        styles["user-photo-formatting-3"]
                                      }
                                    >
                                      <img
                                        className={styles.picture}
                                        src="https://a0.muscache.com/im/pictures/user/5fc87401-013c-453f-b853-352d2b213b92.jpg?im_w=240"
                                        alt="Tanya"
                                      />
                                      <div
                                        className={styles["user-unknown"]}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles["review-container-1"]}>
                            <div className={styles["review-container-2"]}>
                              <span className={styles["review-span-1"]}>
                                <span className={styles["review-span-2"]}>
                                  It was a good stay, with a little issue with
                                  other guests that was promptly resolved with
                                  the host, very prompt!
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles["individual-review-container-1"]}>
                        <div
                          className={styles["individual-review-container-1"]}
                        >
                          <div className={styles["user-date-section"]}>
                            <div className={styles["user-date-container"]}>
                              <div className={styles["name-date-container"]}>
                                <h3 className={styles["user-name"]}>Tanya</h3>
                                <div
                                  className={styles["review-date-container"]}
                                >
                                  <div className={styles["review-date"]}>
                                    <ol className={styles["date-list"]}>
                                      <li className={styles.date}>
                                        October 2022
                                      </li>
                                    </ol>
                                  </div>
                                </div>
                              </div>
                              <div className={styles["user-photo-container"]}>
                                <div
                                  className={styles["user-photo-formatting-1"]}
                                >
                                  <div
                                    className={
                                      styles["user-photo-formatting-2"]
                                    }
                                  >
                                    <div
                                      className={
                                        styles["user-photo-formatting-3"]
                                      }
                                    >
                                      <img
                                        className={styles.picture}
                                        src="https://a0.muscache.com/im/pictures/user/5fc87401-013c-453f-b853-352d2b213b92.jpg?im_w=240"
                                        alt="Tanya"
                                      />
                                      <div
                                        className={styles["user-unknown"]}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles["review-container-1"]}>
                            <div className={styles["review-container-2"]}>
                              <span className={styles["review-span-1"]}>
                                <span className={styles["review-span-2"]}>
                                  It was a good stay, with a little issue with
                                  other guests that was promptly resolved with
                                  the host, very prompt!
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className={styles["reviews-button-container"]}>
                  <button className={styles["reviews-button"]}>
                    Show all 21 reviews
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
