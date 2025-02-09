import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <>
      <header
        className={`flex justify-between items-center bg-${props.mode} text-${props.mode} p-3 border border-black`}
      >
        <div className={`text-${props.mode==='white'?'black':'white'}`}>
          <h1  className="text-1xl md:text-2xl font-bold ">
            {props.title}
          </h1>
        </div>
        <nav  className="">
          <ul className="flex justify-center items-center space-x-4 md:text-[18px] text-[14px]">
            <li>
              <a className="hover:text-gray-300 hover:font-semibold" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-gray-300 hover:font-semibold" href="/">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-gray-300 hover:font-semibold" href="/">
                Services
              </a>
            </li>
            <li>
              <a className="hover:text-gray-300 hover:font-semibold" href="/">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div
          
          className="hidden md:flex justify-center items-center space-x-4 text-[18px]"
        >
          <div class={`form-check form-switch text-${props.mode==='white'?'black':'white'}`}>
            <input onClick={props.toggleMode}
              class="form-check-input"
              type="checkbox"
              id="checkMode"
            />
            <label class="form-check-label" htmlFor="flexSwitchCheckDefault">
              Enable DarkMode
            </label>
          </div>
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
