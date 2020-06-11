import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';

function App() {
  const [details , setDetails] = useState({})

  useEffect(() => {
   axios.get ('http://api.nasa.gov/planetary/apod?api_key=VmyAhAymcPU8zBtQus3iH5vQbGQ5jUkCiG5qpdVz')
   
   .then ((response) =>{
    console.log(response.data)
    setDetails(response.data)
   })

   .catch( error => {
    console.log(error);
})
   
  }, []);

  console.log(details)
  
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
