import { useEffect, useState } from "react";
import BrandCard from "./BrandCard";
import Aos from "aos";
import "aos/dist/aos.css";

const BrandCards = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("https://brand-shop-server-jbppt2hrj-bushras-projects-96f4a913.vercel.app/brands")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
      });
  }, []);

  return (
    <div className="py-24 bg-[#191717]">
      <div className="container mx-auto">
        <h1
          data-aos="fade-down"
          data-aos-anchor-placement="top-center"
          className="text-center text-4xl font-bold text-white my-14"
        >
          Popular Brands
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
          {brands.map((brand, index) => (
            <BrandCard brand={brand} key={index}></BrandCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandCards;
