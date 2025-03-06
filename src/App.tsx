import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <p className="lead">{"HTML Gives Your Code Structure"}</p>
          <strong>{"HTML"}</strong>
        </div>
        <div className="col">
          <p className="lead">{"CSS Gives Your Code Style"}</p>
          <strong>{"CSS"}</strong>
        </div>
        <div className="col">
          <p className="lead">{"Javascript Gives Your Code Action"}</p>
          <strong>{"Javascript"}</strong>
        </div>
      </div>
    </div>
  );
}

export default App;
