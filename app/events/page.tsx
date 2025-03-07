import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="py-4 xl:py-[32px] px-4 md:px-6 lg:px-12 xl:px-[80px] border-b border-[#EBE9E0]">
        <h1 className="text-xs text-[#919089]">Home / Fairs & Events</h1>
        <h1 className="font-playfair pt-4 uppercase text-[24px] ">
          fairs & events
        </h1>
      </div>
      <div className=" w-full  p-5 md:p-12 xl:px-[80px] space-y-16 xl:space-y-20 border-b border-[#EBE9E0] md:pb-20">
        <div className=" w-full flex flex-col md:flex-row items-end justify-between gap-6 md:gap-12">
          <div className=" w-full relative flex justify-center">
            <Image
              src="/images/events/event1.png"
              height={300}
              width={400}
              alt="pic2"
              className=" w-full "
            />
            <div className=" absolute flex items-center justify-between -bottom-4 md:-bottom-10 xl:-bottom-6 w-[85%] bg-[#F9F8F3] p-2 md:p-4">
              <p className="text-xs md:text-sm xl:text-[12px]">
                15.12.2024, Monday
              </p>
              <p className="text-xs md:text-sm xl:text-[12px]">5.00 pm (UTC)</p>
            </div>
          </div>
          <div className=" w-full">
            <h2 className="text-3xl xl:text-[48px]  font-playfair">
              Milan Antique Fair
            </h2>
            <p className="text-[#919089] font-normal text-sm xl:text-[16px] py-[24px] max-w-lg">
              Lorem ipsum dolor sit amet consectetur. Molestie adipiscing massa
              tincidunt purus tristique malesuada. Ultricies ac aliquet sapien
              quis magna accumsan purus. Massa enim sit.
            </p>
            <button>
              <a href="/events/1" className="text-[12px] uppercase">
                Read More
              </a>
            </button>
          </div>
        </div>
        <div className=" w-full flex flex-col md:flex-row-reverse items-end justify-between gap-6 md:gap-12">
          <div className=" w-full relative flex justify-center">
            <Image
              src="/images/events/event1.png"
              height={300}
              width={400}
              alt="pic2"
              className=" w-full"
            />
            <div className=" absolute flex items-center justify-between -bottom-4 md:-bottom-10   xl:-bottom-6 w-[85%] bg-[#F9F8F3] p-2 md:p-4">
              <p className="text-xs md:text-sm xl:text-[12px]">
                15.12.2024, Monday
              </p>
              <p className="text-xs md:text-sm xl:text-[12px]">5.00 pm (UTC)</p>
            </div>
          </div>
          <div className=" w-full flex flex-col items-start md:items-end">
            <h2 className="text-3xl xl:text-[48px]  font-playfair">
              Milan Antique Fair
            </h2>
            <p className="text-[#919089] text-sm font-normal xl:text-[16px] md:text-end py-[24px] max-w-lg">
              Lorem ipsum dolor sit amet consectetur. Molestie adipiscing massa
              tincidunt purus tristique malesuada. Ultricies ac aliquet sapien
              quis magna accumsan purus. Massa enim sit.
            </p>
            <button>
              <a href="/events/1" className="text-[12px] uppercase">
                Read More
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
