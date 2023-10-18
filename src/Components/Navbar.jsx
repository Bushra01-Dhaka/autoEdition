import { Link, NavLink } from "react-router-dom";
const logoSrc = './cover.png';

const Navbar = () => {
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
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
                    isPending ? "pending" : isActive ? " text-white font-bold underline bg-transparent " : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/addProduct"  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? " text-white font-bold underline bg-transparent " : ""
                  }>Add Product</NavLink>
              </li>
              <li>
                <NavLink to="/myCart"  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? " text-white font-bold underline bg-transparent " : ""
                  }>My Cart</NavLink>
              </li>
            </ul>
          </div>
          <Link><img className="h-[70px] lg:h-[100px] object-cover" src={logoSrc} alt="logo" /></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/"  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? " text-black font-bold underline bg-transparent " : ""
                  }>Home</NavLink>
            </li>
            <li>
              <NavLink to="/addProduct"  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? " text-black font-bold underline bg-transparent " : ""
                  }>Add Product</NavLink>
            </li>
            <li>
              <NavLink to="/myCart"  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? " text-black font-bold underline bg-transparent " : ""
                  }>My Cart</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
         <Link><button className="btn btn-sm rounded bg-black text-white hover:bg-slate-800">Login</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
