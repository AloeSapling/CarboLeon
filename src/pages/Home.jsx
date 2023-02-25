import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaSearch } from "react-icons/fa";
import { Main, Asside } from "../components";
import Sponsors from "../components/Sponsors";
import { MapElem } from "../components/MapElem";

import "../styles/home.css";
import "../styles/sponsors.css";
import "../styles/airIndex.scss";
import "../styles/phones.css";
import "../styles/index.css";
import "../styles/contact.css";
import "../styles/about.css";
import "../styles/dropdownButtons.css";
import "../styles/legenda.css";

function Home() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState([]);
  const [date, setDate] = useState(null);
  const [location, setLocation] = useState(null);

  const api = {
    weatherCurrentApi: "http://api.openweathermap.org/data/2.5/weather?",
    geolocationApi: "http://api.openweathermap.org/geo/1.0/direct?",
    weatherForecastApi: "http://api.openweathermap.org/data/2.5/forecast?",
  };
  const { t } = useTranslation();
  const setSearchingLocation = async (location) => {
    const geolocate = await fetch(
      `${api.geolocationApi}q=${location}&appid=${process.env.REACT_APP_API_KEY}`
    ).then((res) => res.json());
    console.log(geolocate);
    if (!geolocate.length) {
      alert("nie znaleziono miasta");
    } else {
      const lat = geolocate[0].lat;
      const lon = geolocate[0].lon;

      const currentWeatherData = await fetch(
        `${api.weatherCurrentApi}lat=${lat}&lon=${lon}&units=metric&lang=${t(
          "test.len"
        )}&appid=${process.env.REACT_APP_API_KEY}`
      ).then((res) => res.json());

      const forecastWeatherData = await fetch(
        `${api.weatherForecastApi}lat=${lat}&lon=${lon}&units=metric&lang=pl&appid=${process.env.REACT_APP_API_KEY}`
      ).then((res) => res.json());

      setCurrentWeather(currentWeatherData);
      setForecastWeather(forecastWeatherData.list);
      setDate(new Date());
      localStorage.setItem("city", location)
    }

    setLocation("");
  };

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      setSearchingLocation(location);
    }
  };

  useEffect(() => {
    if(localStorage.getItem("city")) setSearchingLocation(localStorage.getItem("city"))
    else setSearchingLocation("Warszawa")
    // setSearchingLocation("London");
  }, []);

  if (currentWeather && forecastWeather)
    return (
      <div className="body">
        <div className="background-img">
          <h1>
            CarboLeon
            <br />
            {t("Home.title")}
          </h1>
        </div>
        <div className="margin2">
          <div className="uberC">
            <div className="container">
              <div className="asside">
                <Asside />
              </div>

              <div className="main">
                <div className="search">
                  <FaSearch />
                  <input
                    type="text"
                    placeholder={t("Home.input")}
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    onKeyDown={searchLocation}
                  />
                </div>
                <Main
                  currentData={currentWeather}
                  forecastData={forecastWeather}
                  date={date}
                />
              </div>
            </div>
          </div>
          <section className="THE-section">
            <div className="divV">
              <MapElem></MapElem>
            </div>
          </section>
        </div>
        <Sponsors />
      </div>
    );
}

export default Home;
