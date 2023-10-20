import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Rating from "react-rating";
import { useEffect, useState } from "react";
import Footer from "../Components/Footer";



const Details = () => {

  const { id } = useParams();
  console.log(id);


  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
    .then(res => res.json())
    .then(data => {
      setAllProducts(data);
    })

  }, [id]);

  console.log("all", allProducts)

 
  return (
    <div>
      <Navbar></Navbar>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4">
          <div className="border-2">
            <img src={allProducts.image} alt="" />
          </div>

          <div className="border-2 shadow-xl">
            <div className="bg-black text-white p-4">
              <h1 className="text-4xl font-bold">{allProducts.name}</h1>
              <p className="my-2">{allProducts.description}</p>
            </div>
            <div className="text-xl space-y-4 p-4">
              <p><span className="font-bold">Brand: </span>{allProducts.brand}</p>
              <p><span className="font-bold">Type: </span>{allProducts.type}</p>
              <p><span className="font-bold">Price: </span>${allProducts.price}</p>
              <Rating
                  initialRating={allProducts.rating}
                  readonly
                  emptySymbol={
                    <img src="assets/images/star-empty.png" className="icon" />
                  }
                  fullSymbol={
                    <img src="https://i.ibb.co/D1FnK2h/star-icon.png" className="icon" />
                  }
                />
            </div>
          </div>

        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Details;
