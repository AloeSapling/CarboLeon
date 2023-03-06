import { useTranslation } from "react-i18next";
import React from 'react'

function Contact() {
 const {t} = useTranslation();
 document.title = `CarboLeon | ${t("NavBar.Contact")}`

  return (
    <>
        <div className="background-img">
    <h1>{t("Contact.title")}</h1>
  </div>
  <div className='margin2'>
    <div className='tContainer'>
      <h1 className='cTitle'>{t("Contact.1")}</h1>
      <h1 className='cTitle'>{t("Contact.2")}</h1>
    </div>
    <div className='socials'>
      <div className='iSocial blankus'> <h1>{t("Contact.3")}</h1> </div>
    </div>
    <div className='socials'>
        <a href='https://www.instagram.com/carbo_leon333/' target='_blank' rel='noreferer'>
          <div className='iSocial insta'>
            <div className='qr'>
              <img src={"images/qrCodes/IGQR.webp"} alt='instagram qr' className='qrCode'/>
            </div>
            <p>Instagram</p>
          </div>
        </a>
        <a href='https://www.facebook.com/CarboLeon' target='_blank' rel='noreferer'>
          <div className='iSocial faceboo'>
            <div className='qr'>
              <img src={"images/qrCodes/FBQR.webp"} alt='facebook qr' className='qrCode'/>  
            </div>
            <p>Facebook</p>
          </div>
        </a>
        <a href='https://www.youtube.com/channel/UCuEbKuQs_P9V3y1JzCl4ZxQ' target='_blank' rel='noreferer'>
          <div className='iSocial youtub'>
            <div className='qr'>
              <img src={"images/qrCodes/YTQR.webp"} alt='youtube qr' className='qrCode'/>
            </div>
            <p>Youtube</p>
          </div>
        </a>
        <a href='https://www.tiktok.com/@carboleon' target='_blank' rel='noreferer'>
          <div className='iSocial tik'>
            <div className='qr'>
              <img src={"images/qrCodes/TTQR.webp"} alt='tiktok qr' className='qrCode'/>
            </div>
            <p>TikTok</p>
          </div>
        </a>
    </div>
    <div className='socials'>
      <div className='iSocial blankus'> <h1>{t("Contact.4")}</h1> </div>
    </div>
        <div className='socials'>
          <div className='iSocial blanku contact'>
            <p>{t("Contact.5")}</p>carbo.leon333@gmail.com</div>
        </div>
  </div>
    </>

  )
}

export default Contact

