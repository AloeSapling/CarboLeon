import { MapElem } from "../components/MapElem";

const map = () => {
    document.title = "CarboLeon - map"

    return(
        <>
        <div className="bg-img"></div>
        <div className="margin4">
            <div className="mapp">
                <MapElem coords={[52.237049, 21.017532]} />
            </div>
        </div>
        </>
    )
}

export default map