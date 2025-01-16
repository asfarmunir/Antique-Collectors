import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="py-6 px-6 md:px-12">
        <h1 className="text-xs">Home / Fairs & Events</h1>
        <h1 className="font-playfair pt-4 uppercase text-xl ">
          fairs & events
        </h1>
      </div>
      <div className=" w-full bg-[#F9F8F3] p-5 md:p-12 space-y-10">
        <div className=" w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-16">
          <div className=" w-full">
            <Image
              src="/images/events/event1.png"
              height={300}
              width={400}
              alt="pic2"
              className=" w-full"
            />
          </div>
          <div className=" w-full">
            <h2 className="text-3xl 2xl:text-4xl  font-playfair">
              Milan Antique Fair
            </h2>
            <p className="text-[#666666] text-sm 2xl:text-base py-4 max-w-lg">
              Lorem ipsum dolor sit amet consectetur. Molestie adipiscing massa
              tincidunt purus tristique malesuada. Ultricies ac aliquet sapien
              quis magna accumsan purus. Massa enim sit.
            </p>
            <button>
              <a href="/events/1" className="text-sm uppercase">
                Read More
              </a>
            </button>
          </div>
        </div>
        <div className=" w-full flex flex-col md:flex-row-reverse items-center justify-between gap-6 md:gap-16">
          <div className=" w-full">
            <Image
              src="/images/events/event1.png"
              height={300}
              width={400}
              alt="pic2"
              className=" w-full"
            />
          </div>
          <div className=" w-full">
            <h2 className="text-3xl 2xl:text-4xl  font-playfair">
              Milan Antique Fair
            </h2>
            <p className="text-[#666666] text-sm 2xl:text-base py-4 max-w-lg">
              Lorem ipsum dolor sit amet consectetur. Molestie adipiscing massa
              tincidunt purus tristique malesuada. Ultricies ac aliquet sapien
              quis magna accumsan purus. Massa enim sit.
            </p>
            <button>
              <a href="/events/1" className="text-sm uppercase">
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
