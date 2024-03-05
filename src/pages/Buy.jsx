import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

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

const fetchData4 = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products/4");
    if (!res.ok) throw new Error("Could not fetch Data!");
    return res.json();
  } catch (error) {
    console.log(error.message);
  }
};

const Buy = () => {
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

  useEffect(() => {
    fetchData4().then((products) => setData4(products));
  }, []);

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  function increment() {
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }

  function increment2() {
    setCount2(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement2() {
    setCount2(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }

  return (
    <main className="container">
      <div className=" flex gap-8">
        <aside className="w-[413px] mt-16 shadow px-[31px] pt-16 h-[1036px] max-md:w-[313px]">
          <label className="flex items-center gap-3 font-extrabold text-xl cursor-pointer max-md:text-lg">
            <input className="w-5 h-5" type="checkbox" />
            Shipping Address
          </label>
          <form className="mt-16">
            <label className="mb-8 text-sm">
              Email
              <input
                className="border rounded-md mt-4 h-[60px] w-[350px] px-2 max-md:w-[180px]"
                type="email"
              />
            </label>
            <label className="mb-8 text-sm">
              Full Name
              <input
                className="border rounded-md mt-4 h-[60px] w-[350px] px-2 max-md:w-[180px]"
                type="text"
              />
            </label>
            <label className="mb-8 text-sm">
              Address
              <textarea
                className="border rounded-md mt-4 h-[80px] w-[350px] px-2 py-2 max-md:w-[180px]"
                type="text"
              />
            </label>
            <label className="mb-8 text-sm">
              State/Province
              <input
                className="border rounded-md mt-4 h-[60px] w-[350px] px-2 max-md:w-[180px]"
                type="text"
              />
            </label>
            <label className="mb-8 text-sm">
              City
              <input
                className="border rounded-md mt-4 h-[60px] w-[350px] px-2 max-md:w-[180px]"
                type="text"
              />
            </label>
            <label className="mb-8 text-sm">
              Phone number
              <input
                className="border rounded-md mt-4 h-[60px] w-[350px] px-2 max-md:w-[180px]"
                type="number"
              />
            </label>
            <label className="font-semibold flex items-center gap-4 max-md:text-xs">
              <input className="w-4 h-4" type="checkbox" />
              Set default shipping address
            </label>
          </form>
        </aside>

        <section className="mt-16 ">
          <div className="grid grid-cols-2 items-start gap-8 max-md:grid-cols-1">
            <div className="w-[425px] max-md:w-[325px]">
              <div className="shadow px-8 h-[183px] max-md:px-3">
                <label className="flex items-center gap-4 pt-16 font-extrabold text-xl max-md:text-sm ">
                  <input type="checkbox" />
                  Delivery method
                </label>
                <div className="text-sm flex items-center gap-[31px] mt-8 ">
                  <label className="flex items-center gap-2">
                    <input type="radio" />₦ 2,000
                  </label>
                  <h4>Delivery fee</h4>
                  <h4>Door delivery</h4>
                </div>
              </div>

              <div className="shadow px-8 h-[435px] mt-8 max-md:px-2">
                <label className="flex items-center gap-4 pt-16 font-extrabold text-xl">
                  <input type="checkbox" />
                  Payment Methods
                </label>
                <div className="text-sm mt-8 ">
                  <div className="flex items-start gap-2">
                    <input type="radio" />
                    <div>
                      <h4>Pay with card</h4>
                      <p className="text-[#686868] w-[220px]">
                        (Get 5% off total price and money back guarantee)
                      </p>
                    </div>
                  </div>

                  <p className="text-[10px] mt-4">
                    You will be redirected to Paystack payment gateway
                  </p>

                  <label className="flex items-center gap-2 mt-8">
                    <input type="radio" />
                    Pay on delivery
                  </label>
                  <li className="list-disc text-[10px] mb-2 mt-4">
                    Kindly note that we will only accept POS payment option on
                    delivery
                  </li>
                  <li className="list-disc text-[10px] mb-2">
                    You have to make payment before opening package
                  </li>
                  <li className="list-disc text-[10px] mb-2">
                    Once the seal is broken, item can only be returned if
                    damaged or defective
                  </li>
                </div>
              </div>
            </div>

            <div className="w-[425px] max-md:w-[325px]">
              <div className="shadow h-[674px] px-8">
                <h2 className="text-center font-extrabold text-xl pt-16 max-md:font-bold">
                  ORDER SUMMARY
                </h2>

                <div className="mt-16">
                  <div className="flex items-center gap-8">
                    <img
                      className="w-[50px] h-[50px]"
                      src={data3.image}
                      alt="image"
                    />
                    <div>
                      <h3 className="font-semibold text-xl max-md:text-lg">
                        {data3.title}
                      </h3>
                      <p className="text-[#686868] font-semibold ">
                        Size - EU: 36 US: 5.5
                      </p>
                      <h5 className="text-[#ED165F] text-sm">
                        ₦ {data3.price}
                      </h5>
                      <div className="flex items-center gap-2 mt-2">
                        <h6>Qty</h6>
                        <button
                          onClick={increment}
                          className="bg-[#ED165F] text-white px-[7px]"
                        >
                          +
                        </button>
                        <h5 className="bg-[#E1E1E1] px-2 py-[2px]">{count}</h5>
                        <button
                          onClick={decrement}
                          className="bg-[#ED165F] text-white px-[10px]"
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-8 mt-8">
                    <img
                      className="w-[50px] h-[50px]"
                      src={data4.image}
                      alt="image"
                    />
                    <div>
                      <h3 className="font-semibold text-xl max-md:text-lg">
                        {data4.title}
                      </h3>
                      <p className="text-[#686868] font-semibold ">Size - XS</p>
                      <h5 className="text-[#ED165F] text-sm">{data4.price}</h5>
                      <div className="flex items-center gap-2 mt-2">
                        <h6>Qty</h6>
                        <button
                          onClick={increment2}
                          className="bg-[#ED165F] text-white px-[7px]"
                        >
                          +
                        </button>
                        <h5 className="bg-[#E1E1E1] px-2 py-[2px]">{count2}</h5>
                        <button
                          onClick={decrement2}
                          className="bg-[#ED165F] text-white px-[10px]"
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="mt-16" />

                <div className="flex justify-between items-center mt-8 mb-3">
                  <h3>Cart sub-total </h3>
                  <h4>₦ {data3.price + data4.price}</h4>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <h3>Card discount</h3>
                  <h4>- ₦ 1,000</h4>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <h3>Delivery fee</h3>
                  <h4>₦ 2,000</h4>
                </div>

                <hr />

                <div className="flex justify-between items-center mt-4">
                  <h3 className="font-semibold">TOTAL</h3>
                  <h4 className="text-[#ED165F]">
                    ₦ {data3.price + data4.price - 1000 + 2000}
                  </h4>
                </div>
              </div>

              <label className="flex justify-between items-center mt-8 font-semibold">
                Is this a gift?
                <div className="flex gap-[33px]">
                  <button className="px-[11px] py-[11px] border rounded-[5px]">
                    Yes
                  </button>
                  <button className="px-[12px] py-[11px] border rounded-[5px] bg-[#ED165F] text-white">
                    No
                  </button>
                </div>
              </label>

              <button className="border w-full uppercase bg-[#ED165F] px-[47px] py-[11px] text-white mt-8 font-extrabold tracking-[2px] rounded-md">
                <NavLink to="/Orders">PLACE ORDER</NavLink>
              </button>
            </div>
          </div>
        </section>

        {/* <section className="mt-[90px] w-full">
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
        </section> */}
      </div>
    </main>
  );
};

export default Buy;
