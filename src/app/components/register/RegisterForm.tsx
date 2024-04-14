"use client";

import { useState } from "react";
import Input from "../Input";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  return (
    <form className="my-8 text-sm">
      <Input
        page="registerForm"
        placeholder="Enter your name"
        type="text"
        name="Name"
        id="name"
        onChange={(e) => setTimeout(() => setName(e.target.value), 1500)}
      />
      <Input
        page="registerForm"
        placeholder="Enter your email"
        type="email"
        name="Email"
        id="email"
        onChange={(e) => setTimeout(() => setEmail(e.target.value), 1500)}
      />
      <Input
        page="registerForm"
        placeholder="Enter your password"
        type="password"
        name="Password"
        id="password"
        onChange={(e) => setTimeout(() => setPassword(e.target.value), 1500)}
      />

      <Input
        page="registerForm"
        placeholder="Enter your password again"
        type="password"
        name="Password Confirmation"
        id="password_confirmation"
        onChange={(e) =>
          setTimeout(() => setPasswordConfirm(e.target.value), 1500)
        }
      />

      <div className="flex items-center mt-8">
        <input
          type="checkbox"
          name="remember_me"
          id="remember_me"
          className="mr-2 focus:ring-0 rounded"
        ></input>
        <label htmlFor="remember_me" className="text-gray-700">
          I accept the{" "}
          <a
            href="#"
            className="text-blue-600 hover:text-blue-700 hover:underline"
          >
            terms
          </a>{" "}
          and{" "}
          <a
            href="#"
            className="text-blue-600 hover:text-blue-700 hover:underline"
          >
            privacy policy
          </a>
        </label>
      </div>
      <div className="my-4 flex items-center justify-end space-x-4">
        <button className="bg-blue-600 hover:bg-blue-700 rounded-lg px-8 py-2 text-gray-100 hover:shadow-xl transition duration-150 uppercase">
          Sign Up
        </button>
      </div>
    </form>
  );
}