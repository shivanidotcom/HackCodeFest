import { useEffect, useState } from "react";
import "./App.css";
import WeatherCard from "./Components/WeatherCard";

function App() {
  const [data, setdata] = useState("");

  useEffect(() => {
    const getWeather = () => {
      const location = window.navigator && window.navigator.geolocation;

      if (location) {
        location.getCurrentPosition(
          async (position) => {
            const res = await fetch(
              `http://api.weatherapi.com/v1/current.json?key=6097493ea406456393d182812221810&q=${position.coords.latitude},${position.coords.longitude}`
            );
            const data = await res.json();
            setdata(data);
          },
          (error) => {
            console.log(error);
          }
        );
      }
    };

    getWeather();
  }, []);

  return (
    <div className="App">
      {data.current !== undefined && <WeatherCard data={data} />}
    </div>
  );
}

export default App;
