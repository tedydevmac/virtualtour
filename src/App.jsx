import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

//libraries
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// screens
import "./App.css";
import Overview from "./screens/overview";
import IncHq from "./screens/inc";
import PageTransition from "./components/PageTransition";

function App() {
  //router
  return (
    <BrowserRouter>
      <PageTransition>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/IncHq" element={<IncHq />} />
        </Routes>
      </PageTransition>
    </BrowserRouter>
  );
}

function LandingPage() {
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
  const navigate = useNavigate();
  function HandleClick() {
    navigate("/overview");
  }
  return (
    <div className="App">
      <div className="bg">
        <div className="layer">
          {(device === "Mobile" && orientation === "portrait-primary") ||
          orientation === "potrait-secondary" ? (
            <Modal>
              <p
                style={{
                  color: "white",
                  fontFamily: "Krona One",
                  marginLeft: 5,
                }}
              >
                Please rotate your device to landscape for a better experience
              </p>
            </Modal>
          ) : (
            <div className="content">
              <h1 id="welcome">Welcome to</h1>
              <h1 id="svt">SST VIRTUAL TOUR</h1>
              <div id="bar"></div>
              <div style={{ display: "block" }}>
                <button id="mainButton" onClick={HandleClick}>
                  <h1 id="begin">Begin!</h1>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
