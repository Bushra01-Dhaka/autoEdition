import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";


import { FcGoogle } from "react-icons/fc";
import Navbar from "../Components/Navbar";
import { AuthContext } from "../Providers/AuthProvider";
import swal from "sweetalert";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const [logInError, setLogInError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const location = useLocation();
  console.log("In login page location", location);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    //reset error
    setLogInError("");
    setSuccess("");

    //

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        //after login jekhane jabo
        navigate(location?.state ? location.state : "/");

        setSuccess("Logged In Successfully.");
        swal("Logged In Successfully.", {
          button: "Ok",
        });
      })
      .catch((error) => {
        console.error(error);
        setLogInError("Failed to Login!");
        swal("Logged in failed! Please provide valid email & password.", {
          button: "Ok",
        });
      });
  };

  //google sign in handle fnction
  const handleGoogleSignIN = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");

        setSuccess("Logged In Successfully.");
        swal("Logged In Successfully.", {
          button: "Ok",
        });
      })
      .catch((error) => {
        console.error(error);
        setLogInError("Failed to Login!");
        swal("Logged in failed!", {
          button: "Ok",
        });
      });
  };

  return (
    <div>
      <Navbar></Navbar>

      <div className="relative h-[140vh] lg:[100vh] bg-black text-white">
        {/* black akta background diyehi */}
        {/* <div className="absolute inset-0 bg-black opacity-60" /> */}

        <div className="absolute inset-0 ">
          <div className="px-4 lg:px-0">
            <h1 className="text-center text-white text-3xl md:text-4xl  my-10">
              Please login
            </h1>

            <form onSubmit={handleLogin} className="md:w-3/2 lg:w-1/2 mx-auto ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered text-black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered text-black"
                  required
                />
              </div>
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt text-white link link-hover"
                >
                  Forgot password?
                </a>
              </label>

              <div className="form-control mt-6">
                <button className="btn bg-slate-900 text-white  hover:bg-slate-500">
                  Login
                </button>
              </div>
            </form>

            {logInError && (
              <p className=" my-2 text-sm text-center font-semibold text-red-700">
                {logInError}
              </p>
            )}
            {success && (
              <p className="my-2 text-sm font-semibold text-center text-green-600 t-4">
                {success}
              </p>
            )}

            <div className="md:w-3/2 lg:w-1/2 mx-auto">
              <div className="mt-8 mb-4">
                <hr className="border-b-1 border-white" />
                <h3 className="text-xl text-white text-center my-2">Or</h3>
                <div className="mx-auto">
                  <FcGoogle className="relative top-9 text-xl left-[280px] md:left-[225px]"></FcGoogle>
                  <button
                    onClick={handleGoogleSignIN}
                    className="btn w-full mx-auto border-2 border-white text-black  rounded "
                  >
                    Continue With Google
                  </button>
                </div>
              </div>
            </div>

            <p className="my-4 text-white text-center">
              {`Don't have any account?`} Please{" "}
              <Link
                to="/signup"
                className="font-extrabold b border-b-2 border-slate-500 text-slate-500"
              >
                Sign Up
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Login;