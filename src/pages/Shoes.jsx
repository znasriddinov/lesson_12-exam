import React from "react";
import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { NavLink } from "react-router-dom";

import like2 from "../assets/imgs/like2-min.svg";
import buy2 from "../assets/imgs/buy2-min.svg";

const fetchData = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) throw new Error("Could not fetch Data!");
    return res.json();
  } catch (error) {
    console.log(error.message);
  }
};

const Shoes = () => {
  const [data, setData] = useState([]);
  const [showProductList, setShowProductList] = useState(data);

  const setLowToHigh = () => {
    const sortedProducts = data.sort((a, b) => a.price - b.price);
    setShowProductList([...sortedProducts]);
  };

  const setHighToLow = () => {
    const reverseSortedProducts = data.sort((a, b) => b.price - a.price);
    setShowProductList([...reverseSortedProducts]);
  };

  useEffect(() => {
    fetchData().then((products) => setData(products));
  }, []);
  console.log(data);

  return (
    <main className="container">
      <h1 className="mt-[88px] font-extrabold text-3xl tracking-[3px]">
        SHOES
      </h1>

      <div className="flex gap-[84px] max-md:gap-10">
        <aside className="mt-[64px] w-[301px] max-md:w-[150px]">
          <h2 className="font-semibold text-xl mb-[15px]">CATEGORY</h2>
          <hr />
          <ul className="mt-[48px]">
            <li className="active:text-[#ED165F] cursor-pointer mb-4 text-[#686868] transition-all">
              All
            </li>
            <li className="active:text-[#ED165F] cursor-pointer mb-4 text-[#686868] transition-all">
              Booties
            </li>
            <li className="active:text-[#ED165F] cursor-pointer mb-4 text-[#686868] transition-all">
              Flats
            </li>
            <li className="active:text-[#ED165F] cursor-pointer mb-4 text-[#686868] transition-all">
              Boots
            </li>
            <li className="active:text-[#ED165F] cursor-pointer mb-4 text-[#686868] transition-all">
              Sandals
            </li>
            <li className="active:text-[#ED165F] cursor-pointer mb-4 text-[#686868] transition-all">
              Sneakers
            </li>
            <li className="active:text-[#ED165F] cursor-pointer mb-4 text-[#686868] transition-all">
              Slides & Slippers
            </li>
            <li className="active:text-[#ED165F] cursor-pointer mb-4 text-[#686868] transition-all">
              Heels
            </li>
            <li className="active:text-[#ED165F] cursor-pointer mb-4 text-[#686868] transition-all">
              Wedges
            </li>
            <li className="active:text-[#ED165F] cursor-pointer mb-4 text-[#686868] transition-all">
              Mules
            </li>
            <li className="active:text-[#ED165F] cursor-pointer mb-4 text-[#686868] transition-all">
              Party shoes
            </li>
            <li className="active:text-[#ED165F] cursor-pointer mb-4 text-[#686868] transition-all">
              Vegan shoes
            </li>
            <li className="active:text-[#ED165F] cursor-pointer mb-4 text-[#686868] transition-all">
              Oxfords
            </li>
          </ul>

          <h2 className="text-xl font-semibold mb-[15px] mt-[64px]">
            SIZE -<span className="text-[#00000080]">EU/US</span>
          </h2>
          <hr className="w-full" />
          <ul className="grid grid-cols-3 mt-[32px] text-sm">
            <li className="border flex rounded-sm justify-center py-[7px] w-[75px] mb-4 border-black cursor-pointer hover:bg-[#ED165F] transition-all duration-500 hover:text-white max-md:w-[30px]">
              35.5/5
            </li>
            <li className="border flex rounded-sm justify-center py-[7px] w-[75px] mb-4 border-black cursor-pointer hover:bg-[#ED165F] transition-all duration-500 hover:text-white max-md:w-[30px]">
              36/5.5
            </li>
            <li className="border flex rounded-sm justify-center py-[7px] w-[75px] mb-4 border-black cursor-pointer hover:bg-[#ED165F] transition-all duration-500 hover:text-white max-md:w-[30px]">
              37.5/6.5
            </li>
            <li className="border flex rounded-sm justify-center py-[7px] w-[75px] mb-4 border-black cursor-pointer hover:bg-[#ED165F] transition-all duration-500 hover:text-white max-md:w-[30px]">
              38/7
            </li>
            <li className="border flex rounded-sm justify-center py-[7px] w-[75px] mb-4 border-black cursor-pointer hover:bg-[#ED165F] transition-all duration-500 hover:text-white max-md:w-[30px]">
              39/7.5
            </li>
            <li className="border flex rounded-sm justify-center py-[7px] w-[75px] mb-4 border-black cursor-pointer hover:bg-[#ED165F] transition-all duration-500 hover:text-white max-md:w-[30px]">
              39.5/8
            </li>
            <li className="border flex rounded-sm justify-center py-[7px] w-[75px] mb-4 border-black cursor-pointer hover:bg-[#ED165F] transition-all duration-500 hover:text-white max-md:w-[30px]">
              40/7.5
            </li>
            <li className="border flex rounded-sm justify-center py-[7px] w-[75px] mb-4 border-black cursor-pointer hover:bg-[#ED165F] transition-all duration-500 hover:text-white max-md:w-[30px]">
              41/9.5
            </li>
            <li className="border flex rounded-sm justify-center py-[7px] w-[75px] mb-4 border-black cursor-pointer hover:bg-[#ED165F] transition-all duration-500 hover:text-white max-md:w-[30px]">
              41.5/10
            </li>
            <li className="border flex rounded-sm justify-center py-[7px] w-[75px] mb-4 border-black cursor-pointer hover:bg-[#ED165F] transition-all duration-500 hover:text-white max-md:w-[30px]">
              42/10.5
            </li>
            <li className="border flex rounded-sm justify-center py-[7px] w-[75px] mb-4 border-black cursor-pointer hover:bg-[#ED165F] transition-all duration-500 hover:text-white max-md:w-[30px]">
              42/11
            </li>
            <li className="border flex rounded-sm justify-center py-[7px] w-[75px] mb-4 border-black cursor-pointer hover:bg-[#ED165F] transition-all duration-500 hover:text-white max-md:w-[30px]">
              43/12
            </li>
          </ul>

          <h2 className="text-xl font-semibold mb-[15px] mt-[64px]">COLOR</h2>
          <hr />
          <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-[7px] text-sm">
              <button className="bg-[#F3ECDB] w-8 h-8 rounded-sm"></button>
              Beige
            </div>
            <div className="flex items-center gap-[7px] text-sm">
              <button className="bg-[#465BA3] w-8 h-8 rounded-sm"></button>
              Blue
            </div>
            <div className="flex items-center gap-[7px] text-sm">
              <button className="bg-black w-8 h-8 rounded-sm"></button>
              Black
            </div>
            <div className="flex items-center gap-[7px] text-sm">
              <button className="bg-[#F07B4E] w-8 h-8 rounded-sm"></button>
              Orange
            </div>
            <div className="flex items-center gap-[7px] text-sm">
              <button className="bg-[#41854D] w-8 h-8 rounded-sm"></button>
              Green
            </div>
            <div className="flex items-center gap-[7px] text-sm">
              <button className="bg-[#665147] w-8 h-8 rounded-sm"></button>
              Brown
            </div>
            <div className="flex items-center gap-[7px] text-sm">
              <button className="bg-[#893D88] w-8 h-8 rounded-sm"></button>
              Purple
            </div>
            <div className="flex items-center gap-[7px] text-sm">
              <button className="bg-[#F3B121] w-8 h-8 rounded-sm"></button>
              Gold
            </div>
            <div className="flex items-center gap-[7px] text-sm">
              <button className="bg-[#CAC1B8] w-8 h-8 rounded-sm"></button>
              Taupe
            </div>
            <div className="flex items-center gap-[7px] text-sm">
              <button className="bg-white w-8 h-8 rounded-sm border"></button>
              White
            </div>
            <div className="flex items-center gap-[7px] text-sm">
              <button className="bg-[#F2A1B1] w-8 h-8 rounded-sm"></button>
              Pink
            </div>
            <div className="flex items-center gap-[7px] text-sm">
              <button className="bg-[#D23C47] w-8 h-8 rounded-sm"></button>
              Red
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-[15px] mt-[64px]">PRICE</h2>
          <hr />
          <form className="mt-8 text-sm ">
            <label className="flex items-center gap-4 mb-4 font-semibold">
              <input
                type="checkbox"
                className="w-[27px] h-[27px] cursor-pointer"
              />
              ₦0 - ₦10,000
            </label>
            <label className="flex items-center gap-4 mb-4 font-semibold">
              <input
                type="checkbox"
                className="w-[27px] h-[27px] cursor-pointer"
              />
              ₦10,000 - ₦20,000
            </label>
            <label className="flex items-center gap-4 mb-4 font-semibold">
              <input
                type="checkbox"
                className="w-[27px] h-[27px] cursor-pointer"
              />
              ₦20,000 - ₦50,000
            </label>
            <label className="flex items-center gap-4 mb-4 font-semibold">
              <input
                type="checkbox"
                className="w-[27px] h-[27px] cursor-pointer"
              />
              ₦50,000 - ₦100,000
            </label>
            <label className="flex items-center gap-4 mb-4 font-semibold">
              <input
                type="checkbox"
                className="w-[27px] h-[27px] cursor-pointer"
              />
              ₦100,000 - ₦200,000
            </label>
            <label className="flex items-center font-semibold gap-2 max-md:block">
              <input
                className="border py-1 px-2 w-[61px] h-[27px]"
                type="number"
                placeholder="₦"
              />
              to
              <input
                className="border py-1 px-2 w-[61px] h-[27px]"
                type="number"
                placeholder="₦"
              />
              <button className="border py-1 px-[14px] ml-3 bg-[#ED165F] text-white rounded-sm">
                Apply
              </button>
            </label>
          </form>
        </aside>

        <section>
          <div className="flex justify-center gap-5 border w-[330px] ml-[770px] py-2.5 mb-[15px] max-md:w-[200px] max-md:block max-md:ml-[300px]">
            <button onClick={setHighToLow}>Price: High to Low</button>
            <button onClick={setLowToHigh}>Price: Low to High</button>
          </div>

          <hr />

          <Carousel>
            <Carousel.Item interval={4000}>
              <div className="grid grid-cols-3 gap-[27px] text-center mt-[34px] max-md:grid-cols-1">
                {data?.map((product) => (
                  <div
                    key={product.id}
                    className="hover:opacity-90 hover:brightness-50 hover:shadow-2xl relative p-2 mb-[101px]"
                  >
                    <img
                      className="w-[297px] h-[500px] mx-auto py-5 cursor-pointer"
                      src={product.image}
                      alt={product.title}
                    />
                    <p className="mt-[32px] ">{product.title}</p>
                    <h4 className="mt-4">
                      <span>₦</span>
                      {product.price}
                    </h4>
                    <div className="flex justify-center items-center gap-2 mt-3">
                      <NavLink
                        to="/Favorites"
                        className="shadow px-[13px] py-[16px]"
                      >
                        <img src={like2} alt="like" />
                      </NavLink>
                      <NavLink
                        to="/Buy"
                        className="flex items-center gap-[11px] shadow py-[11px] rounded-[2px] px-[30px]"
                      >
                        ADD TO CART
                        <img src={buy2} alt="buy" />
                      </NavLink>
                    </div>
                  </div>
                ))}
              </div>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <div className="grid grid-cols-3 gap-[27px] text-center mt-[34px] max-md:grid-cols-1">
                {data?.map((product) => (
                  <div
                    key={product.id}
                    className="hover:opacity-90 hover:brightness-50 hover:shadow-2xl relative p-2 mb-[101px]"
                  >
                    <img
                      className="w-[297px] h-[500px] mx-auto py-5 cursor-pointer"
                      src={product.image}
                      alt={product.title}
                    />
                    <p className="mt-[32px] ">{product.title}</p>
                    <h4 className="mt-4">
                      <span>₦</span>
                      {product.price}
                    </h4>
                    <div className="flex justify-center items-center gap-2 mt-3">
                      <NavLink
                        to="/Favorites"
                        className="shadow px-[13px] py-[16px]"
                      >
                        <img src={like2} alt="like" />
                      </NavLink>
                      <NavLink
                        to="/Buy"
                        className="flex items-center gap-[11px] shadow py-[11px] rounded-[2px] px-[30px]"
                      >
                        ADD TO CART
                        <img src={buy2} alt="buy" />
                      </NavLink>
                    </div>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          </Carousel>
        </section>
      </div>
    </main>
  );
};

export default Shoes;
