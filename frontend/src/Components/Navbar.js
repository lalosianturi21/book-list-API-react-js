import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Styles/navbar.css"

function Navbarpage() {
    const logout = () => {
        localStorage.clear();
        window.location.reload();
    }
  return (
   <nav className="nav-bar">
    <div className="nav1">
      <a href="" >Browse</a>
      <input type="text" id="search_book" placeholder="Welcome to book store 😊" style={{ border: "none", width: "220px" }}/>
    </div>
    <h3>Readbooks</h3>
    <div className="icon-about">
      <i className="material-icons">
        <span className="material-icons-outlined">Account_circle</span>
      </i>
      <a onClick={logout} className="btn btn-dark text-white"  style={{fontSize: '12px', padding: '5px', textAlign: 'center'}} >Log Out</a>
    </div>
   </nav>
   
  );
}

export default Navbarpage;