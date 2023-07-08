import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
      <nav className="NavContainer">
         <div className="NavItem">ShopArt...</div>
         <Link to="/signup" className="NavItem1 decoration">Signup</Link>
      </nav>
    );
  };

  export default Navbar;