"use client";
import React, { useState } from "react";
import Button from "@/components/ui/Button";
import Image from "next/image";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { LuUpload } from "react-icons/lu";
import Carousel from "@/components/ui/Carousel";
import { LivePresentation } from "@/components/shared/Livepresentation";
import Link from "next/link";

const slides = [
  {
    image: "/images/products/p1.png",
    alt: "Slide 1",
    caption: "Explore the World",
  },
  {
    image: "/images/products/p2.png",
    alt: "Slide 2",
    caption: "Discover New Horizons",
  },
  {
    image: "/images/products/p3.png",
    alt: "Slide 3",
    caption: "Adventure Awaits",
  },
  {
    image: "/images/products/p4.png",
    alt: "Slide 4",
    caption: "Discover New Horizons",
  },
  {
    image: "/images/products/p5.png",
    alt: "Slide 5",
    caption: "Adventure Awaits",
  },
];

const tableData = [
  {
    sellername: "Oliver bennett",
    title: "Home Decor originating from Italy",
    date: "15.12.2024",
    time: "5.00 PM (UTC)",
  },
  {
    sellername: "Oliver bennett",
    title: "Home Decor originating from Italy",
    date: "15.12.2024",
    time: "5.00 PM (UTC)",
  },
  {
    sellername: "Oliver bennett",
    title: "Home Decor originating from Italy",
    date: "15.12.2024",
    time: "5.00 PM (UTC)",
  },
];

