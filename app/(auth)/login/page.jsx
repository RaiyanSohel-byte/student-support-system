import React from "react";
import logo from "../../../public/auth images/logo.png";
import Image from "next/image";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const Login = () => {
  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="space-y-8 py-4 lg:py-0">
        {/* Logo and header */}
        <div className="space-y-3">
          <Image
            src={logo}
            alt="Logo"
            width={78}
            height={78}
            className="mx-auto mb-4"
          />
          <h1 className="text-[#0A0A0A] text-center font-bold leading-9 text-[30px]">
            Students Support System
          </h1>
          <p className="text-[#4A5565] leading-6 text-base text-center">
            Student Support Portal
          </p>
        </div>
        {/* Login form */}
        <form className="rounded-2xl shadow-lg p-8 lg:w-[450px] w-full">
          <h3 className="text-[#0A0A0A] font-bold text-2xl leading-8 text-center mb-6">
            Sign In
          </h3>

          {/* Email */}
          <div className="space-y-2 mb-4">
            <h3 className="text-[#0A0A0A] font-bold text-sm leading-5">
              Email Address
            </h3>
            <input
              type="email"
              name="email"
              className="w-full placeholder:text-[#0A0A0A80] placeholder:text-base px-3 py-3.75 border border-[#D1D5DC] rounded-[10px]"
              placeholder="student@university.edu"
            />
          </div>
          {/* Password */}
          <div className="space-y-2">
            <h3 className="text-[#0A0A0A] font-bold text-sm leading-5">
              Password
            </h3>
            <input
              type="email"
              name="email"
              className="w-full placeholder:text-[#0A0A0A80] placeholder:text-base px-3 py-3.75 border border-[#D1D5DC] rounded-[10px]"
              placeholder="password"
            />
          </div>
          <p
            className={`${montserrat.className} text-right text-[#D2000A] text-[18px] mt-1.5 cursor-pointer`}
          >
            Forgot Password
          </p>
          <button className="font-bold text-base leading-6 text-white bg-[#5AC7DB]/50 text-center py-2.5 w-full rounded-[10px] mt-4 cursor-pointer hover:scale-105 transition-all">
            Sign In
          </button>
        </form>
        <p className="text-[#6A7282] text-sm leading-5 text-center">
          © 2025 University Support System. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Login;
