import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import menu from "../assets/menu.png"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="Navbar">
        <div className="navbar-logo">
            <h1><Link to={'/'} >Blog.</Link></h1>
        </div>
        <div className={`navbar-items ${isOpen && "open"}`}>
            <div>
                <span><Link to="/">Home</Link></span>
                <span><Link to="/blog">Blogs</Link></span>
            </div>
            <button className="btn"><Link to="/login">LogIn</Link></button>
        </div>
        <img src={menu} className="nav-toggle" style={{width: "2.5rem"}} onClick={()=> setIsOpen(!isOpen)} alt="" />
      </div>  
    </>
  );
};

export default Header;
