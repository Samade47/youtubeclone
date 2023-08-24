import NavStyle from "./Style";
import { Humberger, Youtube, SearchIcon, Dots, User } from "./index";

const NavBar = () => {
  return (
    <NavStyle>
      <div className="humberger">
        <Humberger />
      </div>
      <div className="logo">
        <Youtube />
      </div>
      <div className="search">
        <div className="searchBar">
          <label htmlFor="search">
            <SearchIcon />
          </label>
          <input type="text" name="search" id="search" />
          <button>
            <SearchIcon />
          </button>
        </div>
      </div>
      <div className="other">
        <button className="threeDots">
          <Dots />
        </button>
        <button className="LoginBtn" >
          <User /> Login
        </button>
      </div>
    </NavStyle>
  );
};

export default NavBar;