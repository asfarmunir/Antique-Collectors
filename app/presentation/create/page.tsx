"use client";
import Dropdown from "@/components/ui/DropDown";
import useProducts from "@/hooks/useProducts";
import { sortOptions } from "@/lib/constants";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BiCandles } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { FaHeart, FaRegCommentDots } from "react-icons/fa";
import { HiViewGrid } from "react-icons/hi";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { TbLayoutDistributeHorizontal } from "react-icons/tb";

const page: React.FC = () => {
  const [formData, setFormData] = useState({
    sessionTitle: "",
    date: "",
    time: "",
    description: "",
    headerImage: null as File | null,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, headerImage: e.target.files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    alert("Live presentation scheduled successfully!");
  };

  const { products, toggleFavorite, isFavorite } = useProducts();
  const [isGridView, setIsGridView] = useState(true); // State for grid layout
  const [filterOpen, setFilterOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null); // Tracks which dropdown is open
  const [isViewMore, setIsViewMore] = useState(true);
  const [gridProductCount, setGridProductCount] = useState(20); // Number of products to show in grid layout
  const [horizontalProductCount, setHorizontalProductCount] = useState(10);

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

  const handleGridView = () => {
    setIsGridView(true);
  };

  const handleHorizontalView = () => {
    setIsGridView(false);
  };

  const handleSelect = (item: string) => {
    console.log("Selected:", item);
  };

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index); // Toggle the open dropdown
  };

  const handleViewToggle = () => {
    if (isViewMore) {
      setGridProductCount(products.length);
      setHorizontalProductCount(products.length);
    } else {
      setGridProductCount(20);
      setHorizontalProductCount(10);
    }

    setIsViewMore(!isViewMore);
  };

  return (
    <>
      <div className="px-5 md:px-12">
        <div className="py-6 border-b border border-[#EBE9E0] pb-5 mb-9">
          <h1 className="text-[14px] text-[#919089]">
            Home / Live Presentation / Create a Live Presentation
          </h1>
          <h1 className="font-playfair pt-4 uppercase text-[24px] 2xl:text-2xl ">
            Create a Live Presentation
          </h1>
        </div>
        <div className=" w-full ">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Form Section */}
            <div className="md:col-span-3 border-r border-[#EBE9E0] sm:pr-8">
              <h1 className="text-2xl font-playfair  mb-6">
                Schedule A Live Presentation
              </h1>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Session Title */}
                <div>
                  <label
                    htmlFor="sessionTitle"
                    className="block text-xs 2xl:text-sm uppercase mb-2 font-medium text-gray-900"
                  >
                    What's Your Event About?
                  </label>
                  <input
                    type="text"
                    id="sessionTitle"
                    name="sessionTitle"
                    value={formData.sessionTitle}
                    onChange={handleInputChange}
                    placeholder="Session Title"
                    className="w-full  border border-[#EBE9E0]  shadow-sm p-3 text-xs 2xl:text-sm focus:ring focus:ring-primary-50 focus:border-primary-50"
                  />
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-xs 2xl:text-sm uppercase mb-2 font-medium text-gray-900"
                    >
                      When Will You Go Live?
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full border border-[#EBE9E0]  shadow-sm p-3 text-xs 2xl:text-sm focus:ring focus:ring-primary-50 focus:border-primary-50"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="time"
                      className="block text-xs 2xl:text-sm uppercase mb-2 font-medium text-gray-900"
                    >
                      Pick a Time
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full border border-[#EBE9E0]  shadow-sm p-3 text-xs 2xl:text-sm focus:ring focus:ring-primary-50 focus:border-primary-50"
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label
                    htmlFor="description"
                    className="block text-xs 2xl:text-sm uppercase mb-2 font-medium text-gray-900"
                  >
                    Description (Optional)
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Tell your audience what to expect"
                    className="w-full border border-[#EBE9E0]  shadow-sm p-3 text-xs 2xl:text-sm h-24 focus:ring focus:ring-primary-50 focus:border-primary-50"
                  ></textarea>
                </div>

                {/* Upload Header Image */}
                <div>
                  <label
                    htmlFor="headerImage"
                    className="block text-xs 2xl:text-sm uppercase mb-2 font-medium text-gray-900"
                  >
                    Upload A Header Image
                  </label>
                  <div className="border-2 border-dashed bg-primary-50 h-24 flex items-center justify-center  border-[#EBE9E0]  p-6 text-center">
                    <input
                      type="file"
                      id="headerImage"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="headerImage"
                      className="text-gray-400 text-xs 2xl:text-sm uppercase cursor-pointer"
                    >
                      upload image here
                    </label>
                    {formData.headerImage && (
                      <p className="mt-2 text-sm text-gray-700">
                        {formData.headerImage.name}
                      </p>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#0D0106] text-white py-3  text-sm font-medium hover:bg-gray-800 focus:ring-2 focus:ring-primary-50 focus:ring-offset-2"
                >
                  Schedule Live Presentation
                </button>
              </form>
            </div>

            {/* Instructions Section */}
            <div className="bg-primary-50 p-6 h-fit  shadow md:col-span-2">
              <h2 className="text-xl 2xl:text-2xl font-playfair  mb-4">
                How does it work?
              </h2>
              <p className=" text-[#919089] text-sm 2xl:text-base pb-4 border-b border-[#9190898a] mb-4">
                Host live sessions to showcase your treasures and connect with
                collectors in real time.
              </p>
              <div className="list-decimal list-inside text-gray-700 space-y-2">
                <div className=" space-y-2">
                  <p className=" uppercase font-semibold mb-2  text-sm 2xl:text-base">
                    1: Schedule the live session
                  </p>{" "}
                  <p className="text-xs 2xl:text-sm text-[#919089]">
                    Select details, schedule date and time, and pick an
                    eye-catching title to attract buyers to sign up for your
                    live.
                  </p>
                </div>
                <div className=" space-y-2">
                  <p className=" uppercase font-semibold mb-2  text-sm 2xl:text-base">
                    2: Get Ready to Go Live
                  </p>{" "}
                  <p className="text-xs 2xl:text-sm text-[#919089]">
                    Preview your setup and ensure everything is picture-perfect
                    before you start.
                  </p>
                </div>
                <div className=" space-y-2">
                  <p className=" uppercase font-semibold mb-2  text-sm 2xl:text-base">
                    3: You’re Live!
                  </p>{" "}
                  <p className="text-xs 2xl:text-sm text-[#919089]">
                    Showcase your collection, answer questions, and connect with
                    buyers in real time.
                  </p>
                </div>
                <div className=" space-y-2">
                  <p className=" uppercase font-semibold mb-2  text-sm 2xl:text-base">
                    4. Post-Live Summary
                  </p>{" "}
                  <p className="text-xs 2xl:text-sm text-[#919089]">
                    See how your session performed and follow up with interested
                    buyers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Filter and Sort Section */}

      <div className="px-5 md:px-12 mt-8 md:mt-12 ">
        <h1 className="font-playfair pt-4 uppercase text-[24px] ">
          Products to Showcase (Optional)
        </h1>
        <p className="text-sm text-[#ebe3bd]">
          Select the items you’ll feature.
        </p>
      </div>
      <section className="bg-[#F9F8F3] py-4 px-4 md:px-6 mt-5 lg:px-12">
        <div className=" flex flex-wrap flex-row gap-5 justify-between items-center">
          {/* Filter button */}
          <div
            onClick={() => setFilterOpen(!filterOpen)}
            className=" inline-flex cursor-pointer flex-row items-center gap-2 py-3 px-8 bg-[#EBE9E0]"
          >
            <BiCandles className="text-lg text-[#0D0106]" />
            <p className="text-xs text-[#0D0106] ">FILTER</p>
          </div>
          <p className="uppercase text-xs md:hidden">
            Showing {products.length} Results
          </p>

          <div className="w-full md:w-auto flex flex-row justify-between gap-4 items-center">
            <div className="lg:flex flex-row items-center gap-4 md:block hidden">
              <p className="uppercase text-nowrap text-xs">
                Showing {products.length} Results
              </p>

              <div className="flex flex-row gap-2 items-center ">
                <HiViewGrid
                  className={`text-lg cursor-pointer ${
                    isGridView ? "text-[#0D0106]" : "text-gray-400"
                  }`}
                  onClick={handleGridView}
                />
                <TbLayoutDistributeHorizontal
                  className={`text-lg cursor-pointer ${
                    !isGridView ? "text-[#0D0106]" : "text-gray-400"
                  }`}
                  onClick={handleHorizontalView}
                />
              </div>
            </div>

            <div className="w-full flex flex-row items-center gap-5">
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
      <div className={`col-span-${filterOpen ? 3 : 4} py-8 md:px-12 md:py-2`}>
        {isGridView ? (
          <>
            <div
              className={` grid grid-cols-1 sm:grid-cols-4 gap-4  md:grid-cols-${
                filterOpen ? 3 : 4
              } lg:grid-cols-${filterOpen ? 3 : 4}`}
            >
              {products.slice(0, gridProductCount).map((p, index) => {
                const columns = 3; // Adjust based on your actual column count for grid view
                const isLastRow =
                  Math.floor(index / columns) ===
                  Math.floor((products.length - 1) / columns);
                const isLastColumn = (index + 1) % columns === 0;
                const isFavorited = isFavorite(p.id);

                return (
                  <div
                    key={p.id}
                    className={`flex flex-col stroke-[#0D0106] md:py-6 px-6 cursor-pointer border-[#EBE9E0]
                                      ${!isLastRow ? "md:border-b" : ""} 
                                      ${
                                        !isLastColumn
                                          ? "md:border-r -mr-[3px]"
                                          : ""
                                      }`}
                    // onClick={() => handleProductDetails(p.id)}
                  >
                    <div className="flex items-center justify-center relative group">
                      <div className="absolute top-2 right-4 z-20">
                        <button
                          onClick={() => toggleFavorite(p.id)}
                          aria-label={`Add ${p.title} to favorites`}
                          className="text-xl font-semibold focus:outline-none"
                        >
                          {isFavorited ? (
                            <MdCheckBox className="text-gray-500" /> // Filled heart for favorited
                          ) : (
                            <MdCheckBoxOutlineBlank className="text-gray-500" /> // Outline heart for non-favorited
                          )}
                        </button>
                      </div>
                      <Image
                        src="/images/products/p2.png"
                        alt={p.title}
                        width={150}
                        height={150}
                        className="w-full h-full object-contain object-center transform hover:scale-105 transition duration-500 ease-in-out"
                      />

                      {/* Likes and Comments Overlay on Hover */}
                      <div className="absolute inset-0 bg-white bg-opacity-80   flex flex-row gap-4 items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-sm text-[#0D0106] flex items-center gap-4">
                          <CiHeart className="text-lg" /> {p.likes || 34}
                        </p>
                        <p className="text-sm text-[#0D0106] flex items-center gap-4">
                          <FaRegCommentDots className="text-lg" />{" "}
                          {p.comments || 34}
                        </p>
                      </div>
                    </div>
                    <div className="w-full pt-4 flex flex-col justify-between">
                      <div className="text-sm flex flex-row justify-between gap-4">
                        <p className="text-[#919089] mb-1">{p.brand}</p>
                        <p className="text-[#919089]">FOLLOW</p>
                      </div>
                      <h2 className="text-sm pt-2 md:text-[14px] uppercase">
                        {p.title}
                      </h2>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <div className="py-6 text-[#0D0106] px-4">
            {products.slice(0, gridProductCount).map((item) => (
              <div className="mb-10" key={item.id}>
                <div className="flex  flex-row items-center justify-between border-b pb-2 border-[#EBE9E0]">
                  <div className="flex flex-row items-center text-sm gap-3">
                    <div className="bg-[#EBE9E0] p-2 rounded-full w-8 h-8 flex items-center justify-center">
                      <Image
                        src="/"
                        width={10}
                        height={10}
                        className="rounded-full"
                        alt=""
                      />
                    </div>
                    <h1 className="font-playfair capitalize text-[20px]">
                      {item.brand}
                    </h1>
                  </div>
                  <h1 className="text-[#0D0106] text-sm">FOLLOW</h1>
                </div>

                <div className="flex flex-col">
                  <div className="mx-auto w-96 p-4">
                    <Image
                      src={"/images/products/p1.png"}
                      alt="product"
                      width={0}
                      height={0}
                      layout="responsive"
                      className="transform  hover:scale-105 transition duration-500 ease-in-out"
                    />
                  </div>

                  <div className="flex flex-row items-center gap-6 mt-2">
                    <button className="flex flex-row gap-2 items-center">
                      <CiHeart className="text-xl" /> {item.likes || "23"}
                    </button>
                    <button className="flex flex-row gap-2 items-center">
                      <FaRegCommentDots className="text-xl" />{" "}
                      {item.comments || "23"}
                    </button>
                  </div>

                  <div>
                    <p className="py-2 uppercase">{item.title}</p>
                    <p className="text-sm text-[#463F3A]">{item.description}</p>
                  </div>

                  <button className="uppercase text-sm text-start pt-5">
                    READ MORE
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default page;
