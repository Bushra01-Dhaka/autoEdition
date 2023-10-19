import { BiSolidBullseye, BiSolidEditAlt } from "react-icons/bi";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const EachBrandCard = ({ card }) => {
  const { name, brand, type, rating, image, price } = card;
  return (
    <div className="container mx-auto bg-[#F4F3F0]">
      <div className=" lg:h-[300px]   bg-base-100 shadow-xl rounded">
        <div className="grid grid-cols-1 lg:grid-cols-5 items-center ">
          <div className="lg:col-span-2">
            <img
              className="h-[300px] w-[300px] mx-auto lg:mx-0"
              src={image}
              alt="Shoes"
            />
          </div>

          <div className="flex justify-between items-center lg:gap-0 gap-4  lg:col-span-3 px-4 my-2 mx-auto lg:m-0">
            <div className="text-justify ">
              <h2 className="font-bold text-2xl">{name}</h2>
              <div className="my-4 text-slate-600 font-medium">
                <p>{brand}</p>
                <p>{type}</p>
                <p>${price}</p>
              </div>
              <p className="text-black">
                {/* Rating: {rating} */}
                <Rating 
                  initialRating={rating}
                  readonly
                  emptySymbol={
                    <img src="assets/images/star-empty.png" className="icon" />
                  }
                  fullSymbol={
                    <img src="https://i.ibb.co/D1FnK2h/star-icon.png" className="icon" />
                  }
                />
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <Link to="" className="btn bg-slate-200">
                {" "}
                <BiSolidEditAlt className="text-black text-xl"></BiSolidEditAlt>
              </Link>
              <Link to="" className="btn bg-slate-200">
                {" "}
                <BiSolidBullseye className="text-black text-xl"></BiSolidBullseye>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

EachBrandCard.propTypes = {
    card: PropTypes.object.isRequired
}

export default EachBrandCard;
