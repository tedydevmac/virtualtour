import React from "react";
import sstOverview from "../assets/sstoverview.png";
import { useNavigate } from "react-router-dom";
import "../styles/overviewStyles.css";

// Marker data
const markers = [
  { id: 1, name: "Block C", x: 49, y: 7.5 }, // x and y as percentages
  { id: 2, name: "Block D", x: 33, y: 86 },
  { id: 2, name: "Block B", x: 70, y: 8 },
  { id: 2, name: "Block A", x: 70, y: 31 },
];

const Marker = ({ marker, onClick }) => (
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
);

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
