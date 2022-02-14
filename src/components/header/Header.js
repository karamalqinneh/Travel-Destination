import classes from "./Header.module.css";
import logoImage from "../../assets/logo.png";
import Navbar from "../navbar/Navbar";

const Header = () => {
  return (
    <header>
      <div className={classes.headerData}>
        <img src={logoImage} alt="logo" className={classes.img} />
        <h1 className={classes.header}>Travel Destinations</h1>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
