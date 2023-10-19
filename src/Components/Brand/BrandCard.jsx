import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BrandCard = ({ brand }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  const { brand_name, brand_logo,_id } = brand;
  return (
    <div>
      <Link to={`brandCards/${_id}`}>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className="card card-compact bg-base-100 shadow-xl rounded mb-6 hover:border-2 hover:border-black p-4"
        >
          <figure>
            <img className="h-[200px]" src={brand_logo} alt={brand_name} />
          </figure>
          <div className="card-body">
            <h1 className="text-center font-bold text-2xl text-black">
              {brand_name}
            </h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

BrandCard.propTypes = {
  brand: PropTypes.object.isRequired,
};

export default BrandCard;
