import "./App.css";
import { Rating } from "./Rating/Rating";
import { Thanks } from "./Thanks/Thanks";
import { useState, useEffect } from "react";

function App() {
  const [rateValue, setRateValue] = useState();
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="App">
      <div className={submitted === true ? "hide" : "show"}>
        <Rating func1={setRateValue} sub={setSubmitted} />
      </div>

      <div className={submitted === false ? "hide" : "show"}>
        <Thanks func2={rateValue} />
        {console.log(submitted)}
      </div>
    </div>
  );
}

export default App;
