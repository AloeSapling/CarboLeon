import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
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
  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecastWeather, setForecastWeather] = useState(null)
  const [date, setDate] = useState(null)
  const [location, setLocation] = useState("")

  const baseUrl = "https://api.openweathermap.org/data/2.5";
  const {t} = useTranslation()
  const setSearchingLocation = (location) => {
    fetch(
      `${baseUrl}/weather?q=${location}&units=metric&lang=pl&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => {
        if (!res.ok) {
          console.log('fail');
        }
        else {
          console.log('success');
          return res.json();        
        }
      })
      .then((data) => {
        setCurrentWeather(data);
      })
      .catch(err => {
        console.log(err)
      })
    fetch(
      `${baseUrl}/forecast?q=${location}&units=metric&lang=pl&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => {
        if (!res.ok) {
          console.log('fail');
        }
        else {
          console.log('success');
          return res.json();        
        }
      })
      .then((data) => {
        setForecastWeather(data.list);
      })
      .catch(err => {
        console.log(err)
      })
    setDate(new Date());
    setLocation("");
  };

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      setSearchingLocation(location);
    }
  };

  useEffect(() => {
    setSearchingLocation("Kraków");
  }, []);

  if(currentWeather && forecastWeather) return (
    <div className='body'>
    <div className="background-img"><h1>CarboLeon<br />{t("Home.title")}</h1></div>
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
              onChange ={(e) => setLocation(e.target.value)}
              onKeyDown={searchLocation}
              />
            </div>
            <Main currentData={currentWeather} forecastData={forecastWeather} date={date} />
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
  )
}

export default Home;
