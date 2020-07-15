import React from "react";
import ReactDOM from "react-dom";
import Preloader from "./components/Preloader/Preloader";
import Timer from "./components/Countdown/Timer";
import SocialFollow from "./components/SocialFollow/SocialFollow";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Welcome to iPixel Business Services</h1>
        <h2>Website Under Construction...</h2>
        <Timer />
        <Preloader />
        <SocialFollow />
        ©iPixel Business Services Limited
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
