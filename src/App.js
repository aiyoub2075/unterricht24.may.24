import "./App.css";
import { useState } from "react";

function App() {
  // hooks müssen in einer functions Komponente aufgerufen werden
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }
  function decrement() {
    setCounter(counter - 1);
  }
  function reset() {
    setCounter(0)
  }
  return (
    <div className="container">
      <h1>{counter}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>R</button>
    </div>
  );
}

export default App;
