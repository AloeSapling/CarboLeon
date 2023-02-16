import React from 'react'
import sponsor from '../pages/sponsorIMG/Logo-ETRONIX-rgb.png'


const Sponsors = () => {
  return (
    <section className="sContainer">
          <h1>Our Sponsors:</h1>
          <div className="sponsors">
            <a href="https://www.e-tronix.eu/">
              <img src={sponsor} alt="sponsor" />
            </a>
          </div>
        </section>
  )
}

export default Sponsors