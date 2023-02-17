import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { TbWind, TbTemperature } from "react-icons/tb";
import { WiHumidity, WiBarometer } from "react-icons/wi";

const days = [
  "Poniedziałek",
  "Wtorek",
  "Środa",
  "Czwartek",
  "Piątek",
  "Sobota",
  "Niedziela",
];
const months = [
  "Grudzień",
  "Styczeń",
  "Luty",
  "Marzec",
  "Kwiecień",
  "Maj",
  "Czerwiec",
  "Lipiec",
  "Sierpień",
  "Październik",
  "Listopad",
  "Grudzień",
];

const Main = ({ currentData, forecastData, date }) => {
  console.log(date);
  const [isDropdown, setIsDropdown] = useState(false);
  const [splideRows, setSplideRows] = useState(4);

  const resizeSplideRows = () => {
    if (window.innerWidth > 1500) setSplideRows(4);
    else if (window.innerWidth < 1500 && window.innerWidth > 900)
      setSplideRows(3);
    else if (window.innerWidth < 900 && window.innerWidth > 550)
      setSplideRows(2);
    else setSplideRows(1);
  };

  window.addEventListener("resize", resizeSplideRows);

  useEffect(() => {
    resizeSplideRows();
  }, []);

  return (
    <div className="weather-params">
      <div className="current-temp">
        <div>
          <div>
            <p className="city">
              {currentData.name}, {currentData.sys.country}
            </p>
            <p className="weather-description">
              {currentData.weather[0].description}
            </p>
            <p className="time-info">
              {days[date.getDay() - 1]}, {date.getUTCDate()}{" "}
              {months[date.getMonth() + 1]}{" "}
            </p>
            <p></p>
          </div>
          <p className="temp">{Math.round(currentData.main.temp)} °C </p>
          {/* <p className="temp">jakość powietrza: </p>  to jest do zrobienia*/}
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${currentData.weather[0].icon}.png`}
        />
      </div>
      <div>
        <button
          onClick={() => setIsDropdown(!isDropdown)}
          className="reveal-button"
        >
          <p>Kliknij, aby {isDropdown ? "zchować" : "rozwinąć"} detale</p>
          <div>
            <p>{isDropdown ? "\u2227" : "\u2228"}</p>
          </div>
        </button>
        <div className={`contain ${isDropdown ? "show" : ""}`}>
          <div className="air-conditions">
            <p className="title">Detale pogodowe</p>
            <div className="details">
              <div>
                <div className="prop-title">
                  <WiBarometer />
                  <span>Ciśnienie</span>
                </div>
                <h3 className="measurement">
                  {Math.round(currentData.main.pressure)} hPa
                </h3>
              </div>
              <div>
                <div className="prop-title">
                  <WiHumidity />
                  <span>Wilgotność</span>
                </div>
                <h3 className="measurement">
                  {Math.round(currentData.main.humidity)} %
                </h3>
              </div>
              <div>
                <div className="prop-title">
                  <TbWind />
                  <span>Wiatr</span>
                </div>
                <h3 className="measurement">
                  {Math.round(currentData.wind.speed)} m/h
                </h3>
              </div>
              <div>
                <div className="prop-title">
                  <TbTemperature />
                  <span>Temperatura Odczuwalna</span>
                </div>
                <h3 className="measurement">
                  {Math.round(currentData.main.feels_like)} °C
                </h3>
              </div>
            </div>
          </div>
          <div className="forecast-weather">
            <p className="title">Zapowiadana Pogoda</p>
            <Splide
              options={{
                perPage: splideRows,
                arrows: false,
                pagination: false,
                drag: "free",
              }}
              className="splide"
            >
              {forecastData.map((x, index) => (
                <SplideSlide key={index} className="splide-slide">
                  <p className="time-info">
                    {days[date.getDay() - 1]},{" "}
                    {days[new Date(x.dt * 1000).getUTCDate() - 1]}
                  </p>
                  <p className="time-info">
                    {new Date(x.dt * 1000).getUTCDate()}{" "}
                    {months[new Date(x.dt * 1000).getMonth() + 1]} |{"  "}
                    {new Date(x.dt * 1000)
                      .toLocaleTimeString(undefined)
                      .slice(0, 5)}
                  </p>
                  <img
                    src={`icons/${x.weather[0].icon}.png`}
                    alt="weather-icon"
                  />
                  <p className="temp">
                    {Math.round(x.main.temp_min + x.main.temp_max) / 2} °C
                  </p>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

//twórca John333
