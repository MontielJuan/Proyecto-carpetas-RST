import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

const Header = ({ title = "Page Title" }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid pr-5">
        <div>
          <Link className="btn btn-dark mr-3" to="/data">
            Datos
          </Link>
          <Link className="btn btn-dark mr-3" to="/almacen">
            Almacen
          </Link>
          <button className="btn btn-danger mr-3" onClick={() => auth().signOut()}>
            Logout
          </button>
        </div>
        <h3>{title}</h3>
      </div>
    </nav>
  );
};

export default Header;
