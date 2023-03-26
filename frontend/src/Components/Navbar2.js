import React from "react";
import { Link } from "react-router-dom";
import "../Styles/navbar.css"

function Navbarpage2() {
  return (
   <nav className="nav-bar">
    <div className="nav1">
      <a href="#">Browse</a>
      <input type="text" id="search_book" placeholder="Welcome to book store 😊" style={{ border: "none", width: "220px" }}/>
    </div>
    <h3>Readbooks</h3>
    <div className="icon-about">
      <i className="material-icons">
        <span className="material-icons-outlined">Account_circle</span>
      </i>
      <Link to="/" className="btn btn-dark text-white"  style={{fontSize: '12px', padding: '5px', textAlign: 'center'}} >Ke halaman awal</Link>
    </div>
   </nav>
   
  );
}

export default Navbarpage2;