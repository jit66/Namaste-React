import { useContext } from "react";
import userContext from "../utils/UserContext";

const Footer = () => {
  const {user} = useContext(userContext)
    return <h1>This site is developed by {user.name}</h1>;
  };

  export default Footer;