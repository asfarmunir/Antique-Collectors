import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiArrowSmallLeft } from "react-icons/hi2";

const page = () => {
  const sessionData = {
    duration: "1h 12m, 5.00 pm - 6.12 pm (UTC)",
    date: "15.12.2024",
    attendies: "230 total participants ",
    headerImage: "headerimage.jpg", // Replace with the actual image URL
  };

  return (
    <div className="">
      <div className="py-4 xl:py-[32px] px-4 md:px-6 lg:px-12 xl:px-[80px] border-b border-[#EBE9E0] flex flex-row flex-wrap gap-4 justify-start items-start">
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
        <div className="pb-4  mb-6">
          <h1 className="font-playfair pt-4 uppercase text-[24px] text-[#333333] 2xl:text-xl mb-2  ">
            Session Summary
          </h1>
          <p className=" text-[16px] text-[#333333] ">
            This Live Session has finished.
          </p>
        </div>

        {/* Editable fields */}
        <div className="space-y-6">
          {/* Title */}
          <div className="flex items-center justify-between border-b pb-4 border-[#EBE9E0]">
            <div>
              <h4 className="text-sm  tracking-wide uppercase mb-2">
                Duration
              </h4>
              <p className="text-[#919089] text-sm 2xl:text-sm max-w-md">
                {sessionData.duration}
              </p>
            </div>
          </div>

          {/* Date */}
          <div className="flex items-center justify-between border-b pb-4 border-[#EBE9E0]">
            <div>
              <h4 className="text-sm  tracking-wide uppercase mb-1">Date</h4>
              <p className="text-[#919089] text-sm 2xl:text-sm max-w-md">
                {sessionData.date}
              </p>
            </div>
          </div>

          {/* Time */}
          <div className="flex items-center justify-between border-b pb-4 border-[#EBE9E0]">
            <div>
              <h4 className="text-sm  tracking-wide uppercase mb-1">
                Number of Attendees
              </h4>
              <p className="text-[#919089] text-sm 2xl:text-sm max-w-md">
                {sessionData.attendies}
              </p>
            </div>
            <button className="border border-black uppercase px-6 py-4">
              view all attendees
            </button>
          </div>

          <div className="flex items-start justify-between border-b pb-4 border-[#EBE9E0]">
            <div>
              <h4 className="text-sm  tracking-wide uppercase mb-2">
                products
              </h4>
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
                  <p className="text-[#919089] text-sm 2xl:text-sm max-w-md">
                    {sessionData.headerImage}
                  </p>
                  <button className="text-xs font-medium hover:underline">
                    EDIT
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="py-4  mb-6">
            <h1 className="font-playfair pt-4 uppercase text-lg 2xl:text-xl mb-3  ">
              Chat History
            </h1>
            <p className="text-[#717171] text-sm mb-2 ">
              Buyer1 (VintageLover): Hi! Could you please show the clasp of the
              Art Deco necklace?
            </p>
            <p className="text-[#717171] text-sm mb-2 ">
              Buyer2 (CollectorGal): Is the emerald ring genuine, and do you
              have any provenance for it?
            </p>
            <p className="text-[#717171] text-sm mb-2 ">
              Buyer3 (HistoryBuff): Can you share more about the history of the
              cameo brooch?
            </p>
            <p className="text-[#717171] text-sm mb-2 ">
              Buyer1 (VintageLover): Thank you for the information. I'll think
              about the necklace.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
