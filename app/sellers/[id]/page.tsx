"use client";
import React, { useState, useEffect } from "react";
import { BiCandles } from "react-icons/bi";
import { HiViewGrid } from "react-icons/hi";
import { TbLayoutDistributeHorizontal } from "react-icons/tb";
import Image from "next/image";
import Dropdown from "@/components/ui/DropDown";
import Checkbox1 from "@/components/ui/tickbox";
import { TiMinus, TiPlus } from "react-icons/ti";
import FilterComponent from "@/components/shared/SidebarFilter";
import Button from "@/components/ui/Button";
import { CiHeart } from "react-icons/ci";
import { FaRegCommentDots } from "react-icons/fa";
import Link from "next/link";
import { VscVerifiedFilled } from "react-icons/vsc";
import InputField from "@/components/ui/InputField";
import { checkboxLabels, conditionLabels, sortOptions } from "@/lib/constants";
import { sellers } from "@/lib/data";
import useProducts from "@/hooks/useProducts";
import { useSellerDetails } from "@/hooks/useSellers";
import { useRouter } from "next/navigation";
import { FaHeart } from "react-icons/fa";

const Seller = () => {
  // const {sellerDetails, error} = useSellerDetails();
  const { products, isFavorite } = useProducts();
  const [gridView, setGridView] = useState(true);
  const [filterOpen, setFilterOpen] = useState(true);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [visisbleProducts, setVisibleProducts] = useState(24);
  const [showAll, setShowAll] = useState(false);
  const router = useRouter();

  const { toggleFavorite } = useProducts();
  const handleSelect = (item: string) => {
    console.log("Selected:", item);
  };

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  // Open filter sidebar by default on large screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setFilterOpen(true);
      } else {
        setFilterOpen(false);
      }
    };

    handleResize(); // Set initial state based on screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleViewMore = () => {
    if (showAll) {
      setVisibleProducts(24);
      setShowAll(false);
    } else {
      setVisibleProducts(23);
      setShowAll(true);
    }
  };

  const handleProductDetails = (id: any) => {
    router.push(`/products/${id}`);
  };

  return (
    <>
      <div>
        <div className="py-4 px-8 border-b border-[#EBE9E0]">
          <h1 className="text-xs">Home / Sellers / A-Z Sellers</h1>
          <h1 className="font-playfair pt-4 uppercase text-xl ">
            Antique Animal Jewelry
          </h1>
        </div>

        <div className="relative md:px-6 pb-4">
          <div className="relative z-10 top-14 flex items-center justify-center md:justify-start md:left-5">
            <Image
              src="/images/sellers/s1.png"
              alt="seller logo"
              width={110}
              height={110}
            />
          </div>

          <div className="bg-[#F9F8F3] text-[#0D0106] w-full capitalize p-4 relative pt-16 ">
            <div className="flex flex-col md:flex-row w-full bg-red-50 items-center text-center justify-between  md:text-left gap-2 pt-1">
              <h1 className="font-playfair text-2xl">Antique Animal Jewelry</h1>

              <div className="flex flex-col  md:flex-row gap-3">
                <Button
                  label="Follow"
                  className="uppercase text-white text-xs px-7"
                />
                <Button
                  label="Message Seller"
                  className="uppercase text-[#0D0106] bg-transparent border border-[#0D0106] px-7 text-xs"
                />
              </div>
            </div>
            <p className="capitalize text-xs pt-2 text-center md:text-left">
              Location, UK
            </p>
            <p className="py-2 text-xs text-center md:text-left">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
              assumenda blanditiis beatae voluptatem cumque placeat adipisci
              voluptatibus, ea quae quod laudantium eligendi repudiandae, enim,
              ex nam esse ullam obcaecati nihil!
            </p>
            <Link
              href={"#"}
              className="text-sm lowercase text-[#463F3A] text-center md:text-left"
            >
              https://www.antiqueanimaljewelry.com{" "}
            </Link>
          </div>
        </div>

        <section className="bg-[#F9F8F3] py-4 px-4 md:px-6 lg:px-12 ">
          <div className="flex flex-wrap gap-5 flex-row justify-between items-center">
            {/* Filter button */}
            <div
              onClick={() => setFilterOpen(!filterOpen)}
              className="inline-flex cursor-pointer flex-row items-center gap-2 py-3 px-8 bg-[#EBE9E0]"
            >
              <BiCandles className="text-lg text-[#0D0106]" />
              <p className="text-xs text-[#0D0106] ">FILTER</p>
            </div>
            <p className="uppercase text-xs md:hidden">Showing 23 Results</p>

            <div className="w-full md:w-auto flex flex-row justify-between gap-8 items-center">
              <div className="lg:flex flex-row items-center gap-4 md:block hidden">
                <p className="uppercase text-xs">Showing 320 Results</p>

                <div className="flex flex-row gap-2 items-center ">
                  {/* Grid view button */}
                  <HiViewGrid
                    className={`text-lg cursor-pointer ${
                      gridView
                        ? "text-black opacity-100"
                        : "text-gray-400 opacity-50"
                    }`}
                    onClick={() => setGridView(true)}
                  />
                  {/* Horizontal layout button */}
                  <TbLayoutDistributeHorizontal
                    className={`text-lg cursor-pointer ${
                      !gridView
                        ? "text-black opacity-100"
                        : "text-gray-400 opacity-50"
                    }`}
                    onClick={() => setGridView(false)}
                  />
                </div>
              </div>

              <div className="w-full md:w-auto flex flex-row items-center gap-5">
                <p className="uppercase text-xs text-nowrap">Sort by</p>
                <div className="w-full md:w-full">
                  <Dropdown
                    label="Sort it"
                    items={sortOptions}
                    onSelect={handleSelect}
                    isOpen={openDropdown === 1}
                    toggleDropdown={() => toggleDropdown(1)}
                    className="bg-white w-full border border-[#EBE9E0]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {filterOpen && (
          <div className="bg-white p-4 md:hidden">
            <FilterComponent
              checkboxlablel={[
                "Roman - 753 BC - 476 AD",
                "Elizabethan - 1558 - 1603",
              ]}
              checkboxlablel1={["Excellent Condition", "Very Good Condition"]}
              filtersToShow={[
                "category",
                "eraPeriod",
                "condition",
                "sellerLocation",
              ]}
            />
            <Button
              label="Apply Filters"
              onClick={() => setFilterOpen(false)}
              className="mt-4 w-full"
            />
          </div>
        )}

        <div
          className={`px-4 md:px-6 lg:px-12 md:grid py-6 md:grid-cols-${
            filterOpen ? 4 : 4
          }`}
        >
          {filterOpen && (
            <div className="md:col-span-1  md:block hidden">
              <FilterComponent
                checkboxlablel={checkboxLabels}
                checkboxlablel1={conditionLabels}
                filtersToShow={[
                  "category",
                  "eraPeriod",
                  "condition",
                  "sellerLocation",
                  "color",
                  "availability",
                ]}
              />
            </div>
          )}
          <div className={`col-span-${filterOpen ? 3 : 4} `}>
            {gridView ? (
              <>
                <div
                  className={` grid grid-cols-1  md:grid-cols-${
                    filterOpen ? 3 : 4
                  }   gap-5 `}
                >
                  {products.map((p, index) => {
                    const columns = 3; // Adjust based on your actual column count for grid view
                    const isLastRow =
                      Math.floor(index / columns) ===
                      Math.floor((products.length - 1) / columns);
                    const isLastColumn = (index + 1) % columns === 0;
                    const isFavorited = isFavorite(p.id);

                    return (
                      <div
                        key={index}
                        className={`flex  gap-4 md:gap-0 flex-col stroke-black  px-6 cursor-pointer border-[#EBE9E0]
                                        ${!isLastRow ? "md:border-b" : ""} 
                                        ${
                                          !isLastColumn
                                            ? "md:border-r -mr-[3px]"
                                            : ""
                                        }`}
                        onClick={() => handleProductDetails(p.id)}
                      >
                        <div className="  flex items-center justify-center relative group">
                          <div className="absolute top-2 right-4 z-20">
                            <button
                              onClick={() => toggleFavorite(p.id)}
                              aria-label={`Add ${p.title} to favorites`}
                              className="text-xl font-semibold focus:outline-none"
                            >
                              {isFavorited ? (
                                <FaHeart className="text-red-500" /> // Filled heart for favorited
                              ) : (
                                <CiHeart className="text-gray-500" /> // Outline heart for non-favorited
                              )}
                            </button>
                          </div>
                          <Image
                            src="/images/products/p1.png"
                            alt="product"
                            width={150}
                            className=" w-full h-full object-contain object-center hover:scale-105 transition duration-500 ease-in-out"
                            height={150}
                          />

                          {/* Likes and Comments Overlay on Hover */}
                          <div className="absolute inset-0 bg-white bg-opacity-80   flex flex-row gap-4 items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-sm text-black flex items-center gap-4">
                              <CiHeart className="text-lg" /> {p.likes || 34}
                            </p>
                            <p className="text-sm text-black flex items-center gap-4">
                              <FaRegCommentDots className="text-lg" />{" "}
                              {p.comments || 34}
                            </p>
                          </div>
                        </div>
                        <div className=" w-full pt-4 flex flex-col  justify-between">
                          <div className="text-xs flex flex-row justify-between gap-4">
                            <p className="text-[#919089] mb-1 ">Seller Name</p>
                            <p className="text-[#919089] ">FOLLOW</p>
                          </div>
                          <h2 className="text-xs md:text-sm">
                            NATIVE IRON CHAIR
                          </h2>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              <>
                <div
                  className={` grid grid-cols-1  md:grid-cols-${
                    filterOpen ? 3 : 4
                  }   gap-5 `}
                >
                  {products.map((p, index) => {
                    const columns = 3; // Adjust based on your actual column count for grid view
                    const isLastRow =
                      Math.floor(index / columns) ===
                      Math.floor((products.length - 1) / columns);
                    const isLastColumn = (index + 1) % columns === 0;
                    const isFavorited = isFavorite(p.id);

                    return (
                      <div
                        key={index}
                        className={`flex  gap-4 md:gap-0 flex-col stroke-black  px-6 cursor-pointer border-[#EBE9E0]
                                        ${!isLastRow ? "md:border-b" : ""} 
                                        ${
                                          !isLastColumn
                                            ? "md:border-r -mr-[3px]"
                                            : ""
                                        }`}
                        onClick={() => handleProductDetails(p.id)}
                      >
                        <div className="  flex items-center justify-center relative group">
                          <div className="absolute top-2 right-4 z-20">
                            <button
                              onClick={() => toggleFavorite(p.id)}
                              aria-label={`Add ${p.title} to favorites`}
                              className="text-xl font-semibold focus:outline-none"
                            >
                              {isFavorited ? (
                                <FaHeart className="text-red-500" /> // Filled heart for favorited
                              ) : (
                                <CiHeart className="text-gray-500" /> // Outline heart for non-favorited
                              )}
                            </button>
                          </div>
                          <Image
                            src="/images/products/p1.png"
                            alt="product"
                            width={150}
                            className=" w-full h-full object-contain object-center hover:scale-105 transition duration-500 ease-in-out"
                            height={150}
                          />

                          {/* Likes and Comments Overlay on Hover */}
                          <div className="absolute inset-0 bg-white bg-opacity-80   flex flex-row gap-4 items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-sm text-black flex items-center gap-4">
                              <CiHeart className="text-lg" /> {p.likes || 34}
                            </p>
                            <p className="text-sm text-black flex items-center gap-4">
                              <FaRegCommentDots className="text-lg" />{" "}
                              {p.comments || 34}
                            </p>
                          </div>
                        </div>
                        <div className=" w-full pt-4 flex flex-col  justify-between">
                          <div className="text-xs flex flex-row justify-between gap-4">
                            <p className="text-[#919089] mb-1 ">Seller Name</p>
                            <p className="text-[#919089] ">FOLLOW</p>
                          </div>
                          <h2 className="text-xs md:text-sm">
                            NATIVE IRON CHAIR
                          </h2>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="mt-6">
          <div className="flex flex-row justify-center items-center py-6">
            <Button
              label={showAll ? "View Less" : "View More"}
              onClick={handleViewMore}
              className="uppercase border border-[#0D0106] py-2 px-8 bg-white text-[#0D0106]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Seller;