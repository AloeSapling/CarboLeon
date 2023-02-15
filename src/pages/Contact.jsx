import React from 'react'
import YTQR from './qrCodes/YTQR.png'
import TTQR from './qrCodes/TTQR.png'
import FBQR from './qrCodes/FBQR.png'
import IGQR from './qrCodes/IGQR.png'

function Contact() {
  return (
    <>
        <div className="background-img">
    <h1>Contact us</h1>
  </div>
  <div className='margin2'>
    <div className='tContainer'>
      <h1 className='cTitle'>We have various contacts and social medias. If you have recieved any message or request from a contact or social media that isn't listed here, then it wasn't sent by us but by a person who is attempting to impersonate us.</h1>
      <h1 className='cTitle'>Please be respectful and do not spam any of our contacts.</h1>
    </div>
    <div className='socials'>
      <div className='iSocial blankus'> <h1>Our socials:</h1> </div>
    </div>
    <div className='socials'>
        <a href='https://www.instagram.com/carbo_leon333/' target='_blank' rel='noreferer'>
          <div className='iSocial insta'>
            <div className='qr'>
              <img src={IGQR} alt='instagram qr' className='qrCode'/>
            </div>
            <p>Instagram</p>
          </div>
        </a>
        <a href='https://www.facebook.com/CarboLeon' target='_blank' rel='noreferer'>
          <div className='iSocial faceboo'>
            <div className='qr'>
              <img src={FBQR} alt='facebook qr' className='qrCode'/>  
            </div>
            <p>Facebook</p>
          </div>
        </a>
        <a href='https://www.youtube.com/channel/UCuEbKuQs_P9V3y1JzCl4ZxQ' target='_blank' rel='noreferer'>
          <div className='iSocial youtub'>
            <div className='qr'>
              <img src={YTQR} alt='youtube qr' className='qrCode'/>
            </div>
            <p>Youtube</p>
          </div>
        </a>
        <a href='https://www.tiktok.com/@carboleon' target='_blank' rel='noreferer'>
          <div className='iSocial tik'>
            <div className='qr'>
              <img src={TTQR} alt='tiktok qr' className='qrCode'/>
            </div>
            <p>TikTok</p>
          </div>
        </a>
    </div>
    <div className='socials'>
      <div className='iSocial blankus'> <h1>Contact us at:</h1> </div>
    </div>
        <div className='socials'>
          <div className='iSocial blanku contact'>
            <p>for business inquiries:</p>carbo.leon333@gmail.com</div>
        </div>
  </div>
    </>

  )
}

export default Contact