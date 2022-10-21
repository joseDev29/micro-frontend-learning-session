import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{count}</h2>
      <button
          className='h-10 px-6 font-semibold rounded-md bg-black text-white'
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default App;
