import Image from "next/image";
import React from "react";
import { FaFire, FaRegClock, FaRegStar } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineModeComment } from "react-icons/md";
import { TfiArrowTopRight } from "react-icons/tfi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { GoLink } from "react-icons/go";

const PersonalInfo = () => {
  return (
    <div className="px-5 md:px-12">
      <div className="py-6 xl:py-[32px] border-b border-[#EBE9E0] pb-5 mb-9">
        <h1 className="text-xs">Home / Forum</h1>
        <h1 className="font-playfair pt-4 uppercase text-xl ">FORUM</h1>
      </div>
      <div className=" w-full flex flex-col sm:flex-row items-start gap-5 md:gap-8   ">
        <div className=" w-full sm:w-1/4">
          <h2 className="text-lg font-playfair mb-2">Search</h2>
          <input
            type="text"
            className="border mb-4 border-[#EBE9E0] w-full py-2.5 text-xs px-4"
            placeholder="Search topics, questions..."
          />
          <div className="border mb-4 flex items-center justify-between border-[#EBE9E0] w-full py-3 text-xs px-5">
            <p className="text-lg font-playfair">
              <span className="h-2 w-0.5 bg-black p-[0.08rem] mr-2.5"></span>
              Question
            </p>
            <span className="text-xl font-bold">+</span>
          </div>
          <div className="border mb-4 flex items-center justify-between border-[#EBE9E0] w-full py-3 text-xs px-5">
            <p className="text-lg font-playfair">
              <span className="h-2 w-0.5 bg-black p-[0.08rem] mr-2.5"></span>
              Tags
            </p>
            <span className="text-xl font-bold">+</span>
          </div>
        </div>
        {/* Main Section */}
        <div className=" w-full md:w-2/4">
          {/* Tabs */}
          <div className="flex gap-2.5 mb-6 flex-wrap">
            <button className="px-5 inline-flex items-center gap-1 text-xs 2xl:text-sm py-1.5 bg-[#F9F8F3]  text-[#919089] ">
              <FaRegClock />
              New
            </button>
            <button className="px-5 inline-flex items-center gap-1 text-xs 2xl:text-sm py-1.5 bg-[#F9F8F3] text-[#919089] hover:text-gray-900">
              <TfiArrowTopRight />
              Top
            </button>
            <button className="px-5 inline-flex items-center gap-1 text-xs 2xl:text-sm py-1.5 bg-[#F9F8F3] text-[#919089] hover:text-gray-900">
              <FaFire />
              Popular
            </button>
            <button className="px-5 inline-flex items-center gap-1 text-xs 2xl:text-sm py-1.5 bg-[#F9F8F3] text-[#919089] hover:text-gray-900">
              <IoMdCheckmarkCircleOutline />
              Closed
            </button>
          </div>

          {/* Start a Discussion */}
          <div className="bg-primary-50 border border-gray-100 p-3  mb-6">
            <h2 className="text-lg font-playfair  mb-3">Start a Discussion</h2>
            <textarea
              className="w-full p-3 border text-xs 2xl:text-sm border-[#EBE9E0]  mb-3"
              placeholder="Write a Question"
              rows={3}
            ></textarea>
            <div className="flex items-center gap-4 mb-3">
              <input
                className="w-full p-3 border text-xs 2xl:text-sm border-[#EBE9E0]"
                type="text"
                placeholder="Add tags with #"
              />
              <button className="px-12 py-3 text-xs 2xl:text-sm bg-black text-white  hover:bg-gray-800">
                SEND
              </button>
            </div>
          </div>

          {/* Discussion List */}
          <div className="bg-white border border-[#EBE9E0] p-3 ">
            <div className="flex items-center mb-4">
              <Image
                src="/avatar.svg"
                alt="User Avatar"
                className="rounded-full mr-4"
                width={40}
                height={40}
              />
              <div>
                <p className="font-semibold text-sm">John</p>
                <p className="text-xs  text-gray-500 ">25 min ago</p>
              </div>
            </div>
            <h3 className="font-semibold  mb-2 text-sm 2xl:text-base">
              What is a difference between Bronze and Silver tier?
            </h3>
            <p className="text-[#919089] mb-4 text-xs 2xl:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum
              vitae etiam lectus amet enim.
            </p>
            <div className="flex flex-wrap gap-2 items-center mb-2 justify-between">
              <div className="flex gap-2 ">
                <span className="px-4 py-1.5 bg-primary-50 text-[#919089]  text-xs">
                  subscription tiers
                </span>
                <span className="px-4 py-1.5 bg-primary-50 text-[#919089]  text-xs">
                  bronze
                </span>
                <span className="px-4 py-1.5 bg-primary-50 text-[#919089]  text-xs">
                  silver
                </span>
              </div>
              <div className="flex items-center text-[#919089] text-sm">
                <span className="mr-4 inline-flex items-center gap-1">
                  <IoEyeOutline />
                  125
                </span>
                <span className="mr-4 inline-flex items-center gap-1">
                  <MdOutlineModeComment />
                  15
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-1/4">
          <div className="bg-white border border-[#EBE9E0] p-6  mb-6">
            <h4 className="font-playfair w-full pb-3 border-b text-xl 2xl:text-2xl mb-4 inline-flex items-center gap-2">
              <FaRegStar className="text-base 2xl:text-lg" />
              Must-read blog posts
            </h4>
            <ul className="text-sm 2xl:text-base">
              <li className="mb-2">
                • Please read Seller rules before you start working on a
                platform
              </li>
              <li>• Helpful tips for Sellers</li>
            </ul>
            <h4 className="font-playfair w-full pb-3 border-b text-xl 2xl:text-2xl mt-8 mb-4 inline-flex items-center gap-2">
              <GoLink className="text-base 2xl:text-lg" />
              Featured links
            </h4>
            <ul className="text-sm 2xl:text-base">
              <li className="mb-2">
                • The Ultimate Guide to creating the perfect Seller's Profile
              </li>
              <li>• Frequently Asked Questions for Sellers</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
