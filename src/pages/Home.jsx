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
  const { t } = useTranslation();
  document.title = `Carboleon - ${t("Home.pageTitle")}`;

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState([]);
  const [pollution, setPollution] = useState(null);
  const [date, setDate] = useState(null);
  const [errorInfo, setErrorInfo] = useState(false);
  const [location, setLocation] = useState(null);

  const api = {
    weatherCurrentApi: "https://api.openweathermap.org/data/2.5/weather?",
    geolocationApi: "https://api.openweathermap.org/geo/1.0/direct?",
    weatherForecastApi: "https://api.openweathermap.org/data/2.5/forecast?",
  };

  const setSearchingLocation = async (location) => {
    const geolocate = await fetch(
      `${api.geolocationApi}q=${location}&appid=${process.env.REACT_APP_API_KEY}`
    ).then((res) => res.json());
    if (!geolocate.length) {
      setErrorInfo(true);
    } else {
      const lat = geolocate[0].lat;
      const lon = geolocate[0].lon;
      setErrorInfo(false);
      const currentWeatherData = await fetch(
        `${api.weatherCurrentApi}lat=${lat}&lon=${lon}&units=metric&lang=${t(
          "test.len"
        )}&appid=${process.env.REACT_APP_API_KEY}`
      ).then((res) => res.json());

      const forecastWeatherData = await fetch(
        `${api.weatherForecastApi}lat=${lat}&lon=${lon}&units=metric&lang=pl&appid=${process.env.REACT_APP_API_KEY}`
      ).then((res) => res.json());

      const pollutionData = await fetch(
        `https://api.waqi.info/feed/geo:${lat};${lon}/?token=f22590119b76e420088f7c8919a6cc01a00ee770`
      ).then((res) => res.json());

      setCurrentWeather(currentWeatherData);
      setForecastWeather(forecastWeatherData.list);
      setPollution(pollutionData.data);
      setDate(new Date());
      localStorage.setItem("city", location);
    }

    setLocation("");
  };

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      setSearchingLocation(location);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("city"))
      setSearchingLocation(localStorage.getItem("city"));
    else setSearchingLocation("Warszawa");
  }, []);

  if (currentWeather && forecastWeather && date && pollution)
    return (
      <div className="body">
        <div className="background-img">
          <h1>CarboLeon</h1>
          <h1>{t("Home.title")}</h1>
        </div>
        <div className="margin2">
          <div className="uberC">
            <div className="container">
              <div className="asside">
                <Asside pollution={pollution} />
              </div>

              <div className="home-main">
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
                {errorInfo ? (
                  <h1 className="error">{t("Home.error")}</h1>
                ) : null}
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
