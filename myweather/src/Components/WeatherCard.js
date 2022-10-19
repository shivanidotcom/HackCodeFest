import React from "react";
import "./index.css";
import sun from "../Assets/sun.png";
import night from "../Assets/night.png";
import {
  FaTemperatureLow,
  FaWind,
  FaUmbrella,
  FaHandHoldingWater,
  FaMapMarkerAlt,
} from "react-icons/fa";

function WeatherCard(props) {
  const { data } = props;

  const renderShowing = [
    {
      icon: <FaTemperatureLow />,
      title: "Feels Like",
      value: data.current.feelslike_c,
    },
    {
      icon: <FaWind />,
      title: "Wind",
      value: data.current.wind_kph + " Km/h",
    },
    {
      icon: <FaHandHoldingWater />,
      title: "Humidity",
      value: data.current.humidity,
    },
    {
      icon: <FaUmbrella />,
      title: "Precipitation",
      value: data.current.pressure_in,
    },
  ];

  return (
    <div className="WeatherCard">
      <img
        src={data.current.is_day === 1 ? sun : night}
        alt="clouds"
        className="WeatherCardImg"
      />
      <h1 className="temp_c">
        {data.current.temp_c} <span>&#176;</span>
        <span className="condition"> {data.current.condition.text} </span>
      </h1>
      <p className="placeTxt">
        <FaMapMarkerAlt size={14} /> {data.location.name},{" "}
        {data.location.region}
      </p>
      <h2 className="WeatherNow">Weather Now</h2>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {renderShowing.map((item, index) => (
          <div key={index} className="WeatherCardItem">
            <div className="WeatherCardItemIcon">{item.icon}</div>
            <div className="WeatherCardItemBody">
              <h3>{item.title}</h3>
              <p>{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherCard;
