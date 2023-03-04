import { MapElem } from "../components/MapElem";
import { useTranslation } from "react-i18next";

const map = () => {

    // const {t} = useTranslation();
    // document.title = `CarboLeon | ${t("NavBar.PolMap")}` 

    return(
        <>
        <div className="bg-img"></div>
        <div className="margin4">
            <div className="mapp">
                <MapElem></MapElem>
            </div>
        </div>
        </>
    )
}

export default map