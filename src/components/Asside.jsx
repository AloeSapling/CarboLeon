import { TbMap2 } from "react-icons/tb";
import { TiPhoneOutline } from "react-icons/ti";
import { TbZoomQuestion } from "react-icons/tb";
import { Link } from "react-router-dom";

const Asside = () => {
  return (
    <>
      <Link to='/about'>
        <div>
          <TbZoomQuestion />
          <p>About</p>
        </div>
      </Link>
      <Link to="/contact">
        <div>
          <TiPhoneOutline />
          <p>Contact & support</p>
        </div>
      </Link>
      <Link to="/map">
        <div>
          <TbMap2 />
          <p>Map</p>
        </div>
      </Link>
    </>
  );
};

export default Asside;
