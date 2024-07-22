import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import { useLocation } from "react-router-dom";
import React from "react";

function IncHq() {
  const location = useLocation();
  const markerName = location.state?.markerName;
  // const filePath = markerName === "Block X" ? "XXX.jpg" : "XXX.jpg"; => fill in later after 360 images are uploaded
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactPhotoSphereViewer
        // src={filePath}
        src="../360Screens/360Images/incHQ/1st.jpg"
        height={"100vh"}
        width={"100%"}
      />
    </div>
  );
}

export default IncHq;
