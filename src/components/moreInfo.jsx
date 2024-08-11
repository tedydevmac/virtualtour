import React, { useState } from "react";

import "./components.css";

export default function MoreInfo({ markerName, description }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div
      style={{
        position: "fixed",
        bottom: "15px", // Adjust as needed
        right: "15px", // Adjust as needed
        zIndex: 1000,
      }}
    >
      <button onClick={toggleModal} id="moreInfo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 97 96"
          fill="none"
        >
          <path
            d="M97 48C97 74.5097 75.2858 96 48.5 96C21.7142 96 0 74.5097 0 48C0 21.4903 21.7142 0 48.5 0C75.2858 0 97 21.4903 97 48Z"
            fill="#3C8CDD"
          />
          <path
            d="M43.432 39C45.8213 38.4453 48.04 38.168 50.088 38.168C52.136 38.168 53.864 38.232 55.272 38.36V63.896C56.936 64.536 58.1093 65.2613 58.792 66.072L58.152 71H43.432L42.792 66.072C43.3893 65.2613 44.5627 64.536 46.312 63.896V46.104C44.8187 45.592 43.6453 44.8667 42.792 43.928L43.432 39ZM50.664 34.584C47.1227 34.584 45.352 32.984 45.352 29.784C45.352 26.5413 47.1227 24.92 50.664 24.92C54.248 24.92 56.04 26.5413 56.04 29.784C56.04 32.984 54.248 34.584 50.664 34.584Z"
            fill="white"
          />
        </svg>
      </button>
      {showModal && (
        <div id="modal" style={{ ...modalStyle, display: "flex" }}>
          <div style={{ marginLeft: "5%", marginRight: "5%" }}>
            <h1 className="title">{markerName}</h1>
            <p className="body">{description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

const modalStyle = {
  display: "none",
  position: "fixed",
  zIndex: 1,
  left: "50%",
  top: "50%",
  minWidth: "40%", // Minimum width to ensure it doesn't get too small
  minHeight: "40%", // Minimum height to ensure it doesn't get too small
  maxWidth: "70vw", // Maximum width to prevent it from getting too large
  maxHeight: "70vh", // Maximum height to prevent it from getting too large
  overflow: "auto",
  borderRadius: "40px",
  background: "rgba(217, 217, 217, 0.8)",
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset",
  transform: "translate(-50%, -50%)",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};
