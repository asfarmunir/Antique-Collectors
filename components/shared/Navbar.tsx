"use client";

import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IoMenu } from "react-icons/io5";
import Login from "./Login";
import SignUp from "./Signup";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { VscVerifiedFilled } from "react-icons/vsc";
import Button from "../ui/Button";
import InboxModal from "./InboxModal";
import { useRouter } from "next/navigation";
const navlinks = [
  { title: "Forum", link: "/forum" },
  { title: "Fairs & Events", link: "/events" },
  { title: "Live Presentation", link: "/presentation" },
  { title: "Blog", link: "/blog" },
  { title: "About Us", link: "/aboutus" },
  { title: "Become a Seller", link: "#" },
];

const productOptions = [
  { title: "View All", link: "/products" },
  { title: "Most Popular ", link: "/products" },
  { title: "Featured Products", link: "/products" },
  { title: "Most Recent ", link: "/products" },
  { title: "By Category", link: "/products" },
  { title: "By Collections", link: "/products" },
  { title: "By Period", link: "/products" },
];

const sellerOptions = [
  { title: "View All", link: "/sellers" },
  { title: "Featured Sellers", link: "/sellers" },
  { title: "Seller List A to Z ", link: "/sellers" },
  { title: "Followed Sellers", link: "/sellers" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [openNav, setOpenNav] = useState("");
  const router = useRouter();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  return (
    <nav className="relative">
      <div className="w-full border-b border-[#F9F8F3] p-3 md:px-8 2xl:px-12 md:py-4 flex items-center justify-between">
        <Link href={"/"}>
          <Image src={"/images/logo.svg"} alt="logo" width={160} height={150} />
        </Link>
        <div className="flex items-center gap-3 md:hidden">
          <button className="flex items-center" onClick={toggleMenu}>
            <IoMenu />
          </button>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <InboxModal />
          <Image
            src={"/images/notification.svg"}
            alt="icon"
            width={25}
            height={25}
          />
          <button
            onClick={handleLogin}
            className="py-3 2xl:py-3.5 px-12 2xl:px-16 bg-black text-xs 2xl:text-sm text-white hover:opacity-80 "
          >
            LOG IN
          </button>
        </div>
      </div>

      {/* Burger Menu (Mobile/Small Screen) */}
      <div
        className={`absolute top-[100%] left-0 w-full bg-white opacity-95 z-30 border-y-2 border-[#EBE9E0] shadow-lg md:hidden ${
          isMenuOpen ? "flex" : "hidden"
        } flex-col  gap-5 py-2`}
      >
        <ul className="w-full px-5 flex flex-col items-start gap-5 py-2">
          <li>
            <a
              href={"/"}
              className={`${
                pathname === "/" ? "text-[#0D0106] font-bold" : "text-[#0D0106]"
              } text-sm 2xl:text-base`}
            >
              Home
            </a>
          </li>
          {navlinks.map((navlink, index) => (
            <li key={index}>
              <a
                href={navlink.link}
                className={`${
                  pathname === navlink.link
                    ? "text-[#0D0106] font-bold"
                    : "text-[#0D0106]"
                } text-sm 2xl:text-base`}
              >
                {navlink.title}
              </a>
            </li>
          ))}
        </ul>
        <div className=" flex flex-col gap-3 py-2 px-5">
          <div className="w-1/2 flex flex-row items-center gap-5">
            <Image
              src={"/images/notification.svg"}
              alt="Notification Icon"
              width={25}
              height={25}
              className="cursor-pointer"
            />
            <Image
              src={"/images/message.svg"}
              alt="Message Icon"
              width={25}
              height={25}
              className="cursor-pointer"
            />
          </div>
          <div className=" w-full">
            <button
              onClick={handleLogin}
              className=" py-3 px-10 bg-black text-white text-sm w-full hover:opacity-80 "
            >
              LOG IN
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Menu (Desktop/Large Screens) */}
      <div
        className={`hidden z-50 md:flex items-center justify-between py-3.5 2xl:py-5 px-9 2xl:px-12 border-b border-[#EBE9E0]`}
      >
        <ul className="flex items-center gap-5 xl:gap-[32px] py-2">
          <li>
            <a
              href={"/"}
              className={`${
                pathname === "/" ? "text-[#0D0106] font-bold" : "text-[#0D0106]"
              } text-sm xl:text-[14px] 2xl:text-base hover:font-bold hover:scale-105 transition-all duration-200`}
            >
              Home
            </a>
          </li>
          <button
            onClick={() =>
              openNav === "products" ? setOpenNav("") : setOpenNav("products")
            }
            className={`text-sm xl:text-[14px] 2xl:text-base hover:font-bold hover:scale-105 transition-all duration-200
              ${
                openNav === "products"
                  ? "text-[#0D0106] font-bold"
                  : "text-[#0D0106]"
              }`}
          >
            Products
          </button>
          <button
            onClick={() =>
              openNav === "sellers" ? setOpenNav("") : setOpenNav("sellers")
            }
            className={`text-sm xl:text-[14px] 2xl:text-base hover:font-bold hover:scale-105 transition-all duration-200
              ${
                openNav === "sellers"
                  ? "text-[#0D0106] font-bold"
                  : "text-[#0D0106]"
              }`}
          >
            Sellers
          </button>
          {navlinks.map((navlink, index) => (
            <li key={index}>
              <a
                href={navlink.link}
                className={`${
                  pathname === navlink.link
                    ? "text-[#0D0106] font-bold"
                    : "text-[#0D0106]"
                } text-sm xl:text-[14px] 2xl:text-base hover:font-bold hover:scale-105 transition-all duration-200`}
              >
                {navlink.title}
              </a>
            </li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Search"
          className="border border-[#EBE9E0] w-[300px] h-[45px]  focus:placeholder:text-[#EBE9E0] transition-all   px-4 outline-none text-sm 2xl:text-base focus:border-[#c6c2b0]"
        />
      </div>
      <div
        className={`w-full bg-white shadow-md overflow-hidden transition-all duration-300 ease-in-out ${
          openNav === "products"
            ? "h-[340px] 2xl:h-[400px] p-5 2xl:p-7"
            : "h-0 p-0"
        } flex items-center justify-center`}
      >
        <div className="flex w-full items-center justify-center gap-5 2xl:gap-10">
          <div className="space-y-6 2xl:space-y-6 pr-16 2xl:pr-24 border-r border-[#EBE9E0]">
            {productOptions.map((items) => (
              <div
                key={items.title}
                className={`text-xs 2xl:text-sm 
                hover:font-bold transition-all duration-200
              `}
              >
                <button
                  className=" "
                  onClick={() => {
                    router.push(items.link);
                    setOpenNav("");
                  }}
                >
                  {items.title}
                </button>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4 w-full max-w-[70%] 2xl:max-w-[60%] ">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index} // Use a unique ID
                className={` w-full  flex flex-col md:py-6  relative px-6 py-4 bg-white `}
              >
                {/* Product Image Container */}
                <div className="relative group">
                  {/* Favorite Button */}
                  <div className="absolute top-2 right-4 z-10">
                    <button
                      aria-label={`Add to favorites`}
                      className="text-xl font-semibold focus:outline-none"
                    >
                      <CiHeart className="text-gray-500" />
                    </button>
                  </div>

                  {/* Product Image */}
                  <Image
                    src="/images/products/p5.png"
                    alt={"product"}
                    width={150}
                    className="2xl:w-full 2xl:h-full object-contain object-center transform hover:scale-105  transition duration-500 ease-in-out"
                    height={150}
                  />
                </div>

                {/* Product Details */}
                <div className="w-full mt-4">
                  <h2 className="text-[14px] 2xl:text-base uppercase">
                    NATIVE IRON CHAIR
                  </h2>

                  <div className="flex flex-row gap-4 justify-between">
                    <p className="text-[#919089] mb-1 text-[12px]">
                      Antique Animal Jewelry
                    </p>
                    <Link
                      href={"#"}
                      className="text-[#919089] text-xs 2xl:text-[12px]"
                    >
                      FOLLOW
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`w-full bg-white shadow-md overflow-hidden transition-all duration-300 ease-in-out ${
          openNav === "sellers"
            ? "h-[260px] 2xl:h-[300px] p-5 2xl:p-7"
            : "h-0 p-0"
        } flex items-center justify-center`}
      >
        <div className="flex w-full items-center justify-center gap-9 2xl:gap-16">
          <div className="space-y-8 2xl:space-y-8 py-6 pr-20 2xl:pr-24 border-r border-[#EBE9E0]">
            {sellerOptions.map((items) => (
              <div
                key={items.title}
                className={`text-xs 2xl:text-sm 
                hover:font-bold transition-all duration-200
              `}
              >
                <button
                  className=" "
                  onClick={() => {
                    router.push(items.link);
                    setOpenNav("");
                  }}
                >
                  {items.title}
                </button>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4 w-full max-w-[70%] 2xl:max-w-[60%] ">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index} // Use a unique ID
                className="relative w-full flex flex-col items-center hover:scale-105 transition duration-500 ease-in-out"
              >
                <div className="relative z-30 top-9">
                  <Image
                    src={"/images/sellers/s1.png"}
                    alt={"seller"}
                    width={90}
                    height={90}
                  />
                </div>
                <div className="bg-[#F9F8F3] w-full capitalize flex flex-col gap-1 items-center relative pt-8 2xl:pt-12 pb-3 z-10">
                  <div className="flex flex-row items-center gap-2 pt-1">
                    <h1 className="font-playfair text-[20px] ">Seller Name</h1>
                    <VscVerifiedFilled className="text-green-600" />
                  </div>
                  <p className="uppercase text-xs text-[#919089]">
                    23 Products
                  </p>
                  <Button
                    className="bg-transparent uppercase text-xs text-[#0D0106] p-0"
                    label="Follow"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isLoginOpen && <SignUp onClose={() => setIsLoginOpen(false)} />}
    </nav>
  );
};

export default Navbar;
