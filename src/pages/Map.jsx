import React from "react";
import { MapElem } from "../components/MapElem";

import '../styles/map.css'

const map = () => {
    
    document.title = `CarboLeon - Map`

    return(
        <>
        <div className="bg-img"></div>
        <div className="margin" style={{height: '88vh'}}>
            <div className="map-map">
                <MapElem coords={[52.237049, 21.017532]}  />
            </div>
        </div>
        </>
    )
}

export default map