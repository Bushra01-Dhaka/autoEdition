import { useLoaderData } from "react-router-dom";
import Nav2 from "../Components/Nav2";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useState } from "react";
import EachCart from "../Components/EachCart";
import Footer from "../Components/Footer";


const MyCart = () => {
  const myCart = useLoaderData();
  console.log(myCart);

  const { user } = useContext(AuthContext);
  const email = user.email;
  console.log(email);

  const cartData = myCart.filter(cart => cart.email === email);
  console.log(cartData);

  const [newCart, setNewCart] = useState(cartData);
  console.log("newCart", newCart);
  



  return (
    <div className="bg-[#F4F3F0]">
      <Nav2></Nav2>
     
      {
        newCart.length == 0? 
        <>
         <div className="h-[60vh] container mx-auto flex items-center justify-center">
            <div>
                <h1 className="text-4xl font-bold text-black">You {`didn't`} add any product.</h1>
            </div>
         </div>
        </>
        :
        <>
        <div className="container mx-auto my-10">
        <h1 className="text-center text-black font-bold text-4xl">Favorites Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 my-20 lg:mx-0">
                {
                    newCart.map(cart => <EachCart
                    key={cart._id}
                    cart={cart}
                    newCart={newCart}
                    setNewCart={setNewCart}
                    ></EachCart>)
                }

            </div>

        </div>
        </>
      }

      <Footer></Footer>


    </div>
  );
};

export default MyCart;
