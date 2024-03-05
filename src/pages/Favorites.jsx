import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

// imgs
import account from "../assets/imgs/account-min.svg";
import notebook from "../assets/imgs/notebook.svg";
import gift from "../assets/imgs/gift.svg";
import likeBlack from "../assets/imgs/like-black.svg";
import logOut from "../assets/imgs/logOut.svg";
import cancel from "../assets/imgs/cancel-min.svg";

const fetchData = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/carts/3");
    if (!res.ok) throw new Error("Could not fetch Data!");
    return res.json();
  } catch (error) {
    console.log(error.message);
  }
};

const fetchData2 = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/carts");
    if (!res.ok) throw new Error("Could not fetch Data!");
    return res.json();
  } catch (error) {
    console.log(error.message);
  }
};

const fetchData3 = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products/3");
    if (!res.ok) throw new Error("Could not fetch Data!");
    return res.json();
  } catch (error) {
    console.log(error.message);
  }
};

const fetchData4 = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products/4");
    if (!res.ok) throw new Error("Could not fetch Data!");
    return res.json();
  } catch (error) {
    console.log(error.message);
  }
};

const deleteApi = () => {
  fetch("https://fakestoreapi.com/products", {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((json) => console.log(json));

  alert("it was also deleted from the network in the terminal");
  asd.style.display = "none";
};

const deleteApi2 = () => {
  fetch("https://fakestoreapi.com/carts", {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((json) => console.log(json));

  alert("it was also deleted from the network in the terminal");
  asd2.style.display = "none";
};

const Orders = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);

  useEffect(() => {
    fetchData().then((products) => setData(products.products[0]));
  }, []);

  useEffect(() => {
    fetchData2().then((products) => setData2(products));
  }, []);

  useEffect(() => {
    fetchData3().then((products) => setData3(products));
  }, []);
  console.log(data3);

  useEffect(() => {
    fetchData4().then((products) => setData4(products));
  }, []);

  return (
    <main className="container">
      <div className=" flex gap-8">
        <aside className="w-[313px] h-[1069px ] mt-16 border">
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
              className="w-full flex items-center gap-[18px] mb-8 px-8 py-3 hover:bg-[#ED165F] hover:text-white  transition-all duration-500"
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
              className="w-full flex items-center gap-[18px] mb-8 px-8 py-3 text-white bg-[#ED165F] transition-all duration-500"
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
          <h2 className="text-2xl">My Favorites</h2>
          <div className="mt-8 flex gap-8 max-md:block">
            <div
              id="asd"
              className="relative border px-8 w-[459px] h-[261px] py-[32px] flex justify-center gap-8 max-md:mt-5"
            >
              <div className="flex flex-col items-center ">
                <img
                  width={60}
                  height={60}
                  src={data3.image}
                  alt={data3.description}
                />
              </div>
              <div className="mr-[97px]">
                <h3 className="font-semibold text-xl">{data3.title}</h3>
                <p className="text-[#686868]">Size - EU: 36 US: 5.5</p>
                <h4 className="text-[#ED165F] text-sm">₦{data3.price}</h4>
              </div>
              <div className="flex items-center absolute gap-8 top-[182px] left-8">
                <NavLink
                  to="/Orders"
                  className="border uppercase bg-[#ED165F] px-[33px] py-[11px] text-white text-lg font-extrabold tracking-[2px] rounded-md max-md:text-xs max-md:font-regular max-md:px-2"
                >
                  BUY NOW
                </NavLink>
                <button
                  onClick={deleteApi}
                  className="flex items-center gap-2 uppercase px-[26px] py-[11px] text-lg font-semibold tracking-[2px] rounded-md text-[#ED165F] max-md:text-xs max-md:font-regular"
                >
                  <img src={cancel} alt="cancel" />
                  REMOVE
                </button>
              </div>
            </div>

            <div
              id="asd2"
              className="relative border px-8 w-[459px] h-[261px] py-[32px] flex justify-center gap-8 max-md:mt-5"
            >
              <div className="flex flex-col items-center ">
                <img
                  width={60}
                  height={60}
                  src={data4.image}
                  alt={data4.description}
                />
              </div>
              <div className="mr-[97px]">
                <h3 className="font-semibold text-xl">{data4.title}</h3>
                <p className="text-[#686868]">Size - EU: 36 US: 5.5</p>
                <h4 className="text-[#ED165F] text-sm">₦{data4.price}</h4>
              </div>
              <div className="flex items-center absolute gap-8 top-[182px] left-8">
                <NavLink
                  to="/Orders"
                  className="border uppercase bg-[#ED165F] px-[33px] py-[11px] text-white text-lg font-extrabold tracking-[2px] rounded-md max-md:text-xs max-md:font-regular max-md:px-2"
                >
                  BUY NOW
                </NavLink>
                <button
                  onClick={deleteApi2}
                  className="flex items-center gap-2 uppercase px-[26px] py-[11px] text-lg font-semibold tracking-[2px] rounded-md text-[#ED165F] max-md:text-xs max-md:font-regular"
                >
                  <img src={cancel} alt="cancel" />
                  REMOVE
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Orders;
