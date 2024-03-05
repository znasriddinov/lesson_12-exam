import React from "react";
import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { NavLink } from "react-router-dom";

import like2 from "../assets/imgs/like2-min.svg";
import buy2 from "../assets/imgs/buy2-min.svg";

const fetchData = async () => {
  try {
    const res = await fetch(
      "https://fakestoreapi.com/products/category/women's clothing"
    );
    if (!res.ok) throw new Error("Could not fetch Data!");
    return res.json();
  } catch (error) {
    console.log(error.message);
  }
};

const Clothes = () => {
  const [data, setData] = useState([]);
  const [showProductList, setShowProductList] = useState(data);

  useEffect(() => {
    fetchData().then((products) => setData(products));
  }, []);
  console.log(data);

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
        CLOTHES
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
              Dresses
            </li>
            <li className="active:text-[#ED165F] cursor-pointer mb-4 text-[#686868] transition-all">
              Denim
            </li>
            <li className="active:text-[#ED165F] cursor-pointer mb-4 text-[#686868] transition-all">
              Jeans
            </li>
            <li className="active:text-[#ED165F] cursor-pointer mb-4 text-[#686868] transition-all">
              Jumpsuits
            </li>
            <li className="active:text-[#ED165F] cursor-pointer mb-4 text-[#686868] transition-all">
              Tops
            </li>
            <li className="active:text-[#ED165F] cursor-pointer mb-4 text-[#686868] transition-all">
              Jackets and coats
            </li>
            <li className="active:text-[#ED165F] cursor-pointer mb-4 text-[#686868] transition-all">
              Pants
            </li>
            <li className="active:text-[#ED165F] cursor-pointer mb-4 text-[#686868] transition-all">
              Shorts
            </li>
            <li className="active:text-[#ED165F] cursor-pointer mb-4 text-[#686868] transition-all">
              Skirts
            </li>
            <li className="active:text-[#ED165F] cursor-pointer mb-4 text-[#686868] transition-all">
              Loungerie & underwear
            </li>
            <li className="active:text-[#ED165F] cursor-pointer mb-4 text-[#686868] transition-all">
              Leather
            </li>
            <li className="active:text-[#ED165F] cursor-pointer mb-4 text-[#686868] transition-all">
              Sweaters & knits
            </li>
          </ul>

          <h2 className="text-xl font-semibold mb-[15px] mt-[64px]">SIZE</h2>
          <hr className="w-full" />
          <ul className="grid grid-cols-4 mt-[32px]">
            <li className="border flex justify-center py-[7px] w-[54px] mb-4 border-black cursor-pointer hover:bg-[#ED165F] transition-all duration-500 hover:text-white max-md:w-[30px]">
              XXS
            </li>
            <li className="border flex justify-center py-[7px] w-[54px] mb-4 border-black cursor-pointer hover:bg-[#ED165F] transition-all duration-500 hover:text-white max-md:w-[30px]">
              XS
            </li>
            <li className="border flex justify-center py-[7px] w-[54px] mb-4 border-black cursor-pointer hover:bg-[#ED165F] transition-all duration-500 hover:text-white max-md:w-[30px]">
              S
            </li>
            <li className="border flex justify-center py-[7px] w-[54px] mb-4 border-black cursor-pointer hover:bg-[#ED165F] transition-all duration-500 hover:text-white max-md:w-[30px]">
              M
            </li>
            <li className="border flex justify-center py-[7px] w-[54px] mb-4 border-black cursor-pointer hover:bg-[#ED165F] transition-all duration-500 hover:text-white max-md:w-[30px]">
              L
            </li>
            <li className="border flex justify-center py-[7px] w-[54px] mb-4 border-black cursor-pointer hover:bg-[#ED165F] transition-all duration-500 hover:text-white max-md:w-[30px]">
              XL
            </li>
            <li className="border flex justify-center py-[7px] w-[54px] mb-4 border-black cursor-pointer hover:bg-[#ED165F] transition-all duration-500 hover:text-white max-md:w-[30px]">
              23
            </li>
            <li className="border flex justify-center py-[7px] w-[54px] mb-4 border-black cursor-pointer hover:bg-[#ED165F] transition-all duration-500 hover:text-white max-md:w-[30px]">
              24
            </li>
            <li className="border flex justify-center py-[7px] w-[54px] mb-4 border-black cursor-pointer hover:bg-[#ED165F] transition-all duration-500 hover:text-white max-md:w-[30px]">
              25
            </li>
            <li className="border flex justify-center py-[7px] w-[54px] mb-4 border-black cursor-pointer hover:bg-[#ED165F] transition-all duration-500 hover:text-white max-md:w-[30px]">
              26
            </li>
            <li className="border flex justify-center py-[7px] w-[54px] mb-4 border-black cursor-pointer hover:bg-[#ED165F] transition-all duration-500 hover:text-white max-md:w-[30px]">
              27
            </li>
            <li className="border flex justify-center py-[7px] w-[54px] mb-4 border-black cursor-pointer hover:bg-[#ED165F] transition-all duration-500 hover:text-white max-md:w-[30px]">
              28
            </li>
            <li className="border flex justify-center py-[7px] w-[54px] mb-4 border-black cursor-pointer hover:bg-[#ED165F] transition-all duration-500 hover:text-white max-md:w-[30px]">
              29
            </li>
            <li className="border flex justify-center py-[7px] w-[54px] mb-4 border-black cursor-pointer hover:bg-[#ED165F] transition-all duration-500 hover:text-white max-md:w-[30px]">
              30
            </li>
            <li className="border flex justify-center py-[7px] w-[54px] mb-4 border-black cursor-pointer hover:bg-[#ED165F] transition-all duration-500 hover:text-white max-md:w-[30px]">
              31
            </li>
            <li className="border flex justify-center py-[7px] w-[54px] mb-4 border-black cursor-pointer hover:bg-[#ED165F] transition-all duration-500 hover:text-white max-md:w-[30px]">
              32
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
            <label className="flex items-center font-semibold gap-2 max-md:block max-md:text-center">
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
          <div className="flex items-center justify-end mb-[15px]">
            <div className="border w-[350px] flex justify-center gap-5 py-2.5 max-md:w-[200px] max-md:block">
              <button onClick={setHighToLow}>Price: High to Low</button>
              <button onClick={setLowToHigh}>Price: Low to High</button>
            </div>
          </div>

          <hr />

          <Carousel>
            <Carousel.Item interval={4000}>
              <div className="grid grid-cols-3 gap-[27px] text-center mt-[34px] max-md:grid-cols-2">
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
                    <p className="mt-[32px] ">name: {product.title}</p>
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
              <div className="grid grid-cols-3 gap-[27px] text-center mt-[34px] max-md:grid-cols-2">
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

export default Clothes;
