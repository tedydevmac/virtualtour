import React from "react";
import sstOverview from "../assets/sstoverview.png";
import { useNavigate } from "react-router-dom";
import "../styles/overviewStyles.css";

// Marker data
const markers = [
  { id: 1, name: "Block C", x: 35, y: 7.5 }, // x and y as percentages
  { id: 2, name: "Block D", x: 49, y: 68 },
  { id: 3, name: "Block B", x: 83, y: 8 },
  { id: 4, name: "Block A", x: 87, y: 40 },
];

const Marker = ({ marker, onClick }) => {
  function Svg() {
    if (marker.id == 3 || marker.id == 2) {
      return (
        <svg
          width="197"
          height="53"
          viewBox="0 0 197 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            top: `${marker.y + 1.5}%`,
            left: `${marker.x - 8.5}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <line
            x1="29.0721"
            y1="11.3987"
            x2="2.07212"
            y2="51.3987"
            stroke="black"
            stroke-width="5"
          />
          <line
            x1="173.034"
            y1="10.4998"
            x2="27.0343"
            y2="12.4998"
            stroke="black"
            stroke-width="5"
          />
          <g filter="url(#filter0_d_138_13)">
            <circle
              cx="183"
              cy="10"
              r="8"
              stroke="black"
              stroke-width="4"
              shape-rendering="crispEdges"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_138_13"
              x="169"
              y="0"
              width="28"
              height="28"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_138_13"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_138_13"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      );
    }
  }
  return (
    <div>
      <Svg />
      <button
        className="marker"
        style={{
          position: "absolute",
          top: `${marker.y}%`,
          left: `${marker.x}%`,
          transform: "translate(-50%, -50%)", // Center the button
          cursor: "pointer",
          opacity: 0.8, // Semi-transparent
          backgroundColor: "#ffffff",
          color: "black",
          border: "none",
          borderRadius: "5px",
          padding: "5px 10px",
          // Prevent the button from taking focus outline on click (optional)
          outline: "none",
          fontFamily: "Krona One",
          fontWeight: "bold",
          fontSize: "1.2rem",
        }}
        onClick={() => onClick(marker)}
      >
        {marker.name}
      </button>
    </div>
  );
};

function Overview() {
  const navigate = useNavigate();
  const handleMarkerClick = (marker) => {
    console.log("Clicked marker: ", marker.name);
    navigate({
      pathname: "/IncHq",
      state: { markerName: marker.name },
    });
  };
  return (
    <div>
      <img
        src={sstOverview}
        alt="image not found"
        style={{
          minWidth: "100%",
          minHeight: "100%",
          width: "auto",
          height: "auto",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          objectFit: "cover",
        }}
      />
      {markers.map((marker) => (
        <Marker key={marker.id} marker={marker} onClick={handleMarkerClick} />
      ))}
    </div>
  );
}

export default Overview;
