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
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Profile</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;