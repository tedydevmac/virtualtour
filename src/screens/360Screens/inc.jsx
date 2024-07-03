import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import React from "react";

function IncHq() {
  return (
    <div className="App">
      <ReactPhotoSphereViewer
        src="./360Images/incHQ/1st.jpg"
        height={"100vh"}
        width={"100%"}
      ></ReactPhotoSphereViewer>
    </div>
  );
}

export default IncHq;
