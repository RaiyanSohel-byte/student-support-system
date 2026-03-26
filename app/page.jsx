"use client";
import React, { useState } from "react";
import logo from "../public/logo.png";
import Image from "next/image";
import emailIcon from "../public/icons/email.png";
import lockIcon from "../public/icons/lock.png";
import loginIcon from "../public/icons/login.png";
import eyeIcon from "../public/icons/eye.png";
import eyeOnIcon from "../public/icons/eyeOn.png";

import { Montserrat } from "next/font/google";
import EyeOnIcon from "@/app/components/icons/EyeOnIcon";
import Link from "next/link";
import { useRole } from "@/contexts/RoleContext";
import { useRouter } from "next/navigation";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const { setRole } = useRole();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // const handleLogin = (role) => {
  //   setRole(role);

  //   if (role === "superAdmin") {
  //     router.push("/dashboard/super-admin-dashboard");
  //   } else if (role === "admin") {
  //     router.push("/dashboard/admin-dashboard");
  //   } else if (role === "support") {
  //     router.push("/dashboard/ticket-handling");
  //   } else if (role === "student") {
  //     router.push("/dashboard/student-dashboard");
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        "https://particularistically-transelementary-owen.ngrok-free.dev/api/auth/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      // ✅ Store tokens
      localStorage.setItem("accessToken", data.tokens.access);
      localStorage.setItem("refreshToken", data.tokens.refresh);

      // ✅ Store user
      localStorage.setItem("user", JSON.stringify(data.user));

      // ✅ Set role in context
      setRole(data.user.role.slug);

      // ✅ Redirect (BEST WAY → use backend redirect)
      router.push(data.redirect_to);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="space-y-8 py-4 lg:py-0">
        {/* Logo and header */}
        <div className="space-y-3">
          <Image
            src={logo}
            alt="Logo"
            width={177}
            height={64}
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
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl shadow-xl p-8 lg:w-[450px] w-full"
        >
          <h3 className="text-[#0A0A0A] font-bold text-2xl leading-8 text-center mb-6">
            Sign In
          </h3>

          {/* Email */}
          <div className="space-y-2 mb-4 relative">
            <h3 className="text-[#0A0A0A] font-bold text-sm leading-5">
              Email Address
            </h3>
            <input
              type="email"
              name="email"
              className="w-full placeholder:text-[#0A0A0A80] placeholder:text-base px-9 py-3.75 border border-[#D1D5DC] rounded-[10px]"
              placeholder="student@university.edu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Image
              src={emailIcon}
              alt="Email Icon"
              width={20}
              height={20}
              className="absolute left-3 top-[50%]"
            />
          </div>
          {/* Password */}
          <div className="space-y-2 relative">
            <h3 className="text-[#0A0A0A] font-bold text-sm leading-5">
              Password
            </h3>
            <input
              type={showPass ? "text" : "password"}
              name="password"
              className="w-full placeholder:text-[#0A0A0A80] placeholder:text-base px-9 py-3.75 border border-[#D1D5DC] rounded-[10px]"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Image
              src={lockIcon}
              alt="Email Icon"
              width={20}
              height={20}
              className="absolute left-3 top-[50%]"
            />
            {showPass ?
              <Image
                onClick={() => setShowPass(false)}
                src={eyeIcon}
                alt="Eye Icon"
                width={20}
                height={20}
                className="absolute right-3 top-[50%] cursor-pointer"
              />
            : <div
                onClick={() => setShowPass(true)}
                className="absolute right-3 top-[50%] cursor-pointer"
              >
                <EyeOnIcon />
              </div>
            }
          </div>
          <p
            className={`${montserrat.className} text-right text-[#D2000A] text-[18px] mt-1.5 cursor-pointer`}
          >
            Forgot Password
          </p>
          <button
            type="submit"
            disabled={loading}
            className="font-bold text-base leading-6 text-white bg-[#5AC7DB] text-center py-2.5 w-full rounded-[10px] mt-4 cursor-pointer hover:scale-105 transition-all flex justify-center items-center gap-2"
          >
            <Image src={loginIcon} width={20} height={20} alt="login" />
            {loading ? "Signing In..." : "Sign In"}
          </button>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </form>
        <p className="text-[#6A7282] text-sm leading-5 text-center">
          © {new Date().getFullYear()} University Support System. All rights
          reserved.
        </p>

        {/* <div>
          <p className="text-center font-bold text-2xl mb-2">Login As:</p>
          <p className="mb-3 text-red-500 text-xs leading-5 text-center">
            This section is just for demo, <br />
            once the backend part is complete, this section will be removed
          </p>
          <div className="flex justify-between items-center">
            <button
              onClick={() => handleLogin("superAdmin")}
              className="cursor-pointer gap-3 px-4 py-3 rounded-xl transition-all duration-200 group bg-[#4db8d8] text-white shadow-md shadow-sky-100"
            >
              Super Admin
            </button>

            <button
              onClick={() => handleLogin("admin")}
              className="cursor-pointer gap-3 px-4 py-3 rounded-xl transition-all duration-200 group bg-[#4db8d8] text-white shadow-md shadow-sky-100"
            >
              Admin
            </button>

            <button
              onClick={() => handleLogin("support")}
              className="cursor-pointer gap-3 px-4 py-3 rounded-xl transition-all duration-200 group bg-[#4db8d8] text-white shadow-md shadow-sky-100"
            >
              Support
            </button>

            <button
              onClick={() => handleLogin("student")}
              className="cursor-pointer gap-3 px-4 py-3 rounded-xl transition-all duration-200 group bg-[#4db8d8] text-white shadow-md shadow-sky-100"
            >
              Student
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Login;
