import React, { useState } from "react";
import sstOverview from "../assets/sstoverview.png";
import { useNavigate } from "react-router-dom";
import "../assets/styles/overviewStyles.css";

// Marker data
const markers = [
  { id: 1, name: "Block C", x: 35, y: 7.5 }, // x and y as percentages
  { id: 2, name: "Block D", x: 49, y: 68 },
  { id: 3, name: "Block B", x: 80, y: 8 },
  { id: 4, name: "Block A", x: 85, y: 25 },
];

const blockA = [
  { id: 1, name: "A1" },
  { id: 2, name: "A2" },
];

const blockB = [];

const blockC = [];

const blockD = [];

const Marker = ({ marker, onClick }) => {
  // for the line
  function Svg() {
    if (marker.id === 3 || marker.id === 2 || marker.id === 4) {
      return (
        <svg
          width="197"
          height="53"
          viewBox="0 0 197 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            top: `${marker.y + 2}%`,
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
    if (marker.id === 1) {
      return (
        <svg
          width="179"
          height="61"
          viewBox="0 0 179 61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            top: `${marker.y + 2}%`,
            left: `${marker.x + 8}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <line
            x1="133.879"
            y1="10.351"
            x2="176.879"
            y2="59.351"
            stroke="black"
            stroke-width="5"
          />
          <line
            x1="22.0219"
            y1="9.5001"
            x2="136.022"
            y2="10.5001"
            stroke="black"
            stroke-width="5"
          />
          <g filter="url(#filter0_d_138_12)">
            <circle
              cx="14"
              cy="10"
              r="8"
              stroke="black"
              stroke-width="4"
              shape-rendering="crispEdges"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_138_12"
              x="0"
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
                result="effect1_dropShadow_138_12"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_138_12"
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

// to change functionality to navigate to correct page

function Overview() {
  const [showModal, setShowModal] = useState(false);
  const [modalBlock, setModalBlock] = useState("");

  const OptionModal = () => {
    // to determine which block rooms to show
    let blockRooms = [];
    if (modalBlock === "Block A") {
      blockRooms = blockA;
    } else if (modalBlock === "Block B") {
      blockRooms = blockB;
    } else if (modalBlock === "Block C") {
      blockRooms = blockC;
    } else if (modalBlock === "Block D") {
      blockRooms = blockD;
    }

    return (
      <div className="modal">
        <p className="modal-title">Choose one</p>
        {blockRooms.map((room) => (
          <button className="modalButton" /*onClick={}*/>{room.name}</button> // add onclick logic to navigate to the room with the object to the 3D image component
        ))}
        <button className="exit" onClick={() => setShowModal(false)}>
          Exit
        </button>
      </div>
    );
  };

  const navigate = useNavigate();
  const handleMarkerClick = (marker) => {
    console.log("Clicked marker: ", marker.name);
    setModalBlock(marker.name);
    setShowModal(true);
    /*     navigate({
      pathname: "/IncHq",
      state: { markerName: marker.name },
    }); */
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
      {showModal && <OptionModal />}
      {markers.map((marker) => (
        <Marker key={marker.id} marker={marker} onClick={handleMarkerClick} />
      ))}
    </div>
  );
}

export default Overview;
