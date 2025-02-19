"use client";
import React, { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { BsChatSquareDots, BsEmojiSmile } from "react-icons/bs";
import { CgMailReply } from "react-icons/cg";

import {
  RiArrowDropUpLine,
  RiArrowDropDownLine,
  RiArrowLeftLine,
  RiArrowRightLine,
} from "react-icons/ri";

import { FaRegCommentDots } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useProducts from "@/hooks/useProducts";
import { useProductDetails } from "@/hooks/useProducts";
import { HiOutlineUpload } from "react-icons/hi";
import { VscSend } from "react-icons/vsc";
import EnquiryModal from "@/components/shared/EnquiryModal";
import { IoIosHeartEmpty } from "react-icons/io";

const ProductDetails = ({ params }: { params: any }) => {
  //  const [products, setProducts] = useState<any>(null); // Full product list
  const { products, toggleFavorite, isFavorite } = useProducts();
  const router = useRouter();
  const { id } = params;
  const { productDetails } = useProductDetails(id);

  console.log("detail", productDetails);

  const images = [
    "/images/products/p1.png",
    "/images/blogs/b2.png",
    "/images/blogs/b3.png",
    "/images/blogs/b1.png",
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Handle image selection
  const handleImageClick = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleProductDetails = (id: any) => {
    router.push(`/products/${id}`);
  };

  // Handle navigation via arrow icons
  const handleMoveUp = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const handleMoveDown = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
      <div>
        <div className="py-4 px-4 md:px-6 lg:px-12 border-y border-[#EBE9E0]">
          <h1 className="text-xs text-[#919089]">
            Home / Products / {productDetails?.category}
          </h1>
          <h1 className="font-playfair pt-4 uppercase text-[24px] ">
            {productDetails?.title}
          </h1>
        </div>

        {/* Product details here */}
        <div className="grid grid-cols-1 md:grid-cols-7 gap-2 pt-4 px-4">
          {/* Left Column: Image Gallery */}
          <div className="md:col-span-3 md:h-[350px]">
            <div className="flex w-full flex-col-reverse md:flex-row  md:border-r border-[#EBE9E0] h-full">
              {/* Scrollable Image Gallery */}
              <div className="w-full md:w-1/3 flex lg:flex-col items-center gap-1">
                <button
                  className="text-3xl cursor-pointer"
                  onClick={handleMoveUp}
                >
                  {" "}
                  <span className="hidden lg:block">
                    <RiArrowDropUpLine />
                  </span>
                  <span className="block lg:hidden">
                    <RiArrowLeftLine className="text-sm" />
                  </span>
                </button>
                <div className="flex  lg:flex-col gap-4  max-h-40 md:max-h-none">
                  {images.map((image, index) => (
                    <Image
                      key={index}
                      src={image}
                      alt={`Image ${index + 1}`}
                      width={60}
                      height={60}
                      className={`border border-[#EBE9E0] cursor-pointer ${
                        index === selectedImageIndex
                          ? "ring-2 ring-[#EBE9E0]"
                          : ""
                      }`}
                      onClick={handleImageClick}
                    />
                  ))}
                </div>
                <button
                  onClick={handleMoveDown}
                  className="text-3xl cursor-pointer"
                >
                  <span className="hidden lg:block">
                    <RiArrowDropDownLine />
                  </span>
                  <span className="block lg:hidden">
                    <RiArrowRightLine className="text-sm" />
                  </span>
                </button>
              </div>

              {/* Main Image */}
              <div className="w-full py-3 flex h-auto ">
                <Image
                  src={images[selectedImageIndex]}
                  alt="Selected image"
                  width={350}
                  height={350}
                  className=""
                />
              </div>
            </div>
          </div>

          {/* Right Column: Product Details */}
          <div className=" md:col-span-4 md:h-[350px] mt-12 md:mt-0">
            <div className="flex flex-col px-4 md:px-6 lg:px-10">
              {/* Seller Info */}
              <div className="flex items-center justify-between border-b pb-2 border-[#EBE9E0]">
                <div className="flex items-center text-sm gap-3">
                  <div className="bg-[#EBE9E0] p-2 rounded-full w-8 h-8 flex items-center justify-center">
                    <Image
                      src="/avatar.svg"
                      width={10}
                      height={10}
                      className="rounded-full"
                      alt="Seller logo"
                    />
                  </div>
                  <h1 className="uppercase font-playfair text-[20px]">
                    Seller Name
                  </h1>
                </div>
                <h1 className="text-[#0D0106] text-[12px] cursor-pointer hover:underline">
                  FOLLOW
                </h1>
              </div>

              {/* Product Title */}
              <h1 className="text-[20px] md:text-xl uppercase font-playfair my-4">
                {productDetails?.title}
              </h1>

              {/* Product Description */}
              <p className="text-[#919089]  mb-4 text-sm md:text-[16px]">
                {productDetails?.description} Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Est, nemo labore, culpa
              </p>

              {/* Product Specifications */}
              <div className="flex flex-wrap justify-between py-3 gap-4 px-4 bg-[#F9F8F3] ">
                <div className="text-[12px] ">
                  <p className="text-[#919089] uppercase">Price</p>
                  <p className="mt-2">$ {productDetails?.price}</p>
                </div>
                <div className="text-[12px]">
                  <p className="text-[#919089] uppercase">Measurements</p>
                  <p className="mt-2">
                    {productDetails?.dimensions?.width} CM X{" "}
                    {productDetails?.dimensions?.height} CM
                  </p>
                </div>
                <div className="text-[12px]">
                  <p className="text-[#919089] uppercase">Date & Origin</p>
                  <p className="mt-2">140CM X 120CM</p>
                </div>
                <div className="text-[12px]">
                  <p className="text-[#919089] uppercase">Materials</p>
                  <p className="mt-2">140CM X 120CM</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-6">
                <Button
                  label="Add to favorite"
                  icon={<IoIosHeartEmpty className="text-xl" />}
                  className="bg-white uppercase text-xs hover:bg-[#0D0106] hover:text-white text-nowrap 2xl:text-[12px] py-[16px] border border-[#0D0106] text-[#0D0106] w-[70%]   "
                />
                <EnquiryModal />
              </div>
            </div>
          </div>
        </div>

        <div className="md:px-8 grid grid-cols-1 md:grid-cols-7 md:mb-8  mt-4">
          <div className=" md:col-span-3 mx-4">
            {/* Left Side: Like and Comment */}
            <div className="flex items-center justify-between">
              <div className="flex flex-row gap-6 border-b pb-2 border-[#EBE9E0]">
                <button className="flex flex-row gap-2 items-center ">
                  <FaRegHeart className="text-xl" /> 23
                </button>
                <button className="flex flex-row gap-2 items-center ">
                  <Image
                    src="/images/message2.svg"
                    alt="icon"
                    width={25}
                    height={25}
                  />
                  32
                </button>
              </div>
              <HiOutlineUpload className="text-2xl" />
            </div>
            {Array.from({ length: 2 }).map((_, index) => (
              <div className="border-b border-[#EBE9E0] p-3 my-3 ">
                <h3 className="uppercase text-semibold text-[14px] text-[#0D0106]">
                  Anna J.
                </h3>
                <p className="text-[12px] py-3 text-[#919089]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Veritatis facilis non dolorum veniam odit quasi odio earum,
                  fugit suscipit maxime eaque fugiat reiciendis voluptates id
                  voluptatibus nam, mollitia distinctio necessitatibus!
                </p>

                <div className="flex flex-row gap-6  text-[#919089]">
                  <button className="flex flex-row gap-2 items-center ">
                    <FaRegHeart className="text-xl]" />{" "}
                    <span className="text-[#463F3A]"> 23</span>
                  </button>
                  <button className="flex flex-row gap-2 items-center ">
                    <CgMailReply className="text-xl" />{" "}
                    <span className="text-[#463F3A]"> 35</span>
                  </button>
                </div>
                <div className=" p-3 pl-8 my-3 ">
                  <h3 className="uppercase text-semibold text-[14px] text-[#0D0106]">
                    Anna J.
                  </h3>
                  <p className="text-[12px] py-3 text-[#919089]">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Veritatis facilis non dolorum veniam odit quasi odio earum,
                    fugit suscipit maxime eaque fugiat reiciendis voluptates id
                    voluptatibus nam, mollitia distinctio necessitatibus!
                  </p>

                  <div className="flex flex-row gap-6  text-[#919089]">
                    <button className="flex flex-row gap-2 items-center ">
                      <FaRegHeart className="text-xl]" />{" "}
                      <span className="text-[#463F3A]"> 23</span>
                    </button>
                    <button className="flex flex-row gap-2 items-center ">
                      <CgMailReply className="text-xl" />{" "}
                      <span className="text-[#463F3A]"> 35</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex mb-5 items-center justify-between ">
              <div className=" inline-flex items-center gap-2 ">
                <BsEmojiSmile className="text-balance text-lg" />
                <input
                  type="text"
                  placeholder="Write a comment"
                  className="w-full  p-2"
                />
              </div>
              <button className=" text-[#919089]">
                <VscSend />
              </button>
            </div>
          </div>
          <div className="md:col-span-4">
            <div className="flex flex-row flex-wrap items-center justify-between gap-2 mx-4 md:ml-10 my-2 border-b pb-3 border-[#EBE9E0]">
              <p className="text-sm md:text-[20px] font-playfair uppercase">
                Other Products by Seller Name
              </p>
              <Link
                href={"/sellers"}
                className="uppercase text-[#463F3A] text-[12px]"
              >
                View All
              </Link>
            </div>
            <div className=" w-full pr-4">
              <div className="flex flex-row flex-nowrap md:flex-nowrap overflow-x-auto  lg:ml-10 my-6">
                {products.map((p, index) => {
                  const isFavorited = isFavorite(p.id);
                  return (
                    <div
                      key={p.id}
                      className={`flex-shrink-0 w-full md:w-1/2 flex flex-col  border-r border-[#EBE9E0] last:border-r-0 relative px-6`}
                      onClick={() => handleProductDetails(p.id)}
                    >
                      <div className=" flex items-center justify-center relative group">
                        <div className="absolute top-2 right-4 z-20">
                          <button
                            onClick={() => toggleFavorite(p.id)}
                            aria-label={`Add ${p.title} to favorites`}
                            className="text-xl font-semibold focus:outline-none"
                          >
                            {isFavorited ? (
                              <FaHeart className="text-red-500" /> // Filled heart for favorited
                            ) : (
                              <FaRegHeart className="text-gray-500" /> // Outline heart for non-favorited
                            )}
                          </button>
                        </div>
                        <Image
                          src="/images/products/p1.png"
                          alt={p.title}
                          width={150}
                          className="w-full h-full object-contain object-center transform hover:scale-105 transition duration-500 ease-in-out"
                          height={150}
                        />

                        {/* Likes and Comments Overlay on Hover */}
                        <div className="absolute inset-0 bg-white bg-opacity-80   flex flex-row gap-4 items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-sm text-[#0D0106] flex items-center gap-4">
                            <FaRegHeart className="text-lg" /> {p.likes || 34}
                          </p>
                          <p className="text-sm text-[#0D0106] flex items-center gap-4">
                            <FaRegCommentDots className="text-lg" />{" "}
                            {p.comments || 34}
                          </p>
                        </div>
                      </div>
                      <div className="w-full mt-4">
                        <h2 className="text-[14px] md:text-base">{p.title}</h2>
                        <div className="flex flex-row gap-4 justify-between">
                          <p className="text-[#919089] mb-1 text-[14px]">
                            {p.brand}
                          </p>
                          <Link
                            href={"#"}
                            className="text-[#919089] text-[14px]"
                          >
                            FOLLOW
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* recommeded product add below */}

        <div className="px-4 md:px-6 lg:px-12">
          <div className="flex flex-row flex-wrap items-center justify-between gap-6 mt-8 pb-3">
            <h2 className="text-sm md:text-[20px] font-playfair uppercase">
              Recommedned Product for you
            </h2>
            <Link href={"/products"} className="text-[12px] ">
              VIEW ALL
            </Link>
          </div>

          <div className="border-y border-[#EBE9E0] w-full py-2">
            <div className="flex flex-row flex-nowrap md:flex-nowrap overflow-x-auto  my-6">
              {products.map((p, index) => {
                const isFavorited = isFavorite(p.id);
                return (
                  <div
                    key={p.id}
                    className={`flex-shrink-0 w-full md:w-1/4 flex flex-col  border-r border-[#EBE9E0] last:border-r-0 relative px-6`}
                    onClick={() => handleProductDetails(p.id)}
                  >
                    <div className=" flex items-center justify-center relative group">
                      <div className="absolute top-2 right-4 z-20">
                        <button
                          onClick={() => toggleFavorite(p.id)}
                          aria-label={`Add ${p.title} to favorites`}
                          className="text-xl font-semibold focus:outline-none"
                        >
                          {isFavorited ? (
                            <FaHeart className="text-red-500" /> // Filled heart for favorited
                          ) : (
                            <FaRegHeart className="text-gray-500" /> // Outline heart for non-favorited
                          )}
                        </button>
                      </div>
                      <Image
                        src="/images/products/p5.png"
                        alt={p.title}
                        width={150}
                        className="w-full h-full object-contain object-center transform hover:scale-105 transition duration-500 ease-in-out"
                        height={150}
                      />

                      {/* Likes and Comments Overlay on Hover */}
                      <div className="absolute inset-0 bg-white bg-opacity-80   flex flex-row gap-4 items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-sm text-[#0D0106] flex items-center gap-4">
                          <FaRegHeart className="text-lg" /> {p.likes || 34}
                        </p>
                        <p className="text-sm text-[#0D0106] flex items-center gap-4">
                          <FaRegCommentDots className="text-lg" />{" "}
                          {p.comments || 34}
                        </p>
                      </div>
                    </div>
                    <div className="w-full mt-4">
                      <h2 className="text-[14px] md:text-[16px] mb-2">
                        {p.title}
                      </h2>
                      <div className="flex flex-row gap-4 justify-between">
                        <p className="text-[#919089] mb-1 text-[14px]">
                          {p.brand}
                        </p>
                        <Link href={"#"} className="text-[#919089] text-[14px]">
                          FOLLOW
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
