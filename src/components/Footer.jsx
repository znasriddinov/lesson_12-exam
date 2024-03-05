import { useEffect, useState } from "react";
import React from "react";
import logo from "../assets/imgs/Logo-min.svg";
import facebook from "../assets/imgs/facebook-min.svg";
import twitter from "../assets/imgs/twitter-min.svg";
import instagram from "../assets/imgs/instagram-min.svg";

const Footer = () => {
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
    <footer className="h-[200px] flex items-center bg-[#F5F5F5] mt-[129px]">
      <div className="container">
        <div className="footer__tittle px-[55px] grid grid-cols-5 justify-center items-center max-md:grid-cols-4 max-md:px-0">
          <img className="max-md:ml-[-100px]" src={logo} alt="logo" />
          <ul className="max-md:ml-[-100px]">
            <li className="mb-1 max-md:text-sm">About Us</li>
            <li className="mb-1 max-md:text-sm">Contact</li>
            <li className="mb-1 max-md:text-sm">Terms & Conditions</li>
          </ul>

          <div className="max-md:ml-[-80px]">
            <label className="flex items-center gap-[27px] mb-[11px] max-md:text-sm max-md:gap-2">
              <img src={facebook} alt="facebook" />
              Facebook
            </label>
            <label className="flex items-center gap-[27px] mb-[11px] max-md:text-sm max-md:gap-2">
              <img src={twitter} alt="twitter" />
              Twitter
            </label>
            <label className="flex items-center gap-[27px] mb-[11px] max-md:text-sm max-md:gap-2">
              <img src={instagram} alt="instagram " />
              Instagram
            </label>
          </div>

          <form className="max-md:ml-[-100px]" onSubmit={handleSubmit}>
            <h3 className="max-md:text-sm">Subscribe to our newsletter</h3>
            {error && (
              <p className="text-red-500 text-sm mt-1">Please enter email.</p>
            )}
            <label className="mt-2 flex items-center border rounded-md">
              <input
                type="email"
                placeholder="Email Address"
                className={`px-[20px] py-[14px] rounded-none max-md:px-2 max-md:py-2 ${
                  error ? "border-red-500" : "border-gray-400"
                }`}
                value={inputValue}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="bg-[#ED165F] px-[23px] py-[15px] border-none rounded-r-md text-white font-semibold max-md:px-3 max-md:py-2"
              >
                OK
              </button>
            </label>
          </form>

          <div className="text-md ml-[70px] max-md:flex max-md:w-screen max-md:mt-5 max-md:ml-[-100px]">
            <h4 className="mb-2 max-md:text-sm">
              497 Evergeen Rd. Roseville, CA 95673
            </h4>
            <h4 className="mb-2 max-md:text-sm">+44 345 678 903</h4>
            <h4 className="mb-2 max-md:text-sm">adobexd@mail.com</h4>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
