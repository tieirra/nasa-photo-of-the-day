import React, { useState } from "react";
import "./App.css";

function App() {
  const [details , setDetails] = useState()
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
