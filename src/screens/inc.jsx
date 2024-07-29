import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";

function IncHq() {
  const location = useLocation();
  const { markerName, image } = location.state || {};

  useEffect(() => {
    console.log("Location State: ", location.state);
    console.log("Marker Name: ", markerName);
    console.log("Image: ", image);
  }, [location.state, markerName, image]);

  const handleImageError = (event) => {
    console.error("Error loading image: ", event);
  };

  return <div style={{ width: "100vw", height: "100vh" }}></div>;
}

export default IncHq;
