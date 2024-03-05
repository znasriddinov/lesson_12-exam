import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// imgs
import logo from "../assets/imgs/Logo-min.svg";
import search from "../assets/imgs/search-min.svg";
import user from "../assets/imgs/user-min.svg";
import buy from "../assets/imgs/buy-min.svg";
import like from "../assets/imgs/like-min.svg";

const Navbar = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    setInputValue(event.target.value);
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim() === "") {
      setError(true);
      return;
    }

    console.log("Valid input:", inputValue);
    setInputValue("");
  };

  return (
    <nav>
      <div>
        {error && (
          <div className="container">
            <p className="text-red-500 mb-[-15px] text-sm ml-[950px] max-md:ml-[320px]">
              Please enter a value.
            </p>
          </div>
        )}
        <div className="nav__tittle bg-white h-[70px] px-[150px] py-[23px] flex items-center justify-between max-md:px-2">
          <ul className="flex items-center gap-[61px] max-md:gap-[30px]">
            <li className="font-semibold text-sm transition-all duration-200 hover:text-[#ED165F] hover:border-b border-[#ED165F]">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="font-semibold text-sm transition-all duration-200 hover:text-[#ED165F] hover:border-b border-[#ED165F]">
              <NavLink to="Clothes">Clothes</NavLink>
            </li>
            <li className="font-semibold text-sm transition-all duration-200 hover:text-[#ED165F] hover:border-b border-[#ED165F]">
              <NavLink to="Shoes">Shoes</NavLink>
            </li>
            <li className="font-semibold text-sm transition-all duration-200 hover:text-[#ED165F] hover:border-b border-[#ED165F]">
              <NavLink to="Accessories">Accessories</NavLink>
            </li>
          </ul>
          <NavLink className="max-md:hidden" to="/">
            <img src={logo} alt="logo" />
          </NavLink>
          <div className="nav__tittle-right flex items-cetner gap-10">
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-[22px]"
            >
              <input
                className={`border-b pl-[19px] py-1 ${
                  error ? "border-red-500" : "border-gray-400"
                }`}
                type="search"
                placeholder="Search..."
                value={inputValue}
                onChange={handleChange}
              />

              <button type="submit">
                <img src={search} alt="search" />
              </button>
            </form>
            <div className="imgs flex items-center gap-[30px]">
              <NavLink to="SignIn">
                <img src={user} alt="user" />
              </NavLink>
              <NavLink to="Buy">
                <img src={buy} alt="buy" />
              </NavLink>
              <NavLink to="Favorites">
                <img src={like} alt="like" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
