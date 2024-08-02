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
        bottom: "10px", // Adjust as needed
        right: "10px", // Adjust as needed
        zIndex: 1000,
      }}
    >
      <button onClick={toggleModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20Z"
            fill="#4F68E2"
          />
          <path
            d="M19.308 25.124C18.516 25.124 17.844 24.872 17.292 24.368C16.764 23.84 16.5 23.084 16.5 22.1C16.5 21.116 16.692 20.312 17.076 19.688C17.484 19.04 18.108 18.308 18.948 17.492C19.86 16.604 20.556 15.764 21.036 14.972C21.516 14.18 21.756 13.136 21.756 11.84C21.756 11 21.528 10.364 21.072 9.932C20.64 9.5 20.124 9.284 19.524 9.284C19.02 9.284 18.588 9.428 18.228 9.716C17.868 10.004 17.688 10.388 17.688 10.868C17.688 11.228 17.76 11.564 17.904 11.876C18.072 12.164 18.36 12.464 18.768 12.776C18.552 13.304 18.192 13.712 17.688 14C17.208 14.288 16.68 14.432 16.104 14.432C15.312 14.432 14.628 14.192 14.052 13.712C13.476 13.208 13.188 12.524 13.188 11.66C13.188 10.436 13.848 9.464 15.168 8.744C16.512 8 18.096 7.628 19.92 7.628C22.008 7.628 23.64 8.048 24.816 8.888C25.992 9.704 26.58 10.928 26.58 12.56C26.58 13.424 26.424 14.204 26.112 14.9C25.824 15.572 25.476 16.16 25.068 16.664C24.66 17.144 24.108 17.732 23.412 18.428C22.62 19.196 22.032 19.856 21.648 20.408C21.264 20.936 21.072 21.524 21.072 22.172C21.072 22.724 21.264 23.408 21.648 24.224C20.904 24.824 20.124 25.124 19.308 25.124ZM19.236 32.396C18.276 32.396 17.556 32.18 17.076 31.748C16.596 31.316 16.356 30.692 16.356 29.876C16.356 28.196 17.316 27.356 19.236 27.356C20.172 27.356 20.88 27.572 21.36 28.004C21.84 28.436 22.08 29.06 22.08 29.876C22.08 30.692 21.84 31.316 21.36 31.748C20.88 32.18 20.172 32.396 19.236 32.396Z"
            fill="#BFB7B9"
          />
        </svg>
      </button>
      {showModal && (
        <div id="modal" style={{ ...modalStyle, display: "flex" }}>
          <h1 className="title">{markerName}</h1>
          <p className="body">{description}</p>
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
  width: "70vw",
  height: "90vh",
  overflow: "auto",
  borderRadius: "40px",
  background: "rgba(217, 217, 217, 0.8)",
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset",
  transform: "translate(-50%, -50%)",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};
