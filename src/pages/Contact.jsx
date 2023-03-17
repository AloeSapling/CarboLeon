import { useTranslation } from "react-i18next";
import React from "react";

import '../styles/contact.css'

function Contact() {
  const { t } = useTranslation();
  document.title = `CarboLeon | ${t("NavBar.Contact")}`;

  return (
    <>
      <div className="background-img">
        <h1>{t("Contact.title")}</h1>
      </div>
      <div className="margin">
        <div className="contact-text">
          <h2>{t("Contact.1")}</h2>
          <h2>{t("Contact.2")}</h2>
        </div>
        <h1 className="contact-text-background">{t("Contact.3")}</h1>
        <div className="socials">
          <a
            href="https://www.instagram.com/carbo_leon333/"
            target="_blank"
            rel="noreferer"
          >
            <div className="contact-container-qr-code instagram">
              <div className="qr">
                <img
                  src={"images/qrCodes/IGQR.webp"}
                  alt="instagram qr"
                  className="qrCode"
                />
              </div>
              <p>Instagram</p>
            </div>
          </a>
          <a
            href="https://www.facebook.com/CarboLeon"
            target="_blank"
            rel="noreferer"
          >
            <div className="contact-container-qr-code facebook">
              <div className="qr">
                <img
                  src={"images/qrCodes/FBQR.webp"}
                  alt="facebook qr"
                  className="qrCode"
                />
              </div>
              <p>Facebook</p>
            </div>
          </a>
          <a
            href="https://www.youtube.com/channel/UCuEbKuQs_P9V3y1JzCl4ZxQ"
            target="_blank"
            rel="noreferer"
          >
            <div className="contact-container-qr-code youtube">
              <div className="qr">
                <img
                  src={"images/qrCodes/YTQR.webp"}
                  alt="youtube qr"
                  className="qrCode"
                />
              </div>
              <p>Youtube</p>
            </div>
          </a>
          <a
            href="https://www.tiktok.com/@carboleon"
            target="_blank"
            rel="noreferer"
          >
            <div className="contact-container-qr-code tiktok">
              <div className="qr">
                <img
                  src={"images/qrCodes/TTQR.webp"}
                  alt="tiktok qr"
                  className="qrCode"
                />
              </div>
              <p>TikTok</p>
            </div>
          </a>
        </div>
        <div className=" contact-text-background">
          <h1>{t("Contact.5")}</h1>
          <p>{t("Contact.4")}</p>
        </div>
        <a href="mailto:carbo.leon333@gmail.com" rel="noreferrer" target="_blank" className="contact-email">carbo.leon333@gmail.com</a>
      </div>
    </>
  );
}

export default Contact;
