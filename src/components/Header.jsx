import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import menu from "../assets/menu.png"
import { useGlobal } from "./Context";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuth, signedOut } = useGlobal();
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
            {isAuth && <span className="capitalize italic font-medium hover:underline transition-all"><Link to="/create">Create a new blog</Link></span>}
          </div>
          {!isAuth ? <button className="btn-pill"><Link to="/login">LogIn</Link></button> : <button className="btn-pill" onClick={signedOut}>Logout</button>}
        </div>
        <img src={menu} className="nav-toggle" style={{ width: "2.5rem" }} onClick={() => setIsOpen(!isOpen)} alt="" />
      </div>
    </>
  );
};

export default Header;
