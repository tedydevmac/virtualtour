import React from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Overview from "./screens/overview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/overview" element={<Overview />} />
      </Routes>
    </BrowserRouter>
  );
}

function LandingPage() {
  const navigate = useNavigate(); // Get navigate function using useNavigate hook
  function HandleClick() {
    console.log("Button clicked!");
    navigate("/overview"); // Navigate to /overview when button is clicked
  }
  return (
    <div className="App">
      <div className="bg">
        <div className="layer">
          <div className="content">
            <h1 id="welcome">Welcome to</h1>
            <h1 id="svt">SST VIRTUAL TOUR</h1>
            <div id="bar"></div>
            <div style={{ display: "block" }}>
              <button id="mainButton" onClick={HandleClick}>
                <h1 id="begin">Begin!</h1>
              </button>
              <div id="buttonBack"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
