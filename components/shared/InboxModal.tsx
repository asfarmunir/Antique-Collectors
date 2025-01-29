"use client";
import { SlOptions } from "react-icons/sl";
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
import { MoreVertical, Plus } from "lucide-react";
import Image from "next/image";
import Button from "../ui/Button";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { IoSend } from "react-icons/io5";

const messages = [
  {
    id: 1,
    name: "ANNA",
    message: "Great!",
    time: "2h",
    avatar: "/images/sellers/s1.png",
  },
  {
    id: 2,
    name: "ANNA",
    message: "Great!",
    time: "2h",
    avatar: "/images/sellers/s1.png",
  },
  {
    id: 3,
    name: "ANNA",
    message: "Great!",
    time: "2h",
    avatar: "/images/sellers/s1.png",
  },
  {
    id: 4,
    name: "ANNA",
    message: "Great!",
    time: "2h",
    avatar: "/images/sellers/s1.png",
  },
];
const EnquiryModal = () => {
  const [selectedMessage, setSelectedMessage] = useState(messages[0]);

  return (
    <Dialog>
      <DialogTrigger
        className="
      transition-transform transform hover:scale-105
      "
      >
        <Image src={"/images/message.svg"} alt="icon" width={25} height={25} />
      </DialogTrigger>
      <DialogContent className=" md:min-w-[900px] 2xl:min-w-[1000px] p-0">
        <div className="w-full  bg-white">
          {/* Header */}
          <div className="border-b pt-5 border-[#EBE9E0] pb-6 flex justify-between items-center">
            <h2 className="text-xl px-5 2xl:text-2xl font-playfair uppercase ">
              Messages
            </h2>
            <DialogClose className="text-gray-600 px-5 hover:text-black">
              {" "}
              ✖{" "}
            </DialogClose>
          </div>

          <div className="w-full px-5 max-w-5xl h-[500px] border border-[#EBE9E0]   bg-white flex">
            {/* Sidebar */}
            <div className="w-1/3 border-x border-[#EBE9E0] p-5 flex flex-col">
              {/* Header */}
              <div className="flex justify-between border-b border-[#EBE9E0] pb-3.5 items-center mb-4">
                <h2 className="text-lg font-playfair flex items-center">
                  MESSAGES{" "}
                  <span className="ml-2 text-xs  bg-[#F9F8F3] px-2 pb-1 ">
                    {messages.length}
                  </span>
                </h2>
                <button className="bg-black text-white p-4 ">
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Search Bar */}
              <input
                type="text"
                placeholder="Search"
                className="w-full px-3 py-2 text-sm border border-[#EBE9E0]  focus:outline-none mb-4"
              />

              {/* Message List */}
              <div className="overflow-y-auto flex-1">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex items-center gap-3 px-3 py-2  cursor-pointer transition ${
                      selectedMessage.id === msg.id
                        ? "bg-[#F9F8F3]"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => setSelectedMessage(msg)}
                  >
                    <Image
                      src={msg.avatar}
                      alt="Avatar"
                      width={50}
                      height={50}
                      className="-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-semibold">{msg.name} </h4>
                        <p className="text-xs font-normal text-gray-500">
                          {msg.time}
                        </p>
                      </div>

                      <p className="text-sm text-gray-800 font-medium">
                        {msg.message}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Section */}
            <div className="w-2/3 flex flex-col">
              {/* Chat Header */}
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
                  <button>
                    <SlOptions className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Chat Area */}
              <div className="flex-1 flex flex-col justify-center items-center text-gray-500">
                <p className="text-sm">{selectedMessage.message}</p>
                <span className="text-xs mt-2">{selectedMessage.time}</span>
              </div>

              {/* Message Input */}
              <div className=" border-t border-[#EBE9E0] px-4 mt-4 py-4 flex items-center justify-between w-full">
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
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EnquiryModal;
