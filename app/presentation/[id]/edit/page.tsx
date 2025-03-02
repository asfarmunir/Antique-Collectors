import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiArrowSmallLeft } from "react-icons/hi2";

const page = () => {
  const sessionData = {
    title: "Home Decor originating from Italy",
    date: "15.12.2024",
    time: "5.00 pm (UTC)",
    description:
      "An exclusive look at a Home Decor collection from Italy, to make your furniture stand out.",
    headerImage: "headerimage.jpg", // Replace with the actual image URL
  };

  return (
    <div className="">
      <div className="py-4 px-4 md:px-6 lg:px-12 xl:px-[80px] xl:py-[32px] border-b border-[#EBE9E0] flex flex-row flex-wrap gap-4 justify-start items-start">
        <Link href={"/presentation/1"}>
          <HiArrowSmallLeft className="text-[#0D0106] text-2xl cursor-pointer" />
        </Link>
        <div>
          <p className="text-xs">
            Home / Account / Live Pressentations / Home Decor originating from
            Italy
          </p>
          <h1 className="font-playfair pt-4 uppercase text-base md:text-[24px] ">
            Home Decor originating from Italy
          </h1>
        </div>
      </div>
      <div className="py-8 px-4 md:px-6 lg:px-12 xl:px-[80px] ">
        {/* Info text */}
        <div className="flex items-center justify-between  pb-4  mb-6">
          <div className="text-[16px] ">
            You can edit the Live Session up to 48 hours before the start of the
            event.
          </div>

          {/* Cancel button */}
          <button className="text-xs 2xl:text-sm font-medium hover:underline">
            CANCEL LIVE PRESENTATION
          </button>
        </div>

        {/* Editable fields */}
        <div className="space-y-6">
          {/* Title */}
          <div className="flex items-center justify-between border-b pb-4 border-[#EBE9E0]">
            <div>
              <h4 className="text-sm tracking-wide uppercase mb-1">Title</h4>
              <p className="text-xs 2xl:text-sm max-w-md text-[#919089]">
                {sessionData.title}
              </p>
            </div>
            <button className="text-sm font-medium hover:underline">
              EDIT
            </button>
          </div>

          {/* Date */}
          <div className="flex items-center justify-between border-b pb-4 border-[#EBE9E0]">
            <div>
              <h4 className="text-sm tracking-wide uppercase mb-1">Date</h4>
              <p className="text-xs 2xl:text-sm max-w-md text-[#919089]">
                {sessionData.date}
              </p>
            </div>
            <button className="text-sm font-medium hover:underline">
              EDIT
            </button>
          </div>

          {/* Time */}
          <div className="flex items-center justify-between border-b pb-4 border-[#EBE9E0]">
            <div>
              <h4 className="text-sm tracking-wide uppercase mb-1">Time</h4>
              <p className="text-xs 2xl:text-sm max-w-md text-[#919089]">
                {sessionData.time}
              </p>
            </div>
            <button className="text-sm font-medium hover:underline">
              EDIT
            </button>
          </div>

          {/* Description */}
          <div className="flex items-center justify-between border-b pb-4 border-[#EBE9E0]">
            <div>
              <h4 className="text-sm tracking-wide uppercase mb-1">
                Description
              </h4>
              <p className="text-xs 2xl:text-sm max-w-md text-[#919089]">
                {sessionData.description}
              </p>
            </div>
            <button className="text-sm font-medium hover:underline">
              EDIT
            </button>
          </div>

          {/* Header Image */}
          <div className="flex items-center justify-between border-b pb-4 border-[#EBE9E0]">
            <div>
              <h4 className="text-sm tracking-wide uppercase mb-1">
                Header Image
              </h4>
              <div className="flex flex-col items-start space-y-2">
                <div className="w-56 h-32 bg-gray-100 border border-gray-300"></div>
                <p className="text-xs 2xl:text-sm max-w-md text-[#919089]">
                  {sessionData.headerImage}
                </p>
              </div>
            </div>
            <button className="text-sm font-medium hover:underline">
              EDIT
            </button>
          </div>
          <div className="flex items-start justify-between border-b pb-4 border-[#EBE9E0]">
            <div>
              <h4 className="text-sm tracking-wide uppercase mb-1">products</h4>
              <div className="flex flex-col items-start space-y-2">
                <div className="w-64 h-48 bg-gray-100 border border-gray-300">
                  <Image
                    src="/images/products/p2.png"
                    alt={"hehe"}
                    width={150}
                    height={150}
                    className="w-full h-full object-contain object-center transform hover:scale-105 transition duration-500 ease-in-out"
                  />
                </div>
                <div className="flex items-center justify-between w-full">
                  <p className="text-xs 2xl:text-sm max-w-md text-[#919089]">
                    {sessionData.headerImage}
                  </p>
                  <button className="text-xs font-medium hover:underline">
                    EDIT
                  </button>
                </div>
              </div>
            </div>
            <button className="text-sm font-medium hover:underline">
              EDIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
