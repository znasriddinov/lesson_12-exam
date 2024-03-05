import { useRef, useEffect, useState } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { NavLink } from "react-router-dom";

// imgs
import Logo from "../assets/imgs/logo.png";
import girl from "../assets/imgs/girl.png";
import top from "../assets/imgs/top.svg";
import like2 from "../assets/imgs/like2-min.svg";
import buy2 from "../assets/imgs/buy2-min.svg";

const fetchData = async () => {
  try {
    const res = await fetch("https:fakestoreapi.com/products");
    if (!res.ok) throw new Error("Could not fetch Data!");
    return res.json();
  } catch (error) {
    console.log(error.message);
  }
};

const Home = () => {
  const [data, setData] = useState([]);
  const ref = useRef(null);
  const ref2 = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClick2 = () => {
    ref2.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    fetchData().then((products) => setData(products));
  }, []);
  console.log(data);

  return (
    <main ref={ref2}>
      <header className="bg-[#ED165F] h-[1166px] relative">
        <div className="container">
          <Carousel>
            <Carousel.Item interval={2000}>
              <img
                className="absolute top-[111px] ml-[200px] relative max-md:ml-10"
                src={Logo}
              />
              <img
                className="absolute ml-[417px] top-[-50px] max-md:ml-5"
                src={girl}
              />
              <div className="flex justify-center mt-[350px]">
                <h3
                  onClick={handleClick}
                  className="font-semibold text-white text-3xl cursor-pointer"
                >
                  Explore our collection
                </h3>
              </div>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img
                className="absolute top-[111px] ml-[200px] relative max-md:ml-10"
                src={Logo}
              />
              <img
                className="absolute ml-[417px] top-[-50px] w-[666px] h-[999px] max-md:ml-5"
                src={girl}
              />
              <div className="flex justify-center mt-[350px]">
                <h3
                  onClick={handleClick}
                  className="font-semibold text-white text-3xl cursor-pointer"
                >
                  Explore our collection
                </h3>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </header>

      <section className="mt-[120px] ">
        <div className="container">
          <p className="text-2xl text-center w-[1099px] mx-auto max-md:w-[650px] max-ms:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
            gravida cursus adipiscing viverra at tortor, egestas odio
            parturient. Morbi ut lorem in erat. Et et molestie diam diam
            ultricies. Scelerisque duis diam ac cras dictum adipiscing.
            Venenatis at sit proin ut vitae adipiscing id facilisis.
          </p>

          <Carousel>
            <Carousel.Item interval={2000}>
              <div
                ref={ref}
                className="grid grid-cols-4 gap-12 text-center mt-20 max-md:grid-cols-2"
              >
                {data?.map((product) => (
                  <div
                    key={product.id}
                    className="hover:opacity-90 hover:brightness-50 hover:shadow-2xl p-2"
                  >
                    <img
                      className="w-[297px] h-[500px] mx-auto py-5 cursor-pointer"
                      src={product.image}
                      alt={product.title}
                    />
                    <p className="mt-[32px] text-xs">{product.title}</p>
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
            <Carousel.Item interval={1500}>
              <div
                ref={ref}
                className="grid grid-cols-4 gap-12 text-center mt-20 max-md:grid-cols-2"
              >
                {data?.map((product) => (
                  <div
                    key={product.id}
                    className="hover:opacity-90 hover:brightness-50 hover:shadow-2xl relative p-2"
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
                ))}
              </div>
            </Carousel.Item>
          </Carousel>

          <div className="flex justify-end mt-5 cursor-pointer">
            {/* < className="border px-3 py-2" onClick={handleClick2}></> */}
            <img
              className="border px-3 py-3"
              onClick={handleClick2}
              src={top}
              alt="top"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
