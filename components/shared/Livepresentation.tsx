"use client";

import { LuUpload } from "react-icons/lu";
import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/Dialog";
import Image from "next/image";
import Button from "../ui/Button";
import { RxCross2 } from "react-icons/rx";
import Carousel from "../ui/Carousel";

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

export function LivePresentation({ onClose }: { onClose: any }) {
  return (
    <div className="relative">
      <Dialog open onOpenChange={onClose}>
        <DialogContent
          className="font-playfair max-h-[90vh] p-0 overflow-y-auto"
          customWidth="max-w-2xl"
        >
          <DialogHeader className="font-playfair text-xl border-b border-[#EBE9E0] p-[32px]">
            <DialogTitle>
              <Button
                onClick={onClose}
                icon={<RxCross2 className="text-[#0D0106]" />}
                label=""
                className="bg-transparent absolute right-0 top-4"
              />
              <h1 className="font-playfair text-[24px] uppercase">
                Live Presentation
              </h1>
            </DialogTitle>
          </DialogHeader>

          <div className="mt-2 px-6 xl:px-[80px] p-4 pb-10">
            <div className="bg-[#463F3A] text-white py-[16px] px-[8px] text-xs flex flex-row justify-between gap-4">
              <p className="text-[14px] font-openSans text-white">12.23.2025</p>
              <p className="text-[14px] font-openSans text-white">
                5.00 pm (UTC)
              </p>
            </div>
            <div className="">
              <div className="pb-2">
                <div
                  style={{
                    height: "300px",
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
                  <h1 className="font-playfair text-[24px]">
                    Home Decor originating from Italy
                  </h1>
                  <button>
                    <Image
                      src="/export.svg"
                      width={20}
                      height={20}
                      alt="heart"
                    />
                  </button>
                </div>
              </div>

              <div className="flex flex-row justify-between py-3 items-center text-sm gap-2 border-y border-[#EBE9E0]   ">
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

                  <h1 className="text-[14px] uppercase text-[#919089] font-sans">
                    Seller Name
                  </h1>
                </div>

                <Button
                  label="Follow"
                  className="uppercase font-sans text-[12px] p-0 bg-transparent text-[#0D0106]"
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
            </div>
            <Button
              onClick={onClose}
              label="Set a Reminder"
              className="text-sm py-[16px] text-[12px] uppercase font-sans hover:opacity-80 w-full"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
