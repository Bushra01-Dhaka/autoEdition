import { useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar";
// import Rating from "react-rating";


const Details = () => {

 

  const selectedProducts = useLoaderData();
  const { name, brand, type, rating, image, price, description } =
    selectedProducts;
  return (
    <div>
      <Navbar></Navbar>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4">
          <div className="border-2">
            <img src={image} alt="" />
          </div>

          <div className="border-2">
            <div className="bg-black text-white p-4">
              <h1 className="text-4xl font-bold">{name}</h1>
              <p>{description}</p>
            </div>
            <div className="text-xl space-y-4 p-4">
              <p><span className="font-bold">Brand: </span>{brand}</p>
              <p><span className="font-bold">Type: </span>{type}</p>
              <p><span className="font-bold">Price: </span>${price}</p>
              {/* <Rating 
                  initialRating={rating}
                  readonly
                  emptySymbol={
                    <img src="assets/images/star-empty.png" className="icon" />
                  }
                  fullSymbol={
                    <img src="https://i.ibb.co/D1FnK2h/star-icon.png" className="icon" />
                  }
                /> */}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Details;
