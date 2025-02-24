import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { intrests } from "@/lib/data";

const Aboutus = () => {
  return (
    <>
      <div>
        <div className="py-4 xl:py-[32px] px-4 md:px-6 lg:px-12 xl:px-[80px] border-b border-[#EBE9E0]">
          <h1 className="text-[14px] text-[#919089]">Home / About Us</h1>
          <h1 className="font-playfair pt-4 uppercase text-[24px] ">
            About Us
          </h1>
        </div>

        <div className=" bg-[#F9F8F3]  border border-[#F9F8F3] flex flex-col  pt-20 pb-16 px-4 relative">
          <div className="px-10">
            <div className="absolute -top-20 md:-top-10 right-8 xl:right-[4.6rem]">
              <Image
                src="/images/about/about1.png"
                width={190}
                height={100}
                alt="about pic1"
                className="
                xl:w-[284px] xl:h-[368px] 
                "
              />
            </div>
            <div className="absolute md:-bottom-8 xl:-bottom-16 md:block hidden">
              <Image
                src="/images/about/about2.png"
                width={200}
                height={80}
                alt="about pic1"
                className="
                xl:w-[284px] xl:h-[372px] 
                "
              />
            </div>

            <div className="absolute left-4 top-4 md:hidden block ">
              <Image
                src="/images/about/about2.png"
                width={140}
                height={80}
                alt="about pic1"
                className="
                "
              />
            </div>
          </div>

          <div className="mt-28 px-4 sm:mt-20 md:mt-0 flex flex-col gap-2 items-center justify-center">
            <h1 className="font-playfair text-3xl md:text-[64px] ">
              Our Story
            </h1>
            <p className=" max-w-lg md:max-w-xl font-openSans text-[16px] px-4 text-center md:mt-12">
              <span className=" font-bold px-1">The Antique Collector</span>
              was conceived when two dealers realised it was time for a change,
              that there needed to be a real community where dealers and
              collectors could meet, not just to buy wonderful antiques and
              jewelry, but to talk about them, to learn, to admire, and to
              share.
              <br /> <br />
              The two co-founders come with years of experience in the antiques
              and jewelry sector, both having run successful businesses for many
              years. They took the best of social media, and the best of online
              platforms, and created a new type of marketplace, <br /> <br />{" "}
              Our community of trusted sellers, operates without fees, or hefty
              commissions that we all know force prices up so much. We don’t
              sell your data. And if you get locked out of your account, we will
              make sure you get right back in!
            </p>
          </div>
        </div>

        <section className="py-4  px-4 md:px-6 lg:px-12 xl:px-[80px] flex flex-col-reverse md:flex-row gap-4 pt-36">
          <div className="w-full md:w-1/2">
            <Image
              src="/images/about/about3.png"
              width={480}
              height={250}
              alt="about pic1"
              className=" xl:w-[511px] xl:h-[355px]"
            />
          </div>

          <div className="w-full  md:w-1/2 flex flex-col justify-center ">
            {" "}
            {/* Updated this div */}
            <h1 className="font-playfair capitalize text-[26px] md:text-[32px]">
              Discover Antiques from all over the World
            </h1>
            <p className="text-[#666666] text-[14px] max-w-md py-2">
              The Antique Collector partners with dealers and auction houses
              from all over the world. From Antique and Vintage Jewelry, to
              Furniture and Decorative Antiques, all under one virtual roof.
            </p>
          </div>
        </section>

        <section className="px-4 md:px-6 lg:px-12 xl:px-[80px]  pt-16">
          <div>
            <h1 className="text-[26px]  capitalize md:text-[32px] font-playfair">
              Follow your favorite dealers
            </h1>
            <p className="text-[#666666] py-2 text-[14px]">
              Follow the people you love and see all their new posts. Or go to
              the categories and hunt down specific pieces.
            </p>

            <div className="flex flex-row flex-wrap justify-start md:justify-between items-center gap-12 md:gap-8 py-10">
              {intrests.map((intrest, index) => (
                <div
                  key={index}
                  className="flex flex-col flex-nowrap items-center justify-between"
                >
                  <div className="mb-3">
                    <Image
                      src={intrest.image}
                      alt="interest"
                      width={70}
                      height={70}
                      className=" "
                    />
                  </div>
                  <h2 className="uppercase text-xs">{intrest.name}</h2>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 md:px-6 lg:px-12 xl:px-[80px]  py-10 ">
          <div className="grid md:grid-cols-5 xl:gap-8 mb-8">
            <div className="col-span-2 flex flex-col justify-start   md:py-6">
              <h1 className="text-[24px] md:text-[32px] font-playfair">
                Liaise With Dealers Privately
              </h1>
              <p className="text-[16px] text-[#666666] py-2 mt-2">
                Liaise with dealers with our direct message, or their email, and
                arrange payment offline or on their website. The Antique
                Collector does not add fees or commission, or share your data
                with third parties unless directly related to app functionality.
              </p>
            </div>
            <div className="col-span-1 flex flex-row   items-center justify-center">
              <Image
                src="/images/about/about4.png"
                alt="About last image"
                width={160}
                height={160}
                className="xl:w-[269px]"
              />
            </div>
            <div className="col-span-2 flex flex-col justify-start p-6">
              <h1 className="text-[24px] md:text-[32px] font-playfair">
                Become a dealer and be seen
              </h1>
              <p className="text-[#666666] text-[16px] py-0 my-2">
                When you join our community your followers will be able to see
                all your new finds in the daily feed, in chronological order.
                Our algorithm does not choose what you see, you see who you
                follow in real time. No silly dances required for visibility.
              </p>
            </div>
          </div>
        </section>

        {/* how to join community */}

        <section className="bg-[#463F3A] flex text-white flex-col items-center justify-center ">
          <div className="w-full flex flex-col items-center px-3 md:w-1/2 py-12 text-center">
            <h1 className="text-[24px] md:text-[32px] font-playfair text-white pb-4 capitalize">
              How to Join our Community
            </h1>
            <p className="text-[#EBE9E0] max-w-xl text-[16px] font-openSans py-2">
              The Antique Collector is free for all buyers. Just download the
              app and login. Sellers download the app and login, and then fill
              in the online application here or on the app to start selling.
            </p>
            <p className="uppercase text-[#EBE9E0] text-[16px] tracking-wide py-4">
              We are offering free seller membership for early adopters
            </p>
            <p className="font-playfair uppercase text-[20px] text-white">
              Join now and be ahead of the crowd!
            </p>
            <Button
              label="become a seller"
              className="uppercase bg-[#EBE9E0] mt-6 py-[16px] text-[#463F3A] hover:opacity-80 text-[12px] px-8 w-3/4"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Aboutus;
