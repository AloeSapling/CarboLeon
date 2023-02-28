import { TbMap2 } from "react-icons/tb";
import { TiPhoneOutline } from "react-icons/ti";
import { TbZoomQuestion } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import '../styles/asside.css'

const Asside = () => {

  const {t} = useTranslation()

  return (
    <>
      <div className="aContainer">
          <Link to='/about'>
            <div>
              <TbZoomQuestion />
              <p>{t("asside.about")}</p>
            </div>
          </Link>
          <Link to="/contact">
            <div>
              <TiPhoneOutline />
              <p>{t("asside.consup")}</p>
            </div>
          </Link>
          <Link to="/map">
            <div>
              <TbMap2 />
              <p>{t("asside.map")}</p>
            </div>
          </Link>
          <div>tekst</div>
          <div>tekst</div>
      </div>
    </>
  );
};

export default Asside;
