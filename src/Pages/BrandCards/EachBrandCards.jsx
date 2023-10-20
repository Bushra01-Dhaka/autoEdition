import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import AdvertiseSlider from "../../Components/AdvertiseSlider";
import Navbar from "../../Components/Navbar";
import EachBrandCard from "./EachBrandCard";
import Footer from "../../Components/Footer";

import Aos from "aos";
import "aos/dist/aos.css";

const EachBrandCards = () => {
  const brands = useLoaderData();

  const {id} = useParams();
  console.log("id brand: ", id);
  

  useEffect(() => {
    Aos.init();
  }, []);

  console.log(brands.brand_name);


  const [loadedSelectedBrand, setLoadedSelectedBrand] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/products`)
    .then(res => res.json())
    .then(data => {
      setLoadedSelectedBrand(data);
    })
  });

  const selectedBrand = loadedSelectedBrand.filter(item => item.brand === id);
  console.log(selectedBrand);
  


  return (
    <div>
      <Navbar></Navbar>
      <AdvertiseSlider></AdvertiseSlider>
      <div className="container mx-auto my-24">
        <div data-aos="fade-down" data-aos-anchor-placement="top-center" className="max-w-lg mx-auto mb-28">
          <h1 className=" px-2 md:px-0 text-5xl font-bold text-center">Explore {brands.brand_name}{`'s`} Collection</h1>
        </div>
       

       {
        selectedBrand.length == 0? <>
           <div>
             <h2 className="text-2xl text-center">No Product Available</h2>
           </div>
        </>  :
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-4 lg:mx-0">
          {selectedBrand.map((card, index) => (
            <EachBrandCard 
            card={card} 
            key={index}>
            </EachBrandCard>
          ))}
        </div>
        </>
       }
{/* 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-4 lg:mx-0">
          {selectedBrand.map((card, index) => (
            <EachBrandCard 
            card={card} 
            key={index}>
            </EachBrandCard>
          ))}
        </div> */}


      </div>

      <Footer></Footer>
    </div>
  );
};

export default EachBrandCards;
