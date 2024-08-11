import { ReactPhotoSphereViewer, Viewer } from "react-photo-sphere-viewer";
import { useAsyncError, useLocation } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import "../assets/styles/PageStyles/360styles.css";
import MoreInfo from "../components/moreInfo";
import "@photo-sphere-viewer/markers-plugin/index.css"; // Import the stylesheet
import { MarkersPlugin } from "@photo-sphere-viewer/markers-plugin";

function IncHq() {
  const location = useLocation();
  const { markerName, image, description, tooltips } = location.state || {};
  const [currentImage, setCurrentImage] = useState(0);
  const [markers, setMarkers] = useState(tooltips[currentImage]);
  const pSRef = useRef();

  useEffect(() => {
    if (pSRef.current) {
      const markersPlugin = pSRef.current.getPlugin(MarkersPlugin);

      if (markersPlugin) {
        // Clear existing markers
        markersPlugin.clearMarkers();

        // Add new markers
        markers.forEach((marker) => {
          markersPlugin.addMarker(marker);
        });
      }
    }
  }, [markers]);

  const getFileName = (path) => {
    const parts = path.split("/");
    return parts[parts.length - 1];
  };

  const increment = () => {
    const num = image.length - 1;
    try {
      if (currentImage < num) {
        setCurrentImage(currentImage + 1);
        setMarkers(tooltips[currentImage + 1]);
      } else {
        setCurrentImage(0);
        setMarkers(tooltips[0]);
      }
    } catch (e) {
      alert("image could not be loaded");
    }
  };

  const decrement = () => {
    const num = image.length - 1;
    try {
      if (currentImage > 0) {
        setCurrentImage(currentImage - 1);
        setMarkers(tooltips[currentImage - 1]);
      } else {
        if (currentImage === num) {
          setCurrentImage(0);
          setMarkers(tooltips[0]);
        } else {
          setCurrentImage(num);
          setMarkers(tooltips[num]);
        }
      }
    } catch (e) {
      alert("image could not be loaded");
    }
  };

  return (
    <React.Fragment>
      <div style={{ width: "100vw", height: "100vh" }}>
        <button
          style={{
            position: "absolute",
            top: "5%",
            left: "5%",
            height: "5%",
            width: "8%",
            transform: "translate(-50%, -50%)",
            zIndex: "1000",
          }}
          className="modalButton"
          onClick={() => window.history.back()}
        >
          Return
        </button>
        <ReactPhotoSphereViewer
          src={image[currentImage]}
          ref={pSRef}
          height={"100vh"}
          width={"100%"}
          defaultZoomLvl={0}
          plugins={[
            [
              MarkersPlugin,
              {
                markers: markers,
                defaultHoverScale: true,
              },
            ],
          ]}
          moveInertia={true}
          onReady={(viewer) => {
            pSRef.current = viewer;
            const markersPlugin = viewer.getPlugin(MarkersPlugin);

            if (markersPlugin) {
              // Clear existing markers
              markersPlugin.clearMarkers();

              // Add new markers
              markers.forEach((marker) => {
                markersPlugin.addMarker(marker);
              });
            }
          }}
        />
        <button
          className="next butt"
          style={{
            position: "absolute",
            top: "50%",
            left: "97%",
            transform: "translate(-50%, -50%)",
          }}
          onClick={increment}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="65"
            height="65"
            viewBox="0 0 65 65"
            fill="none"
          >
            <rect
              width="65"
              height="65"
              rx="11"
              fill="white"
              fill-opacity="0.48"
            />
            <rect
              width="65"
              height="65"
              rx="11"
              fill="white"
              fill-opacity="0.48"
            />
            <rect
              x="5"
              y="5"
              width="55"
              height="55"
              rx="11"
              fill="black"
              fill-opacity="0.62"
            />
            <path
              d="M49.4142 35.4142C50.1953 34.6332 50.1953 33.3668 49.4142 32.5858L36.6863 19.8579C35.9052 19.0768 34.6389 19.0768 33.8579 19.8579C33.0768 20.6389 33.0768 21.9052 33.8579 22.6863L45.1716 34L33.8579 45.3137C33.0768 46.0948 33.0768 47.3611 33.8579 48.1421C34.6389 48.9232 35.9052 48.9232 36.6863 48.1421L49.4142 35.4142ZM13 36L48 36V32L13 32V36Z"
              fill="white"
            />
          </svg>
        </button>
        <button
          style={{
            position: "absolute",
            top: "50%",
            left: "3%",
            transform: "translate(-50%, -50%)",
            cursor: "pointer",
          }}
          className="prev butt"
          onClick={decrement}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="65"
            height="65"
            viewBox="0 0 65 65"
            fill="none"
          >
            <rect
              width="65"
              height="65"
              rx="11"
              fill="white"
              fill-opacity="0.48"
            />
            <rect
              width="65"
              height="65"
              rx="11"
              fill="white"
              fill-opacity="0.48"
            />
            <rect
              x="5"
              y="5"
              width="55"
              height="55"
              rx="11"
              fill="black"
              fill-opacity="0.62"
            />
            <path
              d="M13.5858 30.5858C12.8047 31.3668 12.8047 32.6332 13.5858 33.4142L26.3137 46.1421C27.0948 46.9232 28.3611 46.9232 29.1421 46.1421C29.9232 45.3611 29.9232 44.0948 29.1421 43.3137L17.8284 32L29.1421 20.6863C29.9232 19.9052 29.9232 18.6389 29.1421 17.8579C28.3611 17.0768 27.0948 17.0768 26.3137 17.8579L13.5858 30.5858ZM50 30L15 30V34L50 34V30Z"
              fill="white"
            />
          </svg>
        </button>
        <MoreInfo markerName={markerName} description={description} />
      </div>
    </React.Fragment>
  );
}

export default IncHq;
