import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SellCars = () => {
    useEffect(() => {
        Aos.init();
      }, []);
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/d462svG/ferarri-4.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div data-aos="fade-down" data-aos-anchor-placement="top-center" className="hero-content text-center text-neutral-content bg-black rounded mx-4 md:mx-0 ">
          <div className="max-w-md p-4">
            <h1 className="mb-5 text-5xl font-bold text-white">Want to Sell Car?</h1>
            <p className="mb-5">
            Receive the absolute best value for your trade-in vehicle. We even handle all paperwork. Get your vehicle evaluated today!
            </p>
            <a href="mailto:humayraanjum87@gmail.com"> <button className="btn bg-black text-white  rounded hover:bg-slate-700">Send US Mail</button></a>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellCars;
