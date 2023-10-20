import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Nav2 = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <div className="container mx-auto py-4 bg-[#F4F3F0]">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  bg-black text-white rounded-box w-52"
              >
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? " text-white font-bold underline bg-transparent "
                        : ""
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/addProduct"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? " text-white font-bold underline bg-transparent "
                        : ""
                    }
                  >
                    Add Product
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/myCart"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? " text-white font-bold underline bg-transparent "
                        : ""
                    }
                  >
                    My Cart
                  </NavLink>
                </li>
              </ul>
            </div>
            <Link className="bg-white rounded-[70px]">
              <img
                className="h-[70px] lg:h-[70px] object-cover"
                src="https://i.ibb.co/GcVLT2h/cover.png"
                alt="logo"
              />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? " font-bold underline bg-transparent "
                      : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/addProduct"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? " text-black font-bold underline bg-transparent "
                      : ""
                  }
                >
                  Add Product
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/myCart"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? " text-black font-bold underline bg-transparent "
                      : ""
                  }
                >
                  My Cart
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <div className="flex flex-col-reverse md:flex-row items-center gap-2">
                <div className="flex flex-row-reverse flex-wrap max-w-[100px] items-center">
                  <img
                    className="w-[40px] h-[40px] rounded-[40px]  border-2"
                    src={user.photoURL}
                    alt=""
                  />
                  <p className="text-[10px] ">{user.email}</p>
                </div>
                <button
                  onClick={handleSignOut}
                  className="w-[100px] h-[40px] bg-black  text-white font-bold border border-black text-bold rounded hover:bg-slate-600 hover:text-white"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <Link to="/login">
                <button className="w-[100px] h-[40px] bg-black font-bold text-white text-bold rounded hover:bg-slate-600 hover:text-white">
                  Login
                </button>
              </Link>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav2;
