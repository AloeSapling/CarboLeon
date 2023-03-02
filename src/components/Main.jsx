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

  /* JAK COŚ TO POWIEDZONKA I POGODA MAJĄ BYĆ PO KOLEI TUTAJ MACIE STRONĘ DO WSZYSTKICH NAZW POGODY:  



  https://openweathermap.org/weather-conditions   

  

    "WEATHER CONDITION CODES" I SZUKACIE W KOLUMNIE MAIN*/
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
