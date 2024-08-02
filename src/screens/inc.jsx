import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../assets/styles/PageStyles/360styles.css";
import MoreInfo from "../components/moreInfo";

function IncHq() {
  const location = useLocation();
  const { markerName, image, description } = location.state || {};
  const [currentImage, setCurrentImage] = useState(0);
  const getFileName = (path) => {
    const parts = path.split("/");
    return parts[parts.length - 1];
  };

  const increment = () => {
    const num = image.length - 1;
    if (currentImage < num) {
      setCurrentImage(currentImage + 1);
    } else {
      setCurrentImage(0);
    }
  };

  const decrement = () => {
    const num = image.length - 1;
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    } else {
      if (currentImage === num) {
        setCurrentImage(0);
      } else {
        setCurrentImage(num);
      }
    }
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactPhotoSphereViewer
        src={image[currentImage]}
        height={"100vh"}
        width={"100%"}
      />
      <button
        class="next butt"
        style={{
          position: "absolute",
          top: "50%",
          left: "95%",
          transform: "translate(-50%, -50%)",
        }}
        onClick={increment}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="#fff"
        >
          <mask id="path-1-inside-1_205_126" fill="white">
            <path d="M34 17C34 26.3888 26.3888 34 17 34C7.61116 34 0 26.3888 0 17C0 7.61116 7.61116 0 17 0C26.3888 0 34 7.61116 34 17Z" />
          </mask>
          <path
            d="M29.7071 17.7071C30.0976 17.3166 30.0976 16.6834 29.7071 16.2929L23.3431 9.92893C22.9526 9.53841 22.3195 9.53841 21.9289 9.92893C21.5384 10.3195 21.5384 10.9526 21.9289 11.3431L27.5858 17L21.9289 22.6569C21.5384 23.0474 21.5384 23.6805 21.9289 24.0711C22.3195 24.4616 22.9526 24.4616 23.3431 24.0711L29.7071 17.7071ZM5 18H29V16H5V18ZM32 17C32 25.2843 25.2843 32 17 32V36C27.4934 36 36 27.4934 36 17H32ZM17 32C8.71573 32 2 25.2843 2 17H-2C-2 27.4934 6.50659 36 17 36V32ZM2 17C2 8.71573 8.71573 2 17 2V-2C6.50659 -2 -2 6.50659 -2 17H2ZM17 2C25.2843 2 32 8.71573 32 17H36C36 6.50659 27.4934 -2 17 -2V2Z"
            fill="black"
            mask="url(#path-1-inside-1_205_126)"
          />
        </svg>
      </button>
      <button
        style={{
          position: "absolute",
          top: "50%",
          left: "5%",
          transform: "translate(-50%, -50%)",
        }}
        class="prev butt"
        onClick={decrement}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="#fff"
        >
          <mask id="path-1-inside-1_205_127" fill="white">
            <path d="M0 17C0 7.61116 7.61116 0 17 0C26.3888 0 34 7.61116 34 17C34 26.3888 26.3888 34 17 34C7.61116 34 0 26.3888 0 17Z" />
          </mask>
          <path
            d="M4.29289 16.2929C3.90237 16.6834 3.90237 17.3166 4.29289 17.7071L10.6569 24.0711C11.0474 24.4616 11.6805 24.4616 12.0711 24.0711C12.4616 23.6805 12.4616 23.0474 12.0711 22.6569L6.41421 17L12.0711 11.3431C12.4616 10.9526 12.4616 10.3195 12.0711 9.92893C11.6805 9.53841 11.0474 9.53841 10.6569 9.92893L4.29289 16.2929ZM29 16L5 16V18L29 18V16ZM2 17C2 8.71573 8.71573 2 17 2V-2C6.50659 -2 -2 6.50659 -2 17H2ZM17 2C25.2843 2 32 8.71573 32 17H36C36 6.50659 27.4934 -2 17 -2V2ZM32 17C32 25.2843 25.2843 32 17 32V36C27.4934 36 36 27.4934 36 17H32ZM17 32C8.71573 32 2 25.2843 2 17H-2C-2 27.4934 6.50659 36 17 36V32Z"
            fill="black"
            mask="url(#path-1-inside-1_205_127)"
          />
        </svg>
      </button>
      <MoreInfo markerName={markerName} description={description} />
    </div>
  );
}

export default IncHq;
