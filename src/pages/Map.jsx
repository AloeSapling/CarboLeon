import {lazy} from "react"

import '../styles/map.css'  

const MapElem = lazy(() => import("../components/MapElem"))
    
const map = () => {
    
    document.title = `CarboLeon - Map`

    return(
        <>
        <div className="bg-img" />
        <div className="margin" style={{height: '88vh'}}>
            <div className="map-map">
                <MapElem coords={[52.237049, 21.017532]}  />
            </div>
        </div>
        </>
    )
}

export default map