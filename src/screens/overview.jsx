import React, { useState, useEffect } from "react";
import sstOverview from "../assets/sstoverview.png";
import { useNavigate } from "react-router-dom";
import "../assets/styles/PageStyles/overviewStyles.css";
import ReactDOM from "react-dom";

// Marker data
const markers = [
  { id: 1, name: "Block C", x: 35, y: 7.5 }, // x and y as percentages
  { id: 2, name: "Block D", x: 49, y: 68 },
  { id: 3, name: "Block B", x: 80, y: 8 },
  { id: 4, name: "Block A", x: 85, y: 25 },
];

const blockA = [
  {
    id: 1,
    name: "Room X",
    image: "example.jpg",
  },
  { id: 2, name: "A2", image: "example.jpg" },
];

const blockB = [{ id: 1, name: "Room X", image: "example.jpg" }];
const blockC = [
  {
    id: 1,
    name: "Robotics@APEX",
    image: [
      "360pictures/RoboRm1.JPG",
      "360pictures/RoboRm2.JPG",
      "360pictures/RoboRm3.JPG",
    ],
    tooltips: [[], [], []], // i dunno what to put for this one
    description:
      "Robotics @APEX started in 2010 with a small group of students. Guided by the 3 operative values - Effective, Efficient and Exemplary and with the dedication of students and staff, the club scaled new heights year after year, establishing its reputation in the local and international robotics communities. \nMembers gained exposure to various robotics systems like LEGO, Arduino and OpenCV systems. Students are encouraged to apply their robotics knowledge and skills in both local and international competitions such as the First Lego League Cityshaper Challenge, International CoSpace OnLine (iCooL) Challenge as well as the IDE (Innovation, Design and Engineering) Robotics Challenge. \nStudents are also encouraged to embark on creative projects and apply their knowledge of robotics systems to solve real-world problems. The pursuit of excellence in competitions and interest-driven research hones resilience, perseverance, critical thinking, communication and project management skills in our members that will serve them well for life.",
  },
  {
    id: 2,
    name: "Electronics Lab",
    image: ["360pictures/ElectronicsRm1.JPG", "360pictures/ElectronicsRm2.JPG"],
    tooltips: [
      [
        {
          id: "1",
          tooltip: {
            content: document.querySelector("#tooltip4").innerText,
            className: "custom-tooltip",
            position: "top",
            trigger: "click",
          },
          image: "Icons/Location Marker.svg",
          size: { width: 35, height: 35 },
          anchor: "bottom center",
          position: {
            pitch: -0.35, // y-axis
            yaw: -1.5, // x-axis
          },
          hoverScale: { amount: 1, easing: "ease-in-out", duration: 100 },
        },
        {
          id: "2",
          tooltip: {
            content: document.querySelector("#tooltip5").innerText,
            className: "custom-tooltip",
            position: "top",
            trigger: "click",
          },
          image: "Icons/Location Marker.svg",
          size: { width: 35, height: 35 },
          anchor: "bottom center",
          position: {
            pitch: -0.29, // y-axis
            yaw: -1.5, // x-axis
          },
          hoverScale: { amount: 1, easing: "ease-in-out", duration: 100 },
        },
        {
          id: "3",
          tooltip: {
            content: document.querySelector("#tooltip6").innerText,
            className: "custom-tooltip",
            position: "top",
            trigger: "click",
          },
          image: "Icons/Location Marker.svg",
          size: { width: 35, height: 35 },
          anchor: "bottom center",
          position: {
            pitch: -0.3, // y-axis
            yaw: -1.6, // x-axis
          },
          hoverScale: { amount: 1, easing: "ease-in-out", duration: 100 },
        },
        {
          id: "4",
          tooltip: {
            content: document.querySelector("#tooltip7").innerText,
            className: "custom-tooltip",
            position: "top",
            trigger: "click",
          },
          image: "Icons/Location Marker.svg",
          size: { width: 35, height: 35 },
          anchor: "bottom center",
          position: {
            pitch: -0.15, // y-axis
            yaw: -0.35, // x-axis
          },
          hoverScale: { amount: 1, easing: "ease-in-out", duration: 100 },
        },
      ],
      [],
    ],
  },
  {
    id: 3,
    name: "Biotechnology Lab",
    image: ["360pictures/BiotechRm1.JPG", "360pictures/BiotechRm2.JPG"],
    tooltips: [[], []],
  },
  {
    id: 4,
    name: "SST Inc HQ",
    image: [
      "360pictures/Inc_main2.JPG",
      "360pictures/Inc_main3.JPG",
      "360pictures/Inc_imacs1.JPG",
      "360pictures/Inc_imacs3.JPG",
      "360pictures/Inc_back.JPG",
      "360pictures/Inc_gaytunnel.JPG",
      "360pictures/Inc_boardroom.JPG",
    ],
    description:
      "SST Inc. is the technology Talent Development Programme in the School of Science and Technology, Singapore. \nSST Inc. is an incubator that nurtures student employees in running technology start-ups to serve communities and better our world.",
    tooltips: [
      [
        {
          id: "1",
          tooltip: {
            content: document.querySelector("#tooltip1").innerText,
            className: "custom-tooltip",
            position: "top",
            trigger: "click",
          },
          image: "Icons/Location Marker.svg",
          size: { width: 35, height: 35 },
          anchor: "bottom center",
          position: {
            pitch: -0.1, // y-axis
            yaw: 0.6, // x-axis
          },
          hoverScale: { amount: 1, easing: "ease-in-out", duration: 100 },
        },
        {
          id: "2",
          tooltip: {
            content: document.querySelector("#tooltip2").innerText,
            className: "custom-tooltip",
            position: "top",
            trigger: "click",
          },
          image: "Icons/Location Marker.svg",
          size: { width: 35, height: 35 },
          anchor: "bottom center",
          position: {
            pitch: -0.1, // y-axis
            yaw: -1.75, // x-axis
          },
          hoverScale: { amount: 1, easing: "ease-in-out", duration: 100 },
        },
      ],
      [],
      [
        {
          id: "1",
          tooltip: {
            content: document.querySelector("#tooltip3").innerText,
            className: "custom-tooltip",
            position: "top",
            trigger: "click",
          },
          image: "Icons/Location Marker.svg",
          size: { width: 35, height: 35 },
          anchor: "bottom center",
          position: {
            pitch: -0.1, // y-axis
            yaw: 1.2, // x-axis
          },
          hoverScale: { amount: 1, easing: "ease-in-out", duration: 100 },
        },
      ],
      [],
      [],
      [],
      [],
    ],
  },
];

