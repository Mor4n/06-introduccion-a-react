import { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react"
import Weather from "./components/Weather";


function App() {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Mexico%20City&appid=');
      const data = await response.json();
      setWeather(data.main);
    }
    fetchData();
  },[])

  return (
    <div className="App">
      <h1>Clima</h1>
      <Weather {...weather} />
    </div>
  )
}

export default App