const Presentations = () => {
  const [openPopup, setOpenPopup] = useState(false);

  const handleDialog = () => {
    setOpenPopup(!openPopup); // Toggles the popup state
  };

  return (
    <>
      <div>
        <div className="py-4 xl:py-[32px] px-4 md:px-6 lg:px-12 xl:px-[80px] border-b border-[#EBE9E0] flex flex-row flex-wrap gap-4 justify-between items-center">
          <div>
            <p className="text-[14px]">Home / Live Presentations</p>
            <h1 className="font-playfair pt-4 uppercase text-base md:text-[24px] ">
              Live Presentations
            </h1>
          </div>

          <div>
            <Link
              href={"/presentation/create"}
              className="text-xs xl:text-[12px] xl:w-[237px] xl:h-[48px] 2xl:text-sm hover:opacity-80 py-3 px-4 xl:px-6 text-white bg-[#0D0106] uppercase"
            >
              Create a live presentation
            </Link>
          </div>
        </div>

        <section className="py-4 px-4 md:px-6 lg:px-12 xl:px-[80px] lg:z-10">
          <h1 className="text-[32px] md:text-[44px] xl:text-[48px]  font-playfair capitalize">
            Discover Upcoming Live Showcases
          </h1>
          <p className="text-[16px] text-[#919089] py-3 ">
            Explore our schedule of live presentations where sellers unveil
            unique antiques, share their stories, and answer your questions in
            real time. Don’t miss the chance to connect and find your next
            treasure.
          </p>

          {/* Live Presentation section */}
          <div className="grid grid-cols-1 md:grid-cols-4  py-5">
            {Array.from({ length: 8 }).map((items) => (
              <div className="bg-[#FFFFFF] border border-[#EBE9E0] p-3">
                <div className="bg-[#463F3A] text-white py-2 px-[8px] text-xs flex flex-row justify-between gap-4">
                  <p className="text-[12px] text-white">12.23.2025</p>
                  <p className="text-[12px] text-white">5.00 pm (UTC)</p>
                </div>
                <div
                  style={{
                    height: "200px",
                    width: "full",
                    position: "relative",
                  }}
                >
                  <Image
                    src="/images/blogs/b1.png"
                    alt="img"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>

                <h3 className="text-[#463F3A] font-playfair text-[20px] pt-2">
                  Antique Showcase Live: Unveiling Rare jewelry Finds in Real
                  Time
                </h3>
                <p className="text-[#919089] uppercase pt-2 text-[12px]">
                  Patrick Boyd Carpenter
                </p>

                <div className="mt-5">
                  <Button
                    label="Set a reminder"
                    onClick={handleDialog}
                    className="uppercase w-full bg-[#463F3A] py-[16px]  text-[12px] hover:opacity-80"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-4 px-8 lg:px-12 xl:px-[80px]  md:block hidden">
          <h1 className="text-[48px] font-playfair capitalize">Time Table</h1>
          <p className="text-sm xl:text-[16px] text-[#919089] py-3">
            Explore our schedule of live presentations where sellers unveil
            unique antiques, share their stories, and answer your questions in
            real time. Don’t miss the chance to connect and find your next
            treasure.
          </p>

          <div className="py-6">
            <Table className="border  border-[#EBE9E0] shadow-md text-[#0D0106]">
              <TableHeader>
                <TableRow>
                  <TableHead className="uppercase text-[#919089] border-r  border-[#EBE9E0] text-center">
                    Seller Name
                  </TableHead>
                  <TableHead className="border-r uppercase border-[#EBE9E0] text-[#0D0106]">
                    Title
                  </TableHead>
                  <TableHead className="border-r uppercase  border-[#EBE9E0] text-[#0D0106]">
                    Date
                  </TableHead>
                  <TableHead className="border-r uppercase  border-[#EBE9E0] text-[#0D0106]">
                    Time
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="border-r  border-[#EBE9E0]">
                      <div className="flex flex-row items-center text-sm gap-2 ">
                        <div className="bg-[#EBE9E0] p-2 rounded-full w-10 h-10 flex items-center justify-center">
                          <Image
                            src="/"
                            width={10}
                            height={10}
                            className="rounded-full"
                            alt=""
                          />
                        </div>
                        <div>
                          <h1 className="text-[14px] uppercase text-[#919089]">
                            {row.sellername}
                          </h1>
                          <Button
                            label="Follow"
                            className="uppercase text-[12px] p-0 bg-transparent text-[#0D0106]"
                          />
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className=" border-r  border-[#EBE9E0]">
                      <p className="font-playfair text-[20px]">{row.title}</p>
                      <p className="text-gray-400 text-[14px] mt-1">
                        Description
                      </p>
                    </TableCell>
                    <TableCell className="border-r text-[14px]  border-[#EBE9E0] text-[#0D0106]">
                      {row.date}
                    </TableCell>
                    <TableCell className="border-r text-[14px] border-[#EBE9E0] text-[#0D0106]">
                      {row.time}
                    </TableCell>

                    <TableCell>
                      <Button
                        label="Set a reminder"
                        className="uppercase text-[12px] text-white w-full hover:opacity-80"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        <section className="py-4 px-4 md:px-6 lg:px-12 xl:px-[80px]">
          <h1 className="text-[32px] md:text-[48px] font-playfair capitalize">
            Catch Up on Recent Showcases
          </h1>
          <p className="text-[16px] py-4 text-[#919089] mb-3">
            Missed a live session? Watch the highlights and explore featured
            antiques from the past 24 hours before they’re gone.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Array.from({ length: 2 }).map((item) => (
              <div className="md:mx-2 ">
                <div className="border-b border-[#EBE9E0] pb-4">
                  <p className=" w-full bg-[#EBE9E0] py-2 items-center text-[12px] text-center">
                    Available to watch for another 14 hours
                  </p>
                  <div
                    style={{
                      height: "400px",
                      width: "full",
                      position: "relative",
                    }}
                  >
                    <Image
                      src="/images/blogs/b1.png"
                      alt="img"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>

                  <div className="flex flex-row items-center gap-4 py-2 justify-between">
                    <h1 className="font-playfair text-[20px] md:text-[24px]">
                      Home Decor originating from Italy
                    </h1>
                    <button>
                      <Image
                        src="/export.svg"
                        width={23}
                        height={23}
                        alt="upload"
                      />
                    </button>
                  </div>

                  <p className="text-[14px]">Streamed 22 hours ago</p>
                </div>

                <div>
                  <div className="flex flex-row justify-between py-4 items-center text-sm gap-2 ">
                    <div className="flex flex-row items-center gap-2">
                      <div className="bg-[#EBE9E0] p-2 rounded-full w-8 h-8 flex items-center justify-center">
                        <Image
                          src="/"
                          width={10}
                          height={10}
                          className="rounded-full"
                          alt=""
                        />
                      </div>

                      <h1 className="text-[14px] uppercase text-[#919089]">
                        Seller Name
                      </h1>
                    </div>

                    <Button
                      label="Follow"
                      className="uppercase text-[12px] p-0 bg-transparent text-[#0D0106]"
                    />
                  </div>
                  <h2 className="text-[16px] mt-2 font-playfair">
                    Featured Products in the Live
                  </h2>
                  <div className="flex items-center gap-2">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <Image
                        key={index}
                        src="/images/products/p5.png"
                        width={100}
                        height={100}
                        alt="product"
                      />
                    ))}
                  </div>
                  <button className=" w-full bg-[#0D0106] py-[16px] text-[12px] text-white">
                    Watch Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Dialog Popup */}
      {openPopup && <LivePresentation onClose={() => setOpenPopup(false)} />}
    </>
  );
};

export default Presentations;
