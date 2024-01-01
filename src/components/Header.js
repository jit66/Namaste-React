import { useState } from "react";
import { Link } from "react-router-dom";

export const Title = () => (
  <a href="/">
    <img
      className="h-20 w-30 m-2 rounded-full px-2"
      alt="logo"
      src="https://static.vecteezy.com/system/resources/previews/022/444/261/original/restaurant-resto-food-court-cafe-logo-vector.jpg"
    ></img>
  </a>
);

const Header = () => {
  const [isloggedIn, setisloggedIn] = useState(true);
  return (
    <div className="flex justify-between bg-blue-200 shadow-lg sm:bg-slate-400">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10 ">
          <Link to="/">
            <li className="px-2">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-2">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-2">Contact</li>
          </Link>
          <Link to="/instamart">
            <li className="px-2">InstaMart</li>
          </Link>
          <li>Cart</li>
        </ul>
      </div>

      {isloggedIn ? (
        <button
          onClick={() => {
            setisloggedIn(false);
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            setisloggedIn(true);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
