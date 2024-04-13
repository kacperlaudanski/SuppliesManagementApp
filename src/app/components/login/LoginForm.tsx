"use client";

import React, { useState } from "react";
import Input from "../Input";

export default function LoginForm() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form>
      <div>
        <span className="text-sm text-gray-900">Welcome back</span>
        <h1 className="text-2xl font-bold">Login to your account</h1>
      </div>
      <Input
        page="loginForm"
        id="email"
        type="email"
        name="Email"
        placeholder="Email"
        onChange={(e) => setTimeout(() => {setEmail(e.target.value)}, 1500)}
      />
      <Input
        page="loginForm"
        id="password"
        type="password"
        name="Password"
        placeholder="Password"
        onChange={(e) => setTimeout(() => {setPassword(e.target.value)}, 1500)}
      />
      <div className="flex justify-between mt-5">
        <div>
          <input
            className="cursor-pointer"
            type="radio"
            name="rememberme"
          ></input>
          <span className="text-sm">Remember Me</span>
        </div>
        <span className="text-sm text-blue-700 hover:underline cursor-pointer">
          Forgot password?
        </span>
      </div>
      <div>
        <button className="mt-4 mb-3 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100">
          Login now
        </button>
        <div className="flex  space-x-2 justify-center items-end bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md transition duration-100">
          <img
            className="h-5 cursor-pointer"
            src="https://i.imgur.com/arC60SB.png"
            alt=""
          ></img>
          <button>Or sign-in with google</button>
        </div>
      </div>
    </form>
  );
}
