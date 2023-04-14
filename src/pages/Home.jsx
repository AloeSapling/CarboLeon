import { useState, useEffect, useRef, lazy } from "react"
import { useTranslation } from "react-i18next"
import { FaSearch } from "react-icons/fa"

import "../styles/home.css"
import "../styles/airIndex.scss"

const Main = lazy(() => import("../components/Main"))
const Asside = lazy(() => import("../components/Asside"))
const Sponsors = lazy(() => import("../components/Sponsors"))
const MapElem = lazy(() => import("../components/MapElem"))

function Home() {
  const { t } = useTranslation()
  document.title = `Carboleon - ${t("Home.pageTitle")}`

  const [mainData, setMainData] = useState(null)
  const [pollution, setPollution] = useState(null)
  const [errorInfo, setErrorInfo] = useState(false)
  const [coords, setCoords] = useState(null)
  const locationRef = useRef(null)

  const api = {
    weatherCurrentApi: "https://api.openweathermap.org/data/2.5/weather?",
    geolocationApi: "https://api.openweathermap.org/geo/1.0/",
    weatherForecastApi: "https://api.openweathermap.org/data/2.5/forecast?",
  }

  const geolocateByCoords = async (lat, lon) => {
    setErrorInfo(false)
    const currentWeatherData = await fetch(
      `${api.weatherCurrentApi}lat=${lat}&lon=${lon}&units=metric&lang=${t(
        "test.len"
      )}&appid=${process.env.REACT_APP_API_KEY_OPENWEATHER}`
    ).then((res) => res.json())

    const forecastWeatherData = await fetch(
      `${api.weatherForecastApi}lat=${lat}&lon=${lon}&units=metric&lang=pl&appid=${process.env.REACT_APP_API_KEY_OPENWEATHER}`
    ).then((res) => res.json())

    const pollutionData = await fetch(
      `https://api.waqi.info/feed/geo:${lat};${lon}/?token=${process.env.REACT_APP_API_KEY_WAQI}`
    ).then((res) => res.json())

    const cityData = await fetch(
      `${api.geolocationApi}reverse?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY_OPENWEATHER}`
    ).then((res) => res.json())
    const city = cityData[0].name
    const country = cityData[0].country

    const fullCity = { city, country }
    setPollution(pollutionData.data)
    setCoords([lat, lon]);
    setMainData({ currentWeatherData, forecastWeatherData, fullCity })
    localStorage.setItem("lat", lat)
    localStorage.setItem("lon", lon)
    locationRef.current.value = null
  }

  const setSearchingLocation = async (location) => {
    const geolocate = await fetch(
      `${api.geolocationApi}direct?q=${location}&appid=${process.env.REACT_APP_API_KEY_OPENWEATHER}`
    ).then((res) => res.json());
    if (!geolocate.length) {
      setErrorInfo(true)
    } else {
      const lat = geolocate[0].lat
      const lon = geolocate[0].lon
      geolocateByCoords(lat, lon)
    }
  }

  const searchLocationByEnter = (event) => {
    if (event.key === "Enter" && locationRef.current.value !== "") {
      setSearchingLocation(locationRef.current.value);
    }
  }

  const searchLocationByClick = () => {
    locationRef.current.value !== "" &&
      setSearchingLocation(locationRef.current.value)
  }

  useEffect(() => {
<<<<<<< HEAD
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const coords = pos.coords
        console.log(coords);
        geolocateByCoords(coords.latitude, coords.longitude)
      },() => {
        if (localStorage.getItem("lat") && localStorage.getItem("lon")) {
          geolocateByCoords(localStorage.getItem("lat"), localStorage.getItem("lon"))
        } else {
          geolocateByCoords(50.02440811574995, 19.977215477370695)
=======
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const coords = pos.coords;
          geolocateByCoords(coords.latitude, coords.longitude)
        },
        () => {
          if (localStorage.getItem("lat") && localStorage.getItem("lon")) {
            geolocateByCoords(
              localStorage.getItem("lat"),
              localStorage.getItem("lon")
            );
          } else {
            geolocateByCoords(50.02440811574995, 19.977215477370695)
          }
>>>>>>> 102d9b58a2261f980e0b5d4bab3d9c4689d86655
        }
      )
    } else if (localStorage.getItem("lat") && localStorage.getItem("lon")) {
      geolocateByCoords(
        localStorage.getItem("lat"),
        localStorage.getItem("lon")
      )
    } else {
      geolocateByCoords(50.02440811574995, 19.977215477370695)
    }
  }, [])

  return (
    <>
      <div className="background-img">
        <h1>CarboLeon</h1>
        <h1>{t("Home.title")}</h1>
      </div>
      <div className="margin">
        <div className="container">
          <div className="asside">
            {pollution && <Asside pollution={pollution} />}
          </div>       
          <div className="home-main">
            <div className="search">
              <FaSearch onClick={searchLocationByClick} />
              <input
                type="text"
                placeholder={t("Home.input")}
                ref={locationRef}
                onKeyDown={searchLocationByEnter}
              />
            </div>
            {errorInfo && <h1 className="error">{t("Home.error")}</h1>}
            {mainData && <Main mainData={mainData} />}
          </div>
        </div>
        <div className="main-map-container">
          <div className="main-map-elem">
            {coords && <MapElem coords={coords} />}
          </div>
        </div>
      </div>

      <Sponsors />
    </>
  )
}

export default Home
