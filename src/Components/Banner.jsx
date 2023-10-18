import { Link } from "react-router-dom";

const Banner = () => {
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
          <div className="max-w-md text-white">
            <h1 className="mb-5 text-5xl font-bold">AutoEdition</h1>
            <hr />
            <p className="my-5 text-lg">
            Where Luxury Meets Performance
            </p>
            <Link><button className="btn bg-black text-white rounded hover:bg-gray-900 border-0">Explore More</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
