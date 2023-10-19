// import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Banner = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <div
        className="hero min-h-[80vh]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/HrkW3qx/cover-car.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="max-w-md  text-white">
            <h1 className="mb-5 text-3xl md:text-4xl font-bold">Explore the Epitome of Luxury on Four Wheels</h1>
            <hr />
            <p className="my-5 md:text-lg">
            AUTOEDITION: Where Luxury Meets Performance
            </p>
            {/* <Link><button className="btn bg-black text-white rounded hover:bg-gray-900 border-0">Explore More</button></Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
