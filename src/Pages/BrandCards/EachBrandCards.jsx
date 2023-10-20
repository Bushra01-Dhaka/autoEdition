import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AdvertiseSlider from "../../Components/AdvertiseSlider";
import Navbar from "../../Components/Navbar";
import EachBrandCard from "./EachBrandCard";
import Footer from "../../Components/Footer";

import Aos from "aos";
import "aos/dist/aos.css";

const EachBrandCards = () => {
  const brands = useLoaderData();

  useEffect(() => {
    Aos.init();
  }, []);

  console.log(brands.brand_name);

  const [selectedBrand, setSelectedBrand] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/products/${brands.brand_name}`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedBrand(data);
      })
      .catch((error) => console.error(error));
  }, [brands.brand_name]);

  console.log(selectedBrand);

  //   const {name, brand, type, rating, image, price} = selectedBrand;

  return (
    <div>
      <Navbar></Navbar>
      <AdvertiseSlider></AdvertiseSlider>
      <div className="container mx-auto my-24">
        <div data-aos="fade-down" data-aos-anchor-placement="top-center" className="max-w-lg mx-auto mb-28">
          <h1 className=" px-2 md:px-0 text-5xl font-bold text-center">Explore {brands.brand_name}{`'s`} Collection</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-4 lg:mx-0">
          {selectedBrand.map((card, index) => (
            <EachBrandCard 
            card={card} 
            key={index}>
            </EachBrandCard>
          ))}
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default EachBrandCards;
