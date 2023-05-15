import React, { useEffect, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import styles from "./Map.module.css";

function Map() {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/api/location")
      .then((res) => res.json())
      .then((data) => {
        setLocation(data);
        console.log(data)
        const loader = new Loader({
          apiKey: "AIzaSyB1NYoGWbuFCIhTHipFCVItMVUoYg27ncM",
          version: "weekly",
          // ...additionalOptions
        });

        loader.load().then(() => {
          const google = window.google;
          var styles = [
            [
                {
                  "featureType": "administrative.land_parcel",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "administrative.locality",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "administrative.neighborhood",
                  "stylers": [
                    {
                      "visibility": "simplified"
                    }
                  ]
                },
                {
                  "featureType": "poi",
                  "stylers": [
                    {
                      "weight": 2
                    }
                  ]
                },
                {
                  "featureType": "poi",
                  "elementType": "labels.icon",
                  "stylers": [
                    {
                      "lightness": 40
                    }
                  ]
                },
                {
                  "featureType": "poi",
                  "elementType": "labels.text",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "poi.attraction",
                  "stylers": [
                    {
                      "color": "#ffeb3b"
                    }
                  ]
                },
                {
                  "featureType": "poi.attraction",
                  "elementType": "labels.icon",
                  "stylers": [
                    {
                      "visibility": "on"
                    },
                    {
                      "weight": 1.5
                    }
                  ]
                },
                {
                  "featureType": "poi.government",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "poi.medical",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "road",
                  "elementType": "labels",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "road",
                  "elementType": "labels.icon",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "road.arterial",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "labels",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "road.local",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "transit",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "water",
                  "elementType": "labels.text",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                }
              ]
          ];
          const map = new google.maps.Map(
            document.getElementById("map-container"),
            {
              center: { lat: 48.230164, lng: -101.291199 },
              zoom: 12,
              styles: styles,
            }
          );
        });
      })
      .catch((error) => {
        console.error("Error fetching location:", error);
      });
  }, []);

  return (
    <>
      <div id="map-container" className={styles["map-container"]}></div>;
    </>
  );
}

export default Map;
