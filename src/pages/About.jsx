import React, { useState } from 'react'
import { useTranslation } from "react-i18next";
import Sponsors from '../components/Sponsors'

function About() {
  const {t} = useTranslation()
  document.title = `CarboLeon | ${t("NavBar.About")}`

  const [isDropdown, setIsDropdown] = useState(false);
  
  return (
    <>
        <div className="background-img">
    <h1>{t("About.title")}</h1>
  </div>
      <div className='margin3'>
        <div className='mContainer'>
          <main className='main'> {/* The main about section */}
          <h1>{t("About.1")}</h1>
          <div className={`about ${isDropdown ? "" : "aboutDropLess"}`}>
            {/* <p>&#x9;&#x9;Carboleon is a project developed by a small, but ambitious group of teenagers as part of the "Zwolnieni z Teorii" nationwide olympiad. The competition centers around creating a project based around being helpful to society. Our take on the contest's topic is a website that helps aquire current information about air quality and the atmosphere. We also dedicated ourselves to making this information accurate, readilly available and detailed yet simple to understand. In order to accomplish this hefty task we opted to create a website with information being split into 2 categories: the 'air index' and the 'pollution map'. </p>
            <p>&#9;&#9;The 'air index' centers around the atmospheric part of our website, providing you city-specific data about the current and the upcoming weather. You are able to choose which city it shows by typing it in the search bar above the aforementioned data. There is a long list of cities you can check the weather of and in real time aswell! This is made possible thanks to the API we use called "openweathermap".</p>
            <p>&#9;&#9;In the "pollution map" section you can find &#40; as the name suggests &#41; a map which shows the pollutions levels of certain areas. Notice the use of the word "areas" and not cities, this is because cities whilst not entirely a wrong statement, it just doesn't accurately describe what the map actually shows. See, whilst you can find the pollution levels of a city, you will most likely find multiple markers, each with their own value. This means that you will find the pollution levels not down to a city, but a specific area of a city - this allows our map to be much more precise. The previously mentioned "levels" have their own specific value, depending on how low or how high it is it falls under a different, color-coded range. These are: extremely bad, very bad, bad, slightly bad, fine and very good. There is also a menu that allows you to change how you see the map. This includes seeing airports, a topographic map and a satellite view. This is all powered by Leaflet and "openstreetmap".</p>
            <p>&#9;&#9;The data we provide is from over 70 countries. With the information we deliver, you can make much more educated decisions about various things, such as: where to move, where to travel, what precautions to take when travelling as well as being updated with the local and global situation of air pollution and weather conditions. The ability to see the weather conditions as well as the pollution of other places compared to our area, helps us better understand wether or not our current situation is really that bad. We understand that air pollution is a serious global issue, and we treat it as so. Whilst Carboleon  doesn't help with taking precautions against thes threats, it can help you better understand what level of precautions to take in order to protect you and your loved ones. By becoming more aware of the air quality in our cities, we can make a positive difference in the world. So join us and let’s make a healthier tomorrow, today! P.S Don't forget to check out our social media accounts, your support will be very appreciated! </p> */}
            {/* <p>For more information, check out our <a href='https://www.wikipedia.com'>wikipedia page</a>.</p> */}
            {t("About.Text")}
          </div>
          </main>
        </div>
        <button className='dropdownAbout' onClick={() => setIsDropdown(!isDropdown)}> { isDropdown ? t("About.btn-show") : t("About.btn-hide")}</button>
    </div>
    <Sponsors />
    </>

  )
}

export default About