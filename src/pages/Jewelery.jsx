import React from "react";
import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { NavLink } from "react-router-dom";

import like2 from "../assets/imgs/like2-min.svg";
import buy2 from "../assets/imgs/buy2-min.svg";

const fetchData = async () => {
  try {
    const res = await fetch(
      "https://fakestoreapi.com/products/category/jewelery"
    );
    if (!res.ok) throw new Error("Could not fetch Data!");
    return res.json();
  } catch (error) {
    console.log(error.message);
  }
};

const Jewelery = () => {
  const [data, setData] = useState([]);
  const [showProductList, setShowProductList] = useState(data);

  useEffect(() => {
    fetchData().then((products) => setData(products));
  }, []);

  const setLowToHigh = () => {
    const sortedProducts = data.sort((a, b) => a.price - b.price);
    setShowProductList([...sortedProducts]);
  };

  const setHighToLow = () => {
    const reverseSortedProducts = data.sort((a, b) => b.price - a.price);
    setShowProductList([...reverseSortedProducts]);
  };

  return (
    <main className="container">
      <h1 className="mt-[88px] font-extrabold text-3xl tracking-[3px]">
        Accessoris/Jewelery
      </h1>

      <div className="flex gap-[84px]">
        <aside className="mt-[64px] w-[301px]">
          <h2 className="font-semibold text-xl mb-[15px]">CATEGORY</h2>
          <hr />
          <ul className="mt-[48px]">
            <NavLink
              to="/Accessories"
              className="active:text-[#ED165F] cursor-pointer mb-4 text-[#686868] transition-all"
            >
              All
            </NavLink>
            <li className="active:text-[#ED165F] cursor-pointer mt-4 mb-4 text-[#686868] transition-all">
              Facemask
            </li>
            <li className="active:text-[#ED165F] cursor-pointer mb-4 text-[#686868] transition-all">
              Jewelry
            </li>
            <li className="active:text-[#ED165F] cursor-pointer mb-4 text-[#686868] transition-all">
              Watches
            </li>
            <li className="active:text-[#ED165F] cursor-pointer mb-4 text-[#686868] transition-all">
              Hair accessories
            </li>
            <li className="active:text-[#ED165F] cursor-pointer mb-4 text-[#686868] transition-all">
              Belts
            </li>
            <li className="active:text-[#ED165F] cursor-pointer mb-4 text-[#686868] transition-all">
              Backpacks
            </li>
            <li className="active:text-[#ED165F] cursor-pointer mb-4 text-[#686868] transition-all">
              Handbags
            </li>
            <li className="active:text-[#ED165F] cursor-pointer mb-4 text-[#686868] transition-all">
              Fragrances
            </li>
            <li className="active:text-[#ED165F] cursor-pointer mb-4 text-[#686868] transition-all">
              Skirts
            </li>
            <li className="active:text-[#ED165F] cursor-pointer mb-4 text-[#686868] transition-all">
              Sunglasses & eyewears
            </li>
            <li className="active:text-[#ED165F] cursor-pointer mb-4 text-[#686868] transition-all">
              Socks
            </li>
            <li className="active:text-[#ED165F] cursor-pointer mb-4 text-[#686868] transition-all">
              Hats and beanies
            </li>
            <li className="active:text-[#ED165F] cursor-pointer mb-4 text-[#686868] transition-all">
              Gloves
            </li>
          </ul>

          <h2 className="text-xl font-semibold mb-[15px] mt-[64px]">SIZE</h2>
          <hr className="w-full" />
          <ul className="grid grid-cols-4 mt-[32px]">
            <li className="border flex justify-center py-[7px] w-[54px] mb-4 border-black cursor-pointer hover:bg-[#ED165F] transition-all duration-500 hover:text-white">
              XS
            </li>
            <li className="border flex justify-center py-[7px] w-[54px] mb-4 border-black cursor-pointer hover:bg-[#ED165F] transition-all duration-500 hover:text-white">
              S
            </li>
            <li className="border flex justify-center py-[7px] w-[54px] mb-4 border-black cursor-pointer hover:bg-[#ED165F] transition-all duration-500 hover:text-white">
              S/M
            </li>
            <li className="border flex justify-center py-[7px] w-[54px] mb-4 border-black cursor-pointer hover:bg-[#ED165F] transition-all duration-500 hover:text-white">
              M
            </li>
            <li className="border flex justify-center py-[7px] w-[54px] mb-4 border-black cursor-pointer hover:bg-[#ED165F] transition-all duration-500 hover:text-white">
              M/L
            </li>
            <li className="border flex justify-center py-[7px] w-[54px] mb-4 border-black cursor-pointer hover:bg-[#ED165F] transition-all duration-500 hover:text-white">
              L
            </li>
            <li className="border flex justify-center py-[7px] w-[54px] mb-4 border-black cursor-pointer hover:bg-[#ED165F] transition-all duration-500 hover:text-white">
              XL
            </li>
            <li className="border flex justify-center py-[7px] w-[54px] mb-4 border-black cursor-pointer hover:bg-[#ED165F] transition-all duration-500 hover:text-white">
              6
            </li>
            <li className="border flex justify-center py-[7px] w-[54px] mb-4 border-black cursor-pointer hover:bg-[#ED165F] transition-all duration-500 hover:text-white">
              7
            </li>
            <li className="border flex justify-center py-[7px] w-[54px] mb-4 border-black cursor-pointer hover:bg-[#ED165F] transition-all duration-500 hover:text-white">
              8
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
            <label className="flex items-center font-semibold gap-2">
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
          <div className="flex justify-center gap-5 border w-[330px] ml-[770px] py-2.5 mb-[15px] max-md:w-[200px] max-md:block max-md:ml-[100px] max-md:mt-6">
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
          ;
        </section>
      </div>
    </main>
  );
};

export default Jewelery;
