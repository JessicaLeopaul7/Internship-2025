import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../assets/images/logo.jpg";
import SearchBar from "./SearchBar.tsx";

import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <>
      <div className="header">
        <button className="menu-btn">
          <RxHamburgerMenu size={20} />
        </button>
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <div className="search-bar">
          <SearchBar />
        </div>
      </div>
    </>
  );
};

export default Header;
