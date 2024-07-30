import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" aria-disabled="true">
                Contact
              </Link>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

//Propstypes
Navbar.propTypes = {
  title: PropTypes.string,
  abouttex: PropTypes.string,
};

//Agar mai koi default props set nai krna chahta tou mai ye kr skta hn k mai isrequired use kr ln jo mujy error dega agar mai wo argument nai dn ga tou
//Ye sirf tab error dega jab maine default props nai diye

// Navbar.propTypes={
//   title:PropTypes.string.isRequired,
//   abouttex:PropTypes.string
// }

// Navbar.defaultProps={
//   title:"Here is your title",
//   abouttex:"Here is about us"
// }

//Default props
// Navbar.defaultProps = {
//   title: "Here is your title",
//   abouttex: "Here is about us",
// };
