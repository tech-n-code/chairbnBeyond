import { useEffect, useState } from "react";

function Amenities() {
  const [amenities, setAmenities] = useState([]);
  useEffect(() => {
    fetch("/api/amenities")
      .then((res) => res.json())
      .then((data) => setAmenities(data));
  }, []);
  return (
    <div className="amenities">
      Amenities
      <section>
        <div></div>
      </section>
    </div>
  );
}

export default Amenities;
