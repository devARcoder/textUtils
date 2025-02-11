import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <>
      <header
        className='flex justify-between items-center bg-black text-white p-3 border border-black'
      >
        <div>
          <h1 className="text-1xl md:text-2xl font-bold ">{props.title}</h1>
        </div>
        <nav className="">
          <ul className="flex justify-center items-center space-x-4 md:text-[18px] text-[14px]">
            <li>
              <Link className="hover:text-gray-300 hover:font-semibold" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-300 hover:font-semibold" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-300 hover:font-semibold" to="/">
                Services
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-300 hover:font-semibold" to="/">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hidden md:flex justify-center items-center space-x-4 text-[18px]">
          {/* <div
            class='form-check form-switch'
          >
            <input
              onClick={props.toggleMode}
              class="form-check-input"
              type="checkbox"
              id="checkMode"
            />
            <label class="form-check-label" htmlFor="flexSwitchCheckDefault">
              Enable DarkMode
            </label>
          </div> */}
          <p>Login</p>
          <p>SignUP</p>
        </div>
      </header>
    </>
  );
}

Navbar.prototype = {
  title: PropTypes.string.isRequired,
};

// Navbar.defaultProps = {
//     title: 'Razzaq'
// }
