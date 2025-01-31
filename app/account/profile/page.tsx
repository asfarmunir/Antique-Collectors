import Image from "next/image";
import React from "react";

const PersonalInfo = () => {
  return (
    <div className="px-5 md:px-12">
      <div className="py-6 xl:py-[32px] border-b border-[#EBE9E0] pb-5 mb-9">
        <h1 className="text-xs">Home / My Account</h1>
        <h1 className="font-playfair pt-4 uppercase text-xl ">My account</h1>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-16">
        <div className=" w-full">
          <div>
            <p className=" uppercase mb-4 ">Profile Picture</p>
            <div className="flex items-center justify-between mb-8 w-full">
              <div className="w-20 h-20 bg-[#EBE9E0] rounded-full flex items-center justify-center">
                {/* Placeholder for profile picture */}
              </div>
              <button className="ml-4  hover:underline">Edit</button>
            </div>
          </div>
          {/* Info Section */}
          <div className="space-y-6">
            {/* Name */}
            <div className="flex pb-3 border-b justify-between items-center">
              <div>
                <p className="mb-1">NAME</p>
                <p className="text-sm text-[#919089]">Anna Smith</p>
              </div>
              <button className=" hover:underline">Edit</button>
            </div>

            {/* Username */}
            <div className="flex pb-3 border-b justify-between items-center">
              <div>
                <p className="mb-1">USERNAME</p>
                <p className="text-sm text-[#919089]">Anna12</p>
              </div>
              <button className=" hover:underline">Edit</button>
            </div>

            {/* Email Address */}
            <div className="flex pb-3 border-b justify-between items-center">
              <div>
                <p className="mb-1">EMAIL ADDRESS</p>
                <p className="text-sm text-[#919089]">h***o@designdrops.op</p>
              </div>
              <button className=" hover:underline">Edit</button>
            </div>

            {/* Phone Number */}
            <div className="flex pb-3 border-b justify-between items-center">
              <div>
                <p className="mb-1">PHONE NUMBER</p>
                <p className="text-sm text-[#919089]">+31 231323432</p>
              </div>
              <button className=" hover:underline">Edit</button>
            </div>

            {/* Government ID */}
            <div className="flex pb-3 border-b justify-between items-center">
              <div>
                <p className="mb-1">GOVERNMENT ID</p>
                <p className="text-sm text-[#919089] ">Not provided</p>
              </div>
              <button className=" hover:underline">Edit</button>
            </div>

            {/* Password */}
            <div className="flex pb-3 border-b justify-between items-center">
              <div>
                <p className="mb-1">PASSWORD</p>
                <p className="text-sm text-[#919089]">●●●●●●●</p>
              </div>
              <button className=" hover:underline">Edit</button>
            </div>
          </div>
        </div>

        <div className="max-w-xs 2xl:max-w-sm  bg-white border border-[#EBE9E0] rounded-lg p-6 space-y-6 shadow-sm">
          {/* Section 1 */}
          <div className="flex-col flex gap-4 ">
            <div className="text-gray-600 text-2xl">
              {/* Lock Icon */}
              <Image
                src="/images/icons/lock.svg"
                width={50}
                height={20}
                alt="lock"
              />
            </div>
            <div className=" space-y-3">
              <h2 className="font-semibold text-lg font-playfair text-gray-800">
                Which details can be edited?
              </h2>
              <p className="text-sm text-gray-600">
                Details The Antique Collector uses to verify your identity can’t
                be changed. Contact info and some personal details can be
                edited, but we may ask you to verify your identity the next time
                you book or create a listing.
              </p>
            </div>
          </div>
          <hr className="border-[#EBE9E0]" />
          {/* Section 2 */}
          <div className="flex-col flex gap-4 min-h-56 ">
            <div className="text-gray-600 text-2xl">
              {/* Lock Icon */}
              <Image
                src="/images/icons/eye.svg"
                width={50}
                height={20}
                alt="lock"
              />
            </div>
            <div className=" space-y-3">
              <h2 className="font-semibold text-lg font-playfair text-gray-800">
                What info is shared with others?
              </h2>
              <p className="text-sm text-gray-600">
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
