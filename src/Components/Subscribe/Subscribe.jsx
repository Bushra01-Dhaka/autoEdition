import { useContext } from "react";
import img from "./../../assets/subs.jpg"
import { AuthContext } from "../../Providers/AuthProvider";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import swal from "sweetalert";
const Subscribe = () => {
    const {user} = useContext(AuthContext);
    
    useEffect(() => {
        Aos.init();
      }, []);

    const handleSubscribe = () => {
        swal("Subscribed Successfully.", {
            button: "Ok",
          })
    }
  return (
    <div data-aos="zoom-in" className="md:max-w-5xl mx-auto my-10 rounded">
      <div
        className="hero min-h-screen rounded bg-fixed"
        style={{
          backgroundImage:
            `url(${img})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl bg-black bg-opacity-40 p-6 rounded-md">
            <h1 className="mb-5 text-5xl font-bold text-white">{`Are You passionate about cars?`}</h1>
            <p className="mb-5">
            Subscribe now and never miss a beat as we bring you the latest symphony of automotive excellence!
            </p>
            {
                user? 
                <input type="email" 
            placeholder= {`${user?.email}`}
            className="input input-bordered w-full max-w-xs rounded text-black" />
            :
            <input type="email" 
            placeholder= "Your Email"
            className="input input-bordered w-full max-w-xs rounded text-black" />

            }
            
            <button onClick={handleSubscribe} className="btn btn-primary rounded bg-black border-0 hover:bg-slate-600">Subscribe Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
