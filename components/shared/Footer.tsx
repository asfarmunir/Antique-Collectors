"use client";
import { useState } from "react";
import Button from "@/components/ui/Button";
import InputField from "@/components/ui/InputField";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import {
  productsLink,
  sellersLink,
  forumLink,
  myaccountLink,
} from "@/lib/constants";

const Footer = () => {
  const [subEmail, setSubEmail] = useState();

  const handleSubscribe = () => {
    if (!subEmail) {
      alert("Please enter a valid email address.");
      return;
    }

    // Perform your subscription logic here
    console.log("Subscribed with email:", subEmail);
    alert("Thank you for subscribing!");

    // Clear the input field after subscription
    setSubEmail("");
  };
  return (
    <>
      <section className="py-5 px-4 md:px-12">
        <div className=" flex py-8 flex-row flex-wrap items-center justify-between gap-4 ">
          <h1 className="text-2xl xl:text-[32px] 2xl:text-4xl capitalize font-playfair py-6">
            Subscribe to our Newsletter
          </h1>

          <div className="flex flex-row items-center  justify-center">
            <InputField
              placeholder="Your Email Address"
              className="border border-[#EBE9E0] md:min-w-64 text-xs 2xl:text-sm text-[#919089] placeholder:text-[#919089] px-4 py-[16px] "
              type="email"
              value={subEmail}
              onChange={(e) => setSubEmail(e.target.value)}
            />
            <button
              onClick={handleSubscribe}
              className="uppercase text-xs xl:text-[12px] px-5 xl:px-10 py-[16px] border border-black bg-black text-white hover:opacity-80 "
            >
              Subscribe
            </button>
          </div>
        </div>

        <div className="  flex items-start justify-between w-full gap-8 md:gap-24 border-t border-[#EBE9E0] px-4 pt-5 xl:pt-8  pb-10">
          <div className="flex flex-col justify-center items-start">
            <Image
              src="/images/footerlogo.svg"
              width={100}
              height={100}
              alt="footer logo"
              className="xl:w-[170px] xl:h-[168px] 2xl:w-40 2xl:h-40"
            />
            <p className="text-[#463F3A] py-2 text-[12px] xl:text-[16px] w-52 xl:w-80">
              Join the hunt for the most beautiful, most unusual antiques and
              jewelry
            </p>

            <div className="flex flex-row gap-2 py-4">
              <FaFacebookF
                key="facebook"
                className="bg-[#EBE9E0] text-[36px] text-black p-1.5 cursor-pointer"
                href="#"
              />
              <AiFillInstagram
                key="instagram"
                className="bg-[#EBE9E0] text-[36px] text-[black] p-1.5 cursor-pointer"
                href="#"
              />
            </div>
          </div>
          <div className=" md:grid md:grid-cols-4 gap-4 xl:gap-8 w-full justify-items-end ">
            <div className="md:block hidden">
              <p className="text-[#0D0106] text-xs xl:text-[14px]  uppercase pb-4">
                Products
              </p>

              <div className="space-y-4">
                {productsLink.map((items) => (
                  <div key={items.label} className=" ">
                    <Link
                      href={items.label}
                      className="text-[#919089]  text-[14px] "
                    >
                      {items.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:block hidden">
              <p className="text-[#0D0106] text-xs xl:text-[14px]  uppercase pb-4">
                Sellers
              </p>

              <div className="space-y-4">
                {sellersLink.map((items) => (
                  <div key={items.label} className=" ">
                    <Link
                      href={items.label}
                      className="text-[#919089]  text-[14px]"
                    >
                      {items.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:block hidden">
              <p className="text-[#0D0106] text-xs xl:text-[14px] uppercase pb-4">
                Forum
              </p>

              <div className="space-y-4">
                {forumLink.map((items) => (
                  <div key={items.label} className="text-xs  ">
                    <Link
                      href={items.label}
                      className="text-[#0D0106] uppercase  text-[12px] "
                    >
                      {items.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:block hidden">
              <p className="text-[#0D0106]  text-xs xl:text-[14px] uppercase pb-4">
                My Account
              </p>

              <div className="space-y-4">
                {myaccountLink.map((items) => (
                  <div key={items.label} className="">
                    <Link
                      href={items.label}
                      className="text-[#919089]  text-[14px] "
                    >
                      {items.label}
                    </Link>
                  </div>
                ))}
                <div className="">
                  <Link href={"/login"} className="text-black text-[14px] ">
                    BECOME A SELLER
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* copy right */}

        <div className="border-t border-[#EBE9E0] py-6 pt-9">
          <p className="text-xs xl:text-[18px] text-[#0D0106] text-center font-openSans">
            Copyright © 2025 The Antique Collector | All Rights Reserved |
            <span className=" underline text-[#919089]">
              {" "}
              Terms and Conditions | Privacy Policy
            </span>
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
