import { useState, useEffect } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import { Main, Asside, Forecast } from "../components";
import { MapElem } from "../components/MapElem"
import sponsor from "../pages/sponsorIMG/Logo-ETRONIX-rgb.png"
import '../styles/home.css'
import '../styles/sponsors.css'
import "../styles/airIndex.scss";
import "../styles/phones.css"
import "../styles/index.css"
import "../styles/contact.css"
import '../styles/about.css'
import '../styles/dropdownButtons.css'
import "../styles/legenda.css"

function Home() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);
  const [date, setDate] = useState(null)
  const [location, setLocation] = useState("");

  const baseUrl = "https://api.openweathermap.org/data/2.5";

  const setSearchingLocation = (location) => {
    axios
        .get(
          `${baseUrl}/weather?q=${location}&units=metric&lang=pl&appid=${process.env.REACT_APP_API_KEY}`
        )
        .then((res) => {
          setCurrentWeather(res.data);
        });
      axios
        .get(
          `${baseUrl}/forecast?q=${location}&units=metric&lang=pl&appid=${process.env.REACT_APP_API_KEY}`
        )
        .then((res) => {
          setForecastWeather(res.data.list);
        });
      setDate(new Date())
      setLocation("");
  }


  const searchLocation = (event) => {
    if (event.key === "Enter") {
      setSearchingLocation(location)
    }
  };

  useEffect(() => {
    setSearchingLocation('Kraków')
  }, [])

  if(currentWeather && forecastWeather) return (
    <div className='body'>
    <div className="background-img"><h1>CarboLeon<br />Wiedz, czym ODDYCHASZ</h1></div>
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
              placeholder="Wpisz nazwę miasta..." 
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
        <div className="sContainer">
          <h1>Nasi Sponsorzy:</h1>
          <div className="sponsors">
            <a href='https://www.e-tronix.eu/'>
              <img src={sponsor}/>
            </a>
            {/* <a href='https://google.com'>
              <img src={sponsor}/>
            </a>
            <a href='https://youtube.com'>
              <img src={sponsor}/>
            </a> */}
          </div>
        </div>
    </div>
    </div>
  )
}

export default Home;
