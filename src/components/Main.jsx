import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { TbWind, TbTemperature } from "react-icons/tb";
import { WiHumidity, WiBarometer } from "react-icons/wi";
import { useTranslation } from "react-i18next";

const Main = ({ currentData, forecastData, date }) => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [splideRows, setSplideRows] = useState(4);
  const { t } = useTranslation();
  const resizeSplideRows = () => {
    if (window.innerWidth > 1500) setSplideRows(4);
    else if (window.innerWidth < 1500 && window.innerWidth > 900)
      setSplideRows(3);
    else if (window.innerWidth < 900 && window.innerWidth > 550)
      setSplideRows(2);
    else setSplideRows(1);
  };

  window.addEventListener("resize", resizeSplideRows);

  
  // const powiedzonka = () => {
  //   if(currentData.weather[0].main === "Clouds"){
  //     console.log(currentData.weather[0].main)
  //     return "Jest pochmurno"
  //   }
  //   else if(currentData.weather[0].main === "Clear"){
  //     return "Jest Ładna pogoda, warto wyjść na zewnątrz"
  //   }
  //   else if(currentData.weather[0].main === "Fog" || currentData.weather[0].main === "Mist"){
  //     return "Jest obecna mgła, uważaj na drodze !"
  //   }
  //   else if(currentData.weather[0].description === "sleet" || currentData.weather[0].description === "sleet" || currentData.weather[0].description === "rain and snow" || currentData.weather[0].description === "shower sleet"||currentData.weather[0].description === "light shower sleet"){
  //     return "Deszcz ze śniegiem, w taką pogodę nawet bałwana nie można ulepić :("
  //   }
  //   else if(currentData.weather[0].description === "snow"){
  //     return "Let it snow !"
  //   }
  //   else if(currentData.weather[0].description === "heavy snow"){
  //     return "OGROMNA ilość śniegu"
  //   }
  //   else if(currentData.weather[0].main === "Thunderstorm"){
  //     return "Zostań w domu, jest burza, najlepiej napij się ciepłej herbatki :D"
  //   }
  //   else if(currentData.weather[0].main === "Drizzle"){
  //     return "Pada deszcz, idealny czas na spędzenie trochę czasu w swoim domu"
  //   }
    
  // }

  // const weather = {
  //   "Thunderstorm": "Zostań w domu, jest burza, najlepiej napij się ciepłej herbatki :D",
  //   "Clouds": "Jest Ładna pogoda, warto wyjść na zewnątrz",
  //   "Rain": "Pada deszcz napisz się herbatki",
  //   "Clear": "Jest Ładna pogoda, warto wyjść na zewnątrz",
  // }

  const weather = ["Zostań w domu, jest burza, najlepiej napij się ciepłej herbatki :D","Jest pochmurno, zalecam zostać w domu","Pada deszcz napisz się herbatki","Jest Ładna pogoda, warto wyjść na zewnątrz",]
  const array2=["Thunderstorm","Clouds", "Rain", "Clear", ]

  const powiedzonka = () => {
    let i =0
    while(currentData.weather[0].main != array2[i]){

      for(let a=0; a<array2.length;a++){
        i++
        if(currentData.weather[0].main === array2[a]){
          return weather[a]
        }
      }
    }
 
  }

  



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
            <p>
              {t(`Days.${[date.getDay()]}.day`)}, {date.getUTCDate()}{" "}
              {t(`Months.${[date.getMonth() + 1]}.mont`)}{" "}
            </p>
          </div>
          <p className="temp">{Math.round(currentData.main.temp)} °C </p>
          {/* <p className="temp">jakość powietrza: </p>  to jest do zrobienia*/}
        </div>
        <div>
          <p>{powiedzonka()}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`images/webpicons/${currentData.weather[0].icon}.webp`}
        />
      </div>
      <button
        onClick={() => setIsDropdown(!isDropdown)}
        className="reveal-button"
      >
        <p>
          {t("Home.part1")}{" "}
          {isDropdown ? `${t("Home.hide")}` : `${t("Home.show")}`}{" "}
          {t("Home.part2")}
        </p>
        <div>
          <p>{isDropdown ? "\u2227" : "\u2228"}</p>
        </div>
      </button>
      {isDropdown ? (
        <>
          <div className="air-conditions">
            <p className="title">{t("Home.weatherDet")}</p>
            <div className="details">
              <div>
                <div className="prop-title">
                  <WiBarometer />
                  <span>{t("Home.presure")}</span>
                </div>
                <h3 className="measurement">
                  {Math.round(currentData.main.pressure)} hPa
                </h3>
              </div>
              <div>
                <div className="prop-title">
                  <WiHumidity />
                  <span>{t("Home.hum")}</span>
                </div>
                <h3 className="measurement">
                  {Math.round(currentData.main.humidity)} %
                </h3>
              </div>
              <div>
                <div className="prop-title">
                  <TbWind />
                  <span>{t("Home.wind")}</span>
                </div>
                <h3 className="measurement">
                  {Math.round(currentData.wind.speed)} m/h
                </h3>
              </div>
              <div>
                <div className="prop-title">
                  <TbTemperature />
                  <span>{t("Home.sens")}</span>
                </div>
                <h3 className="measurement">
                  {Math.round(currentData.main.feels_like)} °C
                </h3>
              </div>
            </div>
          </div>
          <div className="forecast-weather">
            <p className="title">{t("Home.Fore")}</p>
            <Splide
              options={{
                perPage: splideRows,
                arrows: false,
                pagination: false,
                frag: "free",
              }}
              className="splide"
            >
              {forecastData.map((x, index) => (
                <SplideSlide key={index} className="splide-slide">
                  <p className="time-info">
                    {t(`Days.${[new Date(x.dt * 1000).getDay()]}.day`)}
                  </p>
                  <p className="time-info">
                    {new Date(x.dt * 1000).getUTCDate()}{" "}
                    {t(`Months.${[date.getMonth() + 1]}.mont`)} |{"  "}
                    {new Date(x.dt * 1000)
                      .toLocaleTimeString(undefined)
                      .slice(0, 5)}
                  </p>
                  <img
                    src={`images/webpicons/${x.weather[0].icon}.webp`}
                    alt="weather-icon"
                  />
                  <p className="temp">
                    {Math.round(x.main.temp_min + x.main.temp_max) / 2} °C
                  </p>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Main;

//twórca John333
