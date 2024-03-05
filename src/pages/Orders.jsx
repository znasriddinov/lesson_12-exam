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
    const res = await fetch("https://fakestoreapi.com/carts/3");
    if (!res.ok) throw new Error("Could not fetch Data!");
    return res.json();
  } catch (error) {
    console.log(error.message);
  }
};

const fetchData2 = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/carts/3");
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

const Orders = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);

  useEffect(() => {
    fetchData().then((products) => setData(products.products[0]));
  }, []);
  console.log(data);

  useEffect(() => {
    fetchData2().then((products) => setData2(products));
  }, []);
  console.log(data2);

  useEffect(() => {
    fetchData3().then((products) => setData3(products));
  }, []);
  console.log(data3);

  return (
    <main>
      <div className="container flex gap-8">
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
              className="w-full flex items-center gap-[18px] mb-8 px-8 py-3 hover:bg-[#ED165F] hover:text-white  transition-all duration-500"
            >
              <img src={notebook} alt="notebook" />
              Address Book
            </NavLink>
            <NavLink
              to="/Orders"
              className="w-full flex items-center gap-[18px] mb-8 px-8 py-3 text-white bg-[#ED165F] transition-all duration-500"
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
          <h2 className="text-2xl">My Orders</h2>
          <div className="mt-8 flex max-md:block">
            <div className="border max-md:w-full max-md:mt-8 px-8 w-[459px] h-[192px] py-[34px] flex justify-center gap-8">
              <div className="flex flex-col items-center">
                <img
                  width={60}
                  height={60}
                  src={data3.image}
                  alt={data3.description}
                />
                <p className="bg-[#08B727] py-[5px] w-[86px] flex justify-center text-white mt-[21px]">
                  Delivered
                </p>
              </div>
              <div className="mr-[97px]">
                <h3 className="font-semibold text-xl max-md:text-xs">
                  {data3.title}
                </h3>
                <p className="text-[#686868] mt-2 max-md:text-xs">
                  Size - EU: 36 US: 5.5
                </p>
                <h4 className="text-[#ED165F] text-sm max-md:text-xs">
                  ₦{data3.price}
                </h4>
                <h4>{data.quantity}</h4>
                <h5 className="text-xs max-md:text-xs">{data2.date}</h5>
              </div>
            </div>
            <div className="border max-md:w-full max-md:mt-8 px-8 w-[224px]">
              <h3 className="mt-[35px] font-semibold">Payment details</h3>
              <p className="mt-1 text-[#686868] text-xs">
                Item’s total - ₦ {data3.price}
              </p>
              <p className=" text-[#686868] mt-[3px] text-xs" id="delivery">
                Delivery fee - ₦ 2,000
              </p>
              <p className=" text-[#686868] mt-[3px] text-xs">
                TOTAL - ₦ 2059.99
              </p>
            </div>
            <div className="border max-md:w-full max-md:mt-8 px-8 w-[284px]">
              <h3 className="font-semibold mt-[35px]">Delivery method</h3>
              <p className="text-xs text-[#686868]">Door delivery</p>
              <h3 className="font-semibold mt-5">Shipping address</h3>
              <p className="text-xs text-[#686868]">
                Ayokunle Oriolowo 4, Barnawa Close, Barnawa Kaduna.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-8 ">
            <button className="border uppercase bg-[#ED165F] px-[47px] py-[11px] text-white mt-8 font-extrabold tracking-[2px] rounded-md">
              ORDER AGAIN
            </button>
            <button className="border uppercase px-[26px] py-[11px] text-lg mt-8 font-extrabold tracking-[2px] rounded-md">
              REQUEST A RETURN
            </button>
          </div>
        </section>
      </div>
      {/* <button className="border uppercase bg-[#ED165F] px-[47px] py-[11px] text-white mt-8 ml-[331px] font-extrabold tracking-[2px] rounded-md">
        ADD NEW ADDRESS
      </button> */}
    </main>
  );
};

export default Orders;
