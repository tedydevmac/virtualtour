import React from "react";

//libraries
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// screens
import "./App.css";
import Overview from "./screens/overview";
import IncHq from "./screens/360Screens/inc";

function App() {
  //router
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/IncHq" element={<IncHq />} />
      </Routes>
    </BrowserRouter>
  );
}

function LandingPage() {
  const navigate = useNavigate();
  function HandleClick() {
    navigate("/overview");
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
