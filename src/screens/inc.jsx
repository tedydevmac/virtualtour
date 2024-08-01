import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";

function IncHq() {
  const location = useLocation();
  const { markerName, image } = location.state || {};
  const getFileName = (path) => {
    const parts = path.split("/");
    return parts[parts.length - 1];
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactPhotoSphereViewer src={image[3]} height={"100vh"} width={"100%"} />
    </div>
  );
}

export default IncHq;
