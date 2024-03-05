import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

// imgs
import account from "../assets/imgs/account-min.svg";
import notebook from "../assets/imgs/notebook.svg";
import gift from "../assets/imgs/gift.svg";
import likeBlack from "../assets/imgs/like-black.svg";
import logOut from "../assets/imgs/logOut.svg";

const fetchData = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/users/2");
    if (!res.ok) throw new Error("Could not fetch Data!");
    return res.json();
  } catch (error) {
    console.log(error.message);
  }
};

const deleteApi = () => {
  fetch("https://fakestoreapi.com/users/2", {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((json) => console.log(json));

  alert("it was also deleted from the network in the terminal");
  asd.style.display = "none";
};

const Addres = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);

  useEffect(() => {
    fetchData().then((products) => setData(products));
  }, []);
  console.log(data);

  useEffect(() => {
    fetchData().then((products) => setData2(products.address));
  }, []);
  console.log(data2);

  useEffect(() => {
    fetchData().then((products) => setData3(products.name));
  }, []);
  console.log(data3);

  return (
    <main className="container">
      <div className=" flex gap-8">
        <aside className="w-[313px] mt-16 border">
          <h1 className="font-extrabold text-center pt-8">ACCOUNT DASHBOARD</h1>
          <div>
            <NavLink
              to="/Account"
              className="w-full flex items-center gap-[18px] mb-8 hover:bg-[#ED165F] hover:text-white px-8 py-3 mt-[48px]"
            >
              <img src={account} alt="account" />
              Account Information
            </NavLink>
            <NavLink
              to="/Address"
              className="w-full flex items-center gap-[18px] mb-8 px-8 py-3 bg-[#ED165F] text-white transition-all duration-500"
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
          <div className="flex justify-center mt-[539px] pb-16  ">
            <button className="flex items-center gap-4 font-semibold text-[#ED165F]">
              <img src={logOut} alt="logOut" />
              SIGN OUT
            </button>
          </div>
        </aside>

        <section className="mt-[90px] w-full">
          <h2 className="text-2xl">Address Book</h2>
          <div
            id="asd"
            className="border mt-8 px-[39px] h-[238px] flex justify-between"
          >
            <div>
              <h3 className="mt-8 mb-4 font-semibold text-xl">
                Default Shipping Address
              </h3>
              <p className="text-sm mb-1">
                {data3.firstname} {data3.lastname}
              </p>
              <p className="text-sm mb-1">{data2.street}</p>
              <p className="text-sm mb-1">Kaduna, Kaduna</p>
              <p className="text-sm mb-1">{data2.city}</p>
              <p className="text-sm mb-1">{data.phone}</p>
            </div>
            <div className="flex items-end gap-[65px] pb-8">
              <button className="text-[#ED165F] font-bold text-sm">Edit</button>
              <button
                onClick={deleteApi}
                className="text-[#ED165F] font-bold text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        </section>
      </div>
      <button className="border uppercase bg-[#ED165F] px-[47px] py-[11px] text-white mt-8 ml-[280px] font-extrabold tracking-[2px] rounded-md">
        ADD NEW ADDRESS
      </button>
    </main>
  );
};

export default Addres;
