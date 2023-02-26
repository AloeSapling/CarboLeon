import { MapElem } from "../components/MapElem";
function map() {

    document.title = "CarboLeon | Map" 
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