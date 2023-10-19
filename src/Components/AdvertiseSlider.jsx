
const AdvertiseSlider = () => {
  return (
    <div>

      <div className="carousel w-full h-[100vh]">
        {/* first */}
        <div id="slide1" className="carousel-item relative w-full">
         {/* eee */}
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/d462svG/ferarri-4.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content bg-black rounded to-transparent opacity-80">
              <div className="max-w-md p-4 border-2 border-white shadow-xl">
                <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-white"><span className="text-2xl bg-slate-700 ">10% OFF</span><br />Find the Perfect Car For You</h1>
                <p className="mb-5 text-white">
                Experience the Pinnacle of Luxury with AUTOEDITION
                </p>
              </div>
            </div>
          </div>
          {/* eee */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* second */}
        <div id="slide2" className="carousel-item relative w-full">
          {/*  */}
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/w7Dctgz/lambor-3.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content bg-black rounded to-transparent opacity-80">
              <div className="max-w-md p-4 border-2 border-white shadow-xl">
                <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-white"><span className="text-2xl bg-slate-700 ">10% OFF</span><br />Get Your Dream Car Today</h1>
                <p className="mb-5 text-white">
                Elegance Meets Engineering: Step into the World of luxury.
                </p>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* third */}
        <div id="slide3" className="carousel-item relative w-full">
        {/*  */}
        <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/v4FKj39/ferarri-1.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content bg-black rounded to-transparent opacity-80">
              <div className="max-w-md p-4 border-2 border-white shadow-xl">
                <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-white"><span className="text-2xl bg-slate-700 ">10% OFF</span><br /> {`Lets`} Drive Your Dream Car</h1>
                <p className="mb-5 text-white">
                Innovate Your Drive - Where Excellence Meets Luxury.
                </p>
              </div>
            </div>
          </div>
        {/*  */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

      </div>



    </div>
  );
};

export default AdvertiseSlider;
