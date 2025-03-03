import Image from "next/image";
import React from "react";

const PersonalInfo = () => {
  return (
    <div className="border-b border-[#EBE9E0] pb-24">
      <div className="py-6 px-5 md:px-12 xl:px-[80px] xl:py-[32px] border-b border-[#EBE9E0] pb-5 mb-9">
        <h1 className="text-xs text-[#919089]">
          Home / My Account / Personal info
        </h1>
        <h1 className="font-playfair pt-4 uppercase text-[24px] ">
          Personal info
        </h1>
      </div>
      <div className="flex flex-col px-5 md:px-12 xl:px-[80px] md:flex-row items-start justify-between gap-6 md:gap-16">
        <div className=" w-full xl:w-[50%] ">
          <div>
            <p className=" uppercase text-xs mb-4 ">Profile Picture</p>
            <div className="flex items-center justify-between mb-8 w-full">
              <div className="w-20 h-20 bg-[#EBE9E0] rounded-full flex items-center justify-center">
                {/* Placeholder for profile picture */}
              </div>
              <button className="ml-4 text-xs uppercase  hover:underline">
                Edit
              </button>
            </div>
          </div>
          {/* Info Section */}
          <div className="">
            {/* Name */}
            <div className="flex py-[16px] border-b border-[#EBE9E0] justify-between items-center">
              <div>
                <p className="mb-1 text-xs tracking-wide">NAME</p>
                <p className="text-sm text-[#919089]">Anna Smith</p>
              </div>
              <button className=" text-xs uppercase hover:underline">
                Edit
              </button>
            </div>

            {/* Username */}
            <div className="flex py-[16px] border-b border-[#EBE9E0] justify-between items-center">
              <div>
                <p className="mb-1 text-xs tracking-wide">USERNAME</p>
                <p className="text-sm text-[#919089]">Anna12</p>
              </div>
              <button className=" text-xs uppercase hover:underline">
                Edit
              </button>
            </div>

            {/* Email Address */}
            <div className="flex py-[16px] border-b border-[#EBE9E0] justify-between items-center">
              <div>
                <p className="mb-1 text-xs tracking-wide">EMAIL ADDRESS</p>
                <p className="text-sm text-[#919089]">h***o@designdrops.op</p>
              </div>
              <button className=" text-xs uppercase hover:underline">
                Edit
              </button>
            </div>

            {/* Phone Number */}
            <div className="flex py-[16px] border-b border-[#EBE9E0] justify-between items-center">
              <div>
                <p className="mb-1 text-xs tracking-wide">PHONE NUMBER</p>
                <p className="text-sm text-[#919089]">+31 231323432</p>
              </div>
              <button className=" text-xs uppercase hover:underline">
                Edit
              </button>
            </div>

            {/* Government ID */}
            <div className="flex py-[16px] border-b border-[#EBE9E0] justify-between items-center">
              <div>
                <p className="mb-1 text-xs tracking-wide">GOVERNMENT ID</p>
                <p className="text-sm text-[#919089] ">Not provided</p>
              </div>
              <button className=" text-xs uppercase hover:underline">
                Edit
              </button>
            </div>

            {/* Password */}
            <div className="flex py-[16px] justify-between items-center">
              <div>
                <p className="mb-1 text-xs tracking-wide">PASSWORD</p>
                <p className="text-sm text-[#919089]">●●●●●●●</p>
              </div>
              <button className=" text-xs uppercase hover:underline">
                Edit
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-xs 2xl:max-w-sm  bg-white border border-[#EBE9E0] rounded-[1px] p-6  shadow-sm">
          {/* Section 1 */}
          <div className="flex-col flex gap-4 ">
            <div className="text-gray-600 text-2xl">
              {/* Lock Icon */}
              <Image
                src="/images/icons/lock.svg"
                width={50}
                height={20}
                className="py-2"
                alt="lock"
              />
            </div>
            <div className=" space-y-3">
              <h2 className=" text-[20px] pb-2 font-playfair ">
                Which details can be edited?
              </h2>
              <p className="text-[16px] text-[#919089] ">
                Details The Antique Collector uses to verify your identity can’t
                be changed. Contact info and some personal details can be
                edited, but we may ask you to verify your identity the next time
                you book or create a listing.
              </p>
            </div>
          </div>
          <hr className="border-[#EBE9E0] my-[30px]" />
          {/* Section 2 */}
          <div className="flex-col flex gap-4  ">
            <div className="text-gray-600 text-2xl">
              {/* Lock Icon */}
              <Image
                src="/images/icons/eye.svg"
                width={50}
                height={20}
                alt="lock"
              />
            </div>
            <div className=" space-y-3 ">
              <h2 className=" text-[20px] pb-3 font-playfair ">
                What info is shared with others?
              </h2>
              <p className="text-[16px] text-[#919089] ">
                The Antique Collector only releases contact information for
                Sellers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
