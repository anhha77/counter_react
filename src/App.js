import React, { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const setColor = counter > 0 ? "green" : counter < 0 ? "red" : "black";

  const increase = () => {
    setCounter(counter + 1);
  };
  const decrease = () => {
    setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(0);
  };

  return (
    <div className="project-counter-container">
      <h1 className="heading">Counter</h1>
      <span className="value" style={{ color: setColor }}>
        {counter}
      </span>
      <div className="btn-contain">
        <button onClick={decrease} className="btn-counter decrease">
          DECREASE
        </button>
        <button onClick={reset} className="btn-counter reset">
          RESET
        </button>
        <button onClick={increase} className="btn-counter increase">
          INCREASE
        </button>
      </div>
    </div>
  );
}

export default App;
