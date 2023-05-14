import { useEffect, useState } from "react";

function Amenities() {
  const [amenities, setAmenities] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/api/amenities/1")
      .then((res) => res.json())
      .then((data) => {
        setAmenities(data);
        console.log(amenities);
      })
      .catch((err) => {
        console.error("Error fetching amenities: ", err);
      });
  }, []);
  return (
    <div className="amenities">
      <section>
        <div>
          <h2>What this place offers</h2>
        </div>
        <div>{/* Top 10 amenities go here */}</div>
        <div>
          <button>Show all {amenities.length} amenities</button>
        </div>
      </section>
    </div>
  );
}

export default Amenities;
