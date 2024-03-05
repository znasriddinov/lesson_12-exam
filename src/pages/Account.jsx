import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// imgs
import account from "../assets/imgs/account-min.svg";
import notebook from "../assets/imgs/notebook.svg";
import gift from "../assets/imgs/gift.svg";
import likeBlack from "../assets/imgs/like-black.svg";
import logOut from "../assets/imgs/logOut.svg";

let haveEmail = JSON.parse(localStorage.getItem("email"));
let havePassword = JSON.parse(localStorage.getItem("password"));
let haveName = JSON.parse(localStorage.getItem("First name"));
let haveName2 = JSON.parse(localStorage.getItem("Last name"));
let haveEmail2 = JSON.parse(localStorage.getItem("email2"));
let havePassword2 = JSON.parse(localStorage.getItem("password2"));

const fetchData = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/users/2");
    if (!res.ok) throw new Error("Could not fetch Data!");
    return res.json();
  } catch (error) {
    console.log(error.message);
  }
};

const Account = () => {
  const [name, setName] = useState("");
  const [name2, setName2] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");

  const handleChange = (e) => {
    e.preventDefault();

    if (
      name.trim() !== "" &&
      name2.trim() !== "" &&
      email.trim() !== "" &&
      date.trim() !== ""
    ) {
      alert("The changes saved successful!");
    } else {
      alert("enter input values!");
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);

    console.log(e.target.value);

    localStorage.setItem("email", JSON.stringify(e.target.value));
  };

  const handleDate = (e) => {
    setDate(e.target.value);

    localStorage.setItem("date", JSON.stringify(e.target.value));
  };

  const handleName = (e) => {
    setName(e.target.value);

    localStorage.setItem("First Name", JSON.stringify(e.target.value));
  };

  const handleName2 = (e) => {
    setName2(e.target.value);

    localStorage.setItem("Last Name", JSON.stringify(e.target.value));
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then((products) => setData(products));
  }, []);
  console.log(data);

  return (
    <main className="container">
      <div className=" flex gap-8">
        <aside className="w-[313px] mt-16 border">
          <h1 className="font-extrabold text-center pt-8">ACCOUNT DASHBOARD</h1>
          <div>
            <NavLink
              to="/Account"
              className="w-full flex items-center gap-[18px] mb-8 bg-[#ED165F] px-8 py-3 mt-[48px] text-white"
            >
              <img src={account} alt="account" />
              Account Information
            </NavLink>
            <NavLink
              to="/Address"
              className="w-full flex items-center gap-[18px] mb-8 px-8 py-3 hover:bg-[#ED165F] hover:text-white transition-all duration-500"
            >
              <img src={notebook} alt="notebook" />
              Address Book
            </NavLink>
            <NavLink
              to="/Orders"
              className="w-full flex items-center gap-[18px] mb-8 px-8 py-3 hover:bg-[#ED165F] hover:text-white transition-all duration-500"
            >
              <img src={gift} alt="gift" />
              My Orders
            </NavLink>
            <NavLink
              to="/Favorites"
              className="w-full flex items-center gap-[18px] mb-8 px-8 py-3 hover:bg-[#ED165F] hover:text-white transition-all duration-500"
            >
              <img src={likeBlack} alt="likeBlack" />
              My Favorites
            </NavLink>
          </div>
          <div className="flex justify-center mt-[450px]">
            <button className="flex items-center gap-4 font-semibold text-[#ED165F]">
              <img src={logOut} alt="logOut" />
              SIGN OUT
            </button>
          </div>
        </aside>

        <section className="mt-[92px] w-full">
          <h2 className="text-2xl">User Information</h2>
          <form className="border px-16 mt-8 h-[902px]">
            <div className="mt-[58px] text-sm">
              First name
              <input
                type="text"
                value={name}
                onChange={handleName}
                className="border mt-4 rounded-md h-[60px] w-[350px] px-1 block px-2"
                placeholder="john"
              />
            </div>
            <div className="mt-8 text-sm">
              Last name
              <input
                type="text"
                value={name2}
                onChange={handleName2}
                className="border mt-4 rounded-md h-[60px] w-[350px] px-1 block px-2"
                placeholder="doe"
              />
            </div>
            <div className="mt-8 text-sm">
              Email
              <input
                type="text"
                value={email}
                onChange={handleEmail}
                className="border mt-4 rounded-md h-[60px] w-[350px] px-1 block px-2"
                placeholder={data.email}
              />
            </div>
            <div className="mt-8 text-sm">
              Gender
              <select className="border mt-4 rounded-md h-[60px] w-[350px] px-1 block px-2">
                <option value=""></option>
                <option value="man">Man</option>
                <option value="woman">Woman</option>
              </select>
            </div>
            <div className="mt-8 text-sm">
              Date of birth
              <input
                type="date"
                value={date}
                onChange={handleDate}
                className="border mt-4 rounded-md h-[60px] w-[350px] px-1 block px-2"
              />
            </div>
            <h4 className="mt-8 font-semibold text-[#ED165F]">
              Change password
            </h4>
            <label className="mt-[33px] cursor-pointer font-semibold">
              <input type="checkbox" className="border mt-4 rounded-lg mr-4" />
              Newsletter subsciption
            </label>
          </form>
        </section>
      </div>
      <button
        onClick={handleChange}
        className="border uppercase bg-[#ED165F] px-[47px] py-[11px]  text-white mt-8 ml-[280px] font-extrabold tracking-[2px] rounded-md"
      >
        save changes
      </button>
    </main>
  );
};

export default Account;
