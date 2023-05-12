import { useEffect, useState } from "react";

function Amenities() {
  const [amenities, setAmenities] = useState([]);
  useEffect(() => {
    fetch("/api/amenities")
      .then((res) => res.json())
      .then((data) => setAmenities(data));
  }, []);
  return <div className="amenities">Amenities</div>;
}

export default Amenities;
