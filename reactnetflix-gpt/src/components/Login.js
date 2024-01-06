import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/cf51cb4b-630b-47f7-b95e-e17736622079/BD-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg  bg-opacity-80">
        <h1 className="font-bold  py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-600 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-600 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-600 rounded-lg"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg text-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {isSignInForm ? (
          <p className="py-4 text-sm text-left">
            New to Netflix?{" "}
            <span
              className="text-blue-300 font-bold cursor-pointer"
              onClick={toggleSignIn}
            >
              {" "}
              Signup Now{" "}
            </span>
          </p>
        ) : (
          <p className="py-4 text-sm text-left">
            Already Registered?{" "}
            <span
              className="text-blue-300 font-bold cursor-pointer"
              onClick={toggleSignIn}
            >
              {" "}
              Signin Now{" "}
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
