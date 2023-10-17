import { useState } from "react";

export const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://static.vecteezy.com/system/resources/previews/022/444/261/original/restaurant-resto-food-court-cafe-logo-vector.jpg"
    ></img>
  </a>
);

const Header = () => {
  const [isloggedIn, setisloggedIn] = useState(true);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Profile</li>
          <li>Cart</li>
          <li>

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
        </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
