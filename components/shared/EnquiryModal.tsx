"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/Dialog";
import Button from "../ui/Button";
import Image from "next/image";
import { MoreVertical } from "lucide-react";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { IoSend } from "react-icons/io5";

const EnquiryModal = () => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          label="Send a Query"
          className="bg-[#0D0106] uppercase border text-xs 2xl:text-sm border-black text-white w-full py-2.5 hover:bg-gray-800"
        />
      </DialogTrigger>
      <DialogContent className=" md:min-w-[800px]">
        <div className="w-full  bg-white">
          {/* Header */}
          <div className="border-b px-5 py-3 flex justify-between items-center">
            <h2 className="text-xl 2xl:text-2xl font-playfair ">
              SEND ENQUIRY
            </h2>
            <DialogClose className="text-gray-600 hover:text-black">
              {" "}
              ✖{" "}
            </DialogClose>
          </div>

          {/* Seller Info */}
          <div className="px-5 py-5 2xl:py-6 border-b border-[#EBE9E0] mb-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Image
                src="/images/sellers/s1.png"
                alt="Seller"
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-playfair">Seller Name</h3>
              <p className="text-xs text-gray-500">ANNA</p>
            </div>
            {/* Dropdown Options */}
            <div className="relative">
              <button onClick={() => setShowOptions(!showOptions)}>
                <MoreVertical className="w-5 h-5 text-gray-600" />
              </button>
              {showOptions && (
                <div className="absolute right-0 mt-2 w-48 bg-white border-gray-900 border-2 ">
                  <button className="block font-semibold w-full px-4 py-2 text-sm hover:bg-gray-100">
                    VIEW ALL MESSAGES
                  </button>
                  <button className="block font-semibold w-full px-4 py-2 text-sm border-gray-900 hover:bg-gray-100 border-t-2">
                    REPORT SELLER
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Enquiry Product Info */}
          <div className="bg-[#F9F8F3] mt-48 px-5 py-3 flex items-center gap-4">
            <Image
              src="/images/products/p1.png"
              alt="Product"
              width={50}
              height={50}
              className="rounded-md"
            />
            <div>
              <p className="text-sm font-playfair ">Sending an enquiry for:</p>
              <h4 className=" mt-1 text-sm">NATIVE IRON CHAIR</h4>
            </div>
          </div>

          {/* Message Input */}
          <div className=" border-t border-[#EBE9E0] px-4 mt-4 pt-4 flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <button>
                <HiOutlineEmojiHappy className="text-lg 2xl:text-xl" />
              </button>
              <input
                type="text"
                placeholder="Start typing..."
                className="w-full  py-2 text-sm  focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2">
              <button className="ml-2  ">
                <Image
                  src="/attach-circle.svg"
                  alt="Send"
                  width={17}
                  height={17}
                />
              </button>
              <button className="ml-2  ">
                <Image src="/send.svg" alt="Send" width={15} height={15} />
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EnquiryModal;
