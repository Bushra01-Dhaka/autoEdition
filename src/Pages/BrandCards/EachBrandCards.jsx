import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import AdvertiseSlider from "../../Components/AdvertiseSlider";
import EachBrandCard from "./EachBrandCard";
import Footer from "../../Components/Footer";

import Aos from "aos";
import "aos/dist/aos.css";
import Nav2 from "../../Components/Nav2";

const EachBrandCards = () => {
  const brands = useLoaderData();

  const { id } = useParams();
  console.log("id brand: ", id);

  useEffect(() => {
    Aos.init();
  }, []);

  console.log(brands.brand_name);

  const [loadedSelectedBrand, setLoadedSelectedBrand] = useState([]);
  useEffect(() => {
    fetch(`https://brand-shop-server-jbppt2hrj-bushras-projects-96f4a913.vercel.app/products`)
      .then((res) => res.json())
      .then((data) => {
        setLoadedSelectedBrand(data);
      });
  });

  const selectedBrand = loadedSelectedBrand.filter((item) => item.brand === id);
  console.log(selectedBrand);

  return (
    <div className="bg-[#F4F3F0]">
      <Nav2></Nav2>
      <AdvertiseSlider></AdvertiseSlider>
      <div className="container mx-auto my-24">
        <div
          data-aos="fade-down"
          data-aos-anchor-placement="top-center"
          className="max-w-lg mx-auto mb-28"
        >
          <h1 className=" px-2 md:px-0 text-5xl text-black font-bold text-center">
            Explore {brands.brand_name}
            {`'s`} Collection
          </h1>
        </div>

        {selectedBrand.length !== 0 ? (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-4 lg:mx-0">
              {selectedBrand.map((card, index) => (
                <EachBrandCard card={card} key={index}></EachBrandCard>
              ))}
            </div>
          </>
        ) : (
          <>

            <div>
              <h2 className="text-2xl text-center text-black">
                No Product Available
              </h2>
            </div>
          </>
        )}
        
      </div>

      <Footer></Footer>
    </div>
  );
};

export default EachBrandCards;