const blockD = [{ id: 1, name: "Room X", image: "example.jpg" }];

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
  const [device, setDevice] = useState("");
  const [orientation, setOrientation] = useState("");
  const overlay = document.getElementById("modal-overlay");
  const Modal = (props) => {
    return ReactDOM.createPortal(
      <div className="overlay">{props.children}</div>,
      overlay
    );
  };
  useEffect(() => {
    // Determine device type
    const userAgent = navigator.userAgent;
    if (/Mobi|Android/i.test(userAgent)) {
      setDevice("Mobile");
    } else {
      setDevice("Desktop");
    }

    // Determine screen orientation
    const handleOrientationChange = () => {
      const orientationType = window.screen.orientation.type;
      setOrientation(orientationType);
    };

    handleOrientationChange(); // Initial check
    window.screen.orientation.addEventListener(
      "change",
      handleOrientationChange
    );

    // Cleanup event listener on component unmount
    return () => {
      window.screen.orientation.removeEventListener(
        "change",
        handleOrientationChange
      );
    };
  }, []);

  return (
    <div>
      {device === "Mobile" ? null : <Svg />}
      <button
        style={{
          position: "absolute",
          top: `${marker.y}%`,
          left: `${marker.x}%`,
          transform: "translate(-50%, -50%)", // Center the button
          cursor: "pointer",
          opacity: 0.8, // Semi-transparent
          color: "black",
          border: "none",
          borderRadius: "20px",
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
  const [blockRooms, setBlockRooms] = useState([]);
  const navigate = useNavigate();

  // option modal
  const OptionModal = () => {
    // to determine which block rooms to show
    if (modalBlock === "Block A") {
      setBlockRooms(blockA);
    } else if (modalBlock === "Block B") {
      setBlockRooms(blockB);
    } else if (modalBlock === "Block C") {
      setBlockRooms(blockC);
    } else if (modalBlock === "Block D") {
      setBlockRooms(blockD);
    }

    const navigateToRoom = (roomName) => {
      console.log("roomName: ", roomName);
      blockRooms.forEach((room) => {
        if (roomName === room.name) {
          console.log(
            "Navigating to room: ",
            room.name,
            " with image: ",
            room.image
          );
          navigate("/IncHq", {
            state: {
              markerName: room.name,
              image: room.image,
              tooltips: room.tooltips,
              description: room.description,
            },
          });
        }
      });
    };

    return (
      <div className="modal">
        <p className="modal-title">Choose one</p>
        {blockRooms.map((room) => (
          <button
            className="modalButton"
            onClick={() => navigateToRoom(room.name)}
          >
            {room.name}
          </button>
        ))}
        <button className="exit" onClick={() => setShowModal(false)}>
          X
        </button>
      </div>
    );
  };

  const handleMarkerClick = (marker) => {
    console.log("Clicked marker: ", marker.name);
    setModalBlock(marker.name);
    if (modalBlock === "Block A") {
      setBlockRooms(blockA);
    } else if (modalBlock === "Block B") {
      setBlockRooms(blockB);
    } else if (modalBlock === "Block C") {
      setBlockRooms(blockC);
    } else if (modalBlock === "Block D") {
      setBlockRooms(blockD);
    }
    setShowModal(true);
  };
  return (
    <div>
      <img
        src={sstOverview}
        alt="image not found"
        style={{
          minWidth: "100%",
          minHeight: "100%",
          width: "100%",
          height: "100%",
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
