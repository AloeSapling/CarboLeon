import { TbMap2 } from "react-icons/tb";
import { TiPhoneOutline } from "react-icons/ti";
import { TbZoomQuestion } from "react-icons/tb";
import { Link } from "react-router-dom";

const Asside = () => {
  const stylle = {
    'color':'inherit',
    'text-decoration':'none',
  }
  return (
    <>
      <Link to='/about' style={stylle}>
        <div>
          <TbZoomQuestion />
          <p>About</p>
        </div>
      </Link>
      <Link to="/contact" style={stylle}>
        <div>
          <TiPhoneOutline />
          <p>Contact & support</p>
        </div>
      </Link>
      <Link to="/map" style={stylle}>
        <div>
          <TbMap2 />
          <p>Map</p>
        </div>
      </Link>
    </>
  );
};

export default Asside;
