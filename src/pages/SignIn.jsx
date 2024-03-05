import React from "react";
import { useEffect, useState } from "react";

// const fetchData = async () => {
//   try {
//     const res = await fetch("https://fakestoreapi.com/auth/login");
//     if (!res.ok) throw new Error("Could not fetch Data!");
//     return res.json();
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// fetch("https://fakestoreapi.com/auth/login", {
//   method: "POST",
//   body: JSON.stringify({
//     username: "salom",
//     password: "qale",
//   }),
// })
//   .then((res) => res.json())
//   .then((json) => console.log(json));

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [name2, setName2] = useState("");
  const [email2, setEmail2] = useState("");
  const [password2, setPassword2] = useState("");

  if (email && password && name && name2 && email2 && password2) {
    window.location.href = "Account";
  }

  // useEffect(() => {
  //   fetchData().then((products) => setData(products));
  // }, []);
  // console.log(data);

  const handleEmail = (e) => {
    setEmail(e.target.value);

    console.log(e.target.value);

    localStorage.setItem("email", JSON.stringify(e.target.value));
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);

    localStorage.setItem("password", JSON.stringify(e.target.value));
  };

  const handleEmail2 = (e) => {
    setEmail2(e.target.value);

    console.log(e.target.value);

    localStorage.setItem("email2", JSON.stringify(e.target.value));
  };

  const handleName = (e) => {
    setName(e.target.value);

    localStorage.setItem("First Name", JSON.stringify(e.target.value));
  };

  const handleName2 = (e) => {
    setName2(e.target.value);

    localStorage.setItem("Last Name", JSON.stringify(e.target.value));
  };

  const handlePassword2 = (e) => {
    setPassword2(e.target.value);

    localStorage.setItem("password2", JSON.stringify(e.target.value));
  };

  const windowa = (e) => {
    e.preventDefault();

    if (
      name.trim() !== "" &&
      name2.trim() !== "" &&
      email2.trim() !== "" &&
      password2.trim() !== ""
    ) {
      alert("Saved to localStorage");
      window.location.href = "Account";
    } else {
      alert("enter input values!");
    }
  };

  const windowb = (e) => {
    e.preventDefault();

    if (email.trim() !== "" && password.trim() !== "") {
      alert("Saved to localStorage");
      window.location.href = "Account";
    } else {
      alert("enter input values!");
    }
  };

  return (
    <div className="container">
      <div className="ml-[221px] max-md:ml-0">
        <h1 className="font-extrabold text-3xl mt-[64px]">Hello there!</h1>
        <p className="mt-4 text-xl">
          Please sign in or create account to continue
        </p>
      </div>

      <div className="flex justify-center gap-[160px] mt-[64px]">
        <div className="w-[409px]">
          <h3 className="font-extrabold">SIGN IN</h3>

          <form id="form" onSubmit={handleEmail} className="mt-8">
            <h4 className="text-sm">Email</h4>
            <input
              className="px-2 rounded-md border mb-8 w-full h-[60px]"
              type="email"
              onChange={handleEmail}
              value={email}
            />
            <h4 className="text-sm">Password</h4>
            <input
              className="px-2 rounded-md border mb-4 w-full h-[60px]"
              type="password"
              onChange={handlePassword}
              value={password}
            />
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                className="px-2 rounded-md w-6 h-6 cursor-pointer"
                type="checkbox"
              />
              Remeber my details
            </label>
            <button
              type="submit"
              onClick={windowb}
              className="bg-[#ED165F] w-full mt-8 py-[11px] text-white rounded-md font-extrabold tracking-[2px]"
            >
              SIGN IN
            </button>
          </form>
          <li className="mt-[29px] underline">Forgot password?</li>
        </div>

        <div className="w-[409px]">
          <h3 className="font-extrabold">CREATE ACCOUNT</h3>
          <form onSubmit={handleEmail2} className="mt-8" id="form2">
            <h4 className="text-sm">First Name</h4>
            <input
              className="px-2 rounded-md border mb-8 w-full h-[60px]"
              type="text"
              onChange={handleName}
              value={name}
            />
            <h4 className="text-sm">Last Name</h4>
            <input
              className="px-2 rounded-md border mb-8 w-full h-[60px] "
              type="text"
              onChange={handleName2}
              value={name2}
            />
            <h4 className="text-sm">Email</h4>
            <input
              className="px-2 rounded-md border mb-8 w-full h-[60px]"
              type="text"
              onChange={handleEmail2}
              value={email2}
            />
            <h4 className="text-sm">Create Password</h4>
            <input
              className="px-2 rounded-md border mb-8 w-full h-[60px]"
              type="text"
              onChange={handlePassword2}
              value={password2}
            />
            <h4 className="text-sm">Confirm Password</h4>
            <input
              className="px-2 rounded-md border mb-8 w-full h-[60px]"
              type="text"
            />
            <label className="flex gap-2 cursor-pointer">
              <input type="checkbox" className="w-6 h-6" />I want to receive
              Safari newsletters with the best deals and offers
            </label>
            <button
              type="submit"
              className="bg-[#ED165F] w-full mt-8 py-[11px] text-white rounded-md font-extrabold tracking-[2px] text-lg"
              onClick={windowa}
            >
              CREATE ACCOUNT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
