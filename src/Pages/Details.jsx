import { Link, useParams } from "react-router-dom";
import Rating from "react-rating";
import { useContext, useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Nav2 from "../Components/Nav2";
import { AuthContext } from "../Providers/AuthProvider";
import swal from "sweetalert";



const Details = () => {

  const { id } = useParams();
  console.log(id);

  const {user}  = useContext(AuthContext);
  const email = user.email;
  console.log(email);


  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetch(`https://brand-shop-server-jbppt2hrj-bushras-projects-96f4a913.vercel.app/products/${id}`)
    .then(res => res.json())
    .then(data => {
      setAllProducts(data);
    })

  }, [id]);

  console.log("all", allProducts);

  const handleAddToCart = (image1,description1,brand1,type1,price1,rating1,name1) => {
       
        
        const image = image1;
        const description = description1;
        const brand = brand1;
        const type = type1;
        const price = price1;
        const rating = rating1;
        const name = name1;

        console.log(image,description,brand,type,price,rating,email,name);

          const addedCartData = {name,image,description,brand,type,price,rating,email};
         console.log(addedCartData);

         fetch(`https://brand-shop-server-jbppt2hrj-bushras-projects-96f4a913.vercel.app/carts`,{
          method:'POST',
          headers: {
            'content-type': 'application/json',
          },
          body:  JSON.stringify(addedCartData)
       })
       .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.insertedId)
        {
          swal("Your Favorite Product Added Successfully.", {
            button: "Ok",
          })
        }

      })

       
  }

 
  return (
    <div className="bg-[#F4F3F0]">
      <Nav2></Nav2>

      <div className="container mx-auto my-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4">
          <div className="border-2">
            <img src={allProducts.image} alt="" />
          </div>

          <div className="border-2 shadow-xl">
            <div className="bg-black text-white p-4">
              <h1 className="text-4xl font-bold">{allProducts.name}</h1>
              <p className="my-2">{allProducts.description}</p>
            </div>
            <div className="text-xl space-y-4 p-4 text-black">
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
            <Link className="py-4"><button onClick={()=> handleAddToCart(allProducts.image,
            allProducts.description,
            allProducts.brand,
            allProducts.type,
            allProducts.price,
            allProducts.rating,
            allProducts.name
            
            )
            } 
            className="btn bg-black font-bold rounded text-white m-4  hover:bg-slate-900">Add to Cart</button></Link>
          </div>

        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Details;
