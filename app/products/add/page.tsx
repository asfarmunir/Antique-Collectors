"use client";
import Button from "@/components/ui/Button";
import Image from "next/image";
import React, { useState, ChangeEvent } from "react";
import { CiHeart } from "react-icons/ci";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import {
  RiArrowDropDownLine,
  RiArrowDropUpLine,
  RiArrowLeftLine,
  RiArrowRightLine,
} from "react-icons/ri";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
interface FormData {
  category: string;
  subcategory: string;
  productName: string;
  dateOrigin: string;
  description: string;
  headerImage: File | null;
  otherImages: File[];
  feed: string;
  price?: string;
  material?: string;
  condition?: string;
  dimensions?: {
    width: string;
    height: string;
    length: string;
  };
  websiteLink?: string;
  hallmarks?: string;
  availability?: "Available" | "Not Available";
}

const page = () => {
  const [formData, setFormData] = useState<FormData>({
    category: "",
    subcategory: "",
    productName: "",
    dateOrigin: "",
    description: "",
    headerImage: null,
    otherImages: [],
    feed: "",
    price: "",
    material: "",
    condition: "",
    dimensions: { width: "", height: "", length: "" },
    websiteLink: "",
    hallmarks: "",
    availability: "Available",
  });
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const images = [
    "/images/products/p1.png",
    "/images/blogs/b2.png",
    "/images/blogs/b3.png",
    "/images/blogs/b1.png",
  ];

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name.includes("dimensions.")) {
      const [_, key] = name.split(".");
      setFormData({
        ...formData,
        //@ts-ignore
        dimensions: { ...formData.dimensions, [key]: value },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleImageUpload = (
    e: ChangeEvent<HTMLInputElement>,
    type: "header" | "other"
  ) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    if (type === "header") {
      setFormData({ ...formData, headerImage: files[0] || null });
    } else {
      setFormData({ ...formData, otherImages: files });
    }
  };

  const handleImageClick = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
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
    <div className="border-b border-[#EBE9E0] pb-12">
      <div className="py-6 px-5 md:px-12 xl:px-[80px] xl:py-[32px] border-b border-[#EBE9E0] pb-5 mb-9">
        <h1 className="text-xs text-[#919089]">
          My Products / Add a new Product
        </h1>
        <h1 className="font-playfair pt-4 uppercase text-[24px] ">
          Add a new Product
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-8 px-5 md:px-12 xl:px-[80px]   md:py-6">
        {/* Form Section */}
        <div className="w-full md:w-1/2  ">
          <div className="bg-primary-50 p-6 w-full ">
            <h2 className="text-[20px] font-playfair  uppercase  mb-6">
              Mandatory Fields
            </h2>

            {/* Category */}
            <label className="block mb-4">
              <span className=" text-xs 2xl:text-sm tracking-wide uppercase  ">
                Category
              </span>

              <Select>
                <SelectTrigger className="w-full text-xs 2xl:text-sm mt-1 xl:p-4 rounded-none  border border-[#EBE9E0] text-[#919089] ">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </label>

            {/* Subcategory */}
            <label className="block mb-4">
              <span className=" text-xs 2xl:text-sm tracking-wide uppercase  ">
                Subcategory
              </span>
              {/* <select
                name="subcategory"
                value={formData.subcategory}
                onChange={handleInputChange}
                className="block w-full mt-1 text-xs 2xl:text-sm  p-3 border text-[#919089]"
              >
                <option value="">-Select-</option>
                <option value="subcategory1">Subcategory 1</option>
                <option value="subcategory2">Subcategory 2</option>
              </select> */}
              <Select value={formData.subcategory}>
                <SelectTrigger className="w-full text-xs 2xl:text-sm mt-1 xl:p-4 rounded-none  border border-[#EBE9E0] text-[#919089] ">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </label>

            {/* Product Name */}
            <label className="block mb-4">
              <span className=" text-xs 2xl:text-sm tracking-wide uppercase  ">
                Product Name
              </span>
              <input
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleInputChange}
                className="block w-full mt-1 text-xs 2xl:text-sm  p-3 border "
                placeholder="Title for your Product"
              />
            </label>

            {/* Date & Origin */}
            <label className="block mb-4">
              <span className=" text-xs 2xl:text-sm tracking-wide uppercase  ">
                Date & Origin
              </span>
              <input
                type="text"
                name="dateOrigin"
                value={formData.dateOrigin}
                onChange={handleInputChange}
                className="block w-full mt-1 p-3 text-xs 2xl:text-sm  border "
              />
            </label>

            {/* Product Description */}
            <label className="block mb-4">
              <span className=" text-xs 2xl:text-sm tracking-wide uppercase  ">
                Product Description
              </span>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={3}
                maxLength={300}
                className="block w-full mt-1 p-3 text-xs 2xl:text-sm  border "
                placeholder="Describe your product"
              ></textarea>
              <span className="text-[#919089] text-sm">
                {formData.description.length} / 300
              </span>
            </label>

            {/* Upload Header Image */}
            <label className="block mb-6">
              <span className=" text-xs 2xl:text-sm tracking-wide uppercase  ">
                Upload a Header Image
              </span>
              {/* <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, "header")}
              className="block w-full mt-3 p-3 border-dashed border  text-[#919089] cursor-pointer"
            /> */}
              <div className=" w-full bg-white dashed-border  mt-2 h-28 flex items-center justify-center">
                <span className="text-[#919089] text-xs 2xl:text-sm uppercase">
                  Drag and Drop or <br /> Upload image here
                </span>
              </div>
            </label>

            {/* Upload Other Images */}
            <label className="block mb-6">
              <span className=" text-xs 2xl:text-sm tracking-wide uppercase  ">
                Upload Other Images & Videos
              </span>
              <div className=" w-full bg-white dashed-border  mt-2 h-28 flex items-center justify-center">
                <span className="text-[#919089] text-xs 2xl:text-sm uppercase">
                  Drag and Drop or <br /> Upload image here
                </span>
              </div>
              {/* <input
              type="file"
              accept="image/*,video/*"
              multiple
              onChange={(e) => handleImageUpload(e, "other")}
              className="block w-full mt-3 p-3 border-dashed border  text-[#919089] cursor-pointer"
            /> */}
            </label>

            {/* Choose Feed */}
            <label className="block mb-4">
              <span className=" text-xs 2xl:text-sm tracking-wide uppercase  ">
                Choose Feed
              </span>
              {/* <select
                name="feed"
                value={formData.feed}
                onChange={handleInputChange}
                className="block w-full mt-1 p-3 text-xs 2xl:text-sm  border text-[#919089] "
              >
                <option value="">-Select-</option>
                <option value="feed1">Feed 1</option>
                <option value="feed2">Feed 2</option>
              </select> */}
              <Select>
                <SelectTrigger className="w-full text-xs 2xl:text-sm mt-1 xl:p-4 rounded-none  border border-[#EBE9E0] text-[#919089] ">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </label>
          </div>
          <div className=" w-full p-6">
            <h2 className="text-[20px] uppercase font-playfair mb-6">
              Optional
            </h2>

            {/* Price */}
            <label className="block mb-4">
              <span className=" tracking-wide text-xs 2xl:text-sm uppercase">
                Price
              </span>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="block w-full mt-1 p-3 text-xs border"
                placeholder="$ (USD)"
              />
            </label>

            {/* Material */}
            <label className="block mb-4">
              <span className=" tracking-wide text-xs 2xl:text-sm uppercase">
                Material
              </span>
              {/* <select
                name="material"
                value={formData.material}
                onChange={handleInputChange}
                className="block w-full mt-1 p-3 text-xs border"
              >
                <option value="">-Select-</option>
                <option value="Wood">Wood</option>
                <option value="Metal">Metal</option>
                <option value="Plastic">Plastic</option>
              </select> */}
              <Select>
                <SelectTrigger className="w-full text-xs 2xl:text-sm mt-1 xl:p-3 rounded-none  border border-[#EBE9E0] text-[#919089] ">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </label>

            {/* Condition */}
            <label className="block mb-4">
              <span className=" tracking-wide text-xs 2xl:text-sm uppercase">
                Condition
              </span>
              {/* <select
                name="condition"
                value={formData.condition}
                onChange={handleInputChange}
                className="block w-full mt-1 p-3 text-xs border"
              >
                <option value="">-Select-</option>
                <option value="New">New</option>
                <option value="Used">Used</option>
              </select> */}
              <Select>
                <SelectTrigger className="w-full text-xs 2xl:text-sm mt-1 xl:p-4 rounded-none  border border-[#EBE9E0] text-[#919089] ">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </label>

            {/* Measurements */}
            <label className="block mb-4">
              <span className=" tracking-wide text-xs 2xl:text-sm uppercase">
                Measurements
              </span>
              <div className="flex flex-col gap-4 mt-2">
                <div className="flex items-center gap-3">
                  <span className="  text-xs 2xl:text-sm w-12">Width</span>
                  {/* <input
                    type="text"
                    name="dimensions.width"
                    value={formData.dimensions?.width}
                    onChange={handleInputChange}
                    className="block w-full mt-1 p-3 text-xs border"
                    placeholder="Width (cm)"
                  /> */}
                  <Select>
                    <SelectTrigger className="w-full text-xs 2xl:text-sm mt-1 xl:p-4 rounded-none  border border-[#EBE9E0] text-[#919089] ">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-3">
                  <span className="  text-xs 2xl:text-sm w-12">Height</span>
                  {/* <input
                    type="text"
                    name="dimensions.height"
                    value={formData.dimensions?.height}
                    onChange={handleInputChange}
                    className="block w-full mt-1 p-3 text-xs border"
                    placeholder="Height (cm)"
                  /> */}
                  <Select>
                    <SelectTrigger className="w-full text-xs 2xl:text-sm mt-1 xl:p-4 rounded-none  border border-[#EBE9E0] text-[#919089] ">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-3">
                  <span className="  text-xs 2xl:text-sm w-12">Length</span>
                  {/* 
                  <input
                    type="text"
                    name="dimensions.length"
                    value={formData.dimensions?.length}
                    onChange={handleInputChange}
                    className="block w-full mt-1 p-3 text-xs border"
                    placeholder="Length (cm)"
                  /> */}
                  <Select>
                    <SelectTrigger className="w-full text-xs 2xl:text-sm mt-1 xl:p-4 rounded-none  border border-[#EBE9E0] text-[#919089] ">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </label>

            {/* Website Product Link */}
            <label className="block mb-4">
              <span className=" tracking-wide text-xs 2xl:text-sm uppercase">
                Your Website Product Link
              </span>
              <input
                type="text"
                name="websiteLink"
                value={formData.websiteLink}
                onChange={handleInputChange}
                className="block w-full mt-1 p-3 text-xs border"
                placeholder="www.website.com"
              />
            </label>

            {/* Hallmarks */}
            <label className="block mb-4">
              <span className=" tracking-wide text-xs 2xl:text-sm uppercase">
                Hallmarks
              </span>
              <input
                type="text"
                name="hallmarks"
                value={formData.hallmarks}
                onChange={handleInputChange}
                className="block w-full mt-1 p-3 text-xs border"
                placeholder="Hallmarks"
              />
            </label>

            {/* Availability */}
            <label className="block mb-6">
              <span className=" tracking-wide text-xs 2xl:text-sm uppercase">
                Availability
              </span>
              <div className="flex flex-col gap-4 mt-3">
                <RadioGroup
                  defaultValue="option-one"
                  // onValueChange={(value) => setFormData({ ...formData, availability: value })}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-one" id="option-one" />
                    <Label htmlFor="option-one" className="text-xs 2xl:text-sm">
                      Available
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-two" id="option-two" />
                    <Label htmlFor="option-two" className="text-xs 2xl:text-sm">
                      {" "}
                      Not Available
                    </Label>
                  </div>
                </RadioGroup>
                {/* 
                <label>
                  <input
                    type="radio"
                    name="availability"
                    value="Available"
                    className=" "
                    checked={formData.availability === "Available"}
                    onChange={handleInputChange}
                  />
                  <span className="ml-2 text-xs 2xl:text-sm">Available</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="availability"
                    value="Not Available"
                    checked={formData.availability === "Not Available"}
                    onChange={handleInputChange}
                  />
                  <span className="ml-2 text-xs 2xl:text-sm">
                    Not Available
                  </span>
                </label> */}
              </div>
            </label>
          </div>
          <button className=" text-xs tracking-wide 2xl:text-sm w-full bg-[#0D0106] text-white uppercase py-4 px-6">
            PUBLISH PRODUCT
          </button>
        </div>

        {/* Preview Section */}
        <div className="w-full dashed-border-left   md:pl-10 md:w-1/2 md:p-6 ">
          <h2 className="text-[20px] font-playfair uppercase mb-6">Preview</h2>
          <div className="md:col-span-3 md:h-[350px] ">
            <div className="flex w-full flex-col-reverse items-center gap-4 md:flex-row  md:border-r border-[#EBE9E0]  ">
              {/* Scrollable Image Gallery */}
              <div className="w-full md:w-fit  flex lg:flex-col items-center gap-2">
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
                      width={90}
                      height={90}
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
              <div className="w-full py-3 flex bjustify-center bg-[#D9D9D9]  ">
                <Image
                  src={images[selectedImageIndex]}
                  alt="Selected image"
                  width={350}
                  height={350}
                  className=" opacity-0 "
                />
              </div>
            </div>
          </div>
          <div className="mt-8 md:mt-[48px]">
            <div className="flex items-center justify-between py-[16px] border-b border-[#EBE9E0]">
              <div className="flex flex-row items-center text-sm gap-3 py-3">
                <div className="bg-[#EBE9E0] p-2 rounded-full w-8 h-8 flex items-center justify-center">
                  <Image
                    src="/"
                    width={10}
                    height={10}
                    className="rounded-full"
                    alt=""
                  />
                </div>
                <h1 className="text-[20px] font-playfair font-normal uppercase ">
                  Antique Animal Jewelry
                </h1>
              </div>
              <button className="text-[12px]">FOLLOW</button>
            </div>
            <h1 className="text-lg md:text-[20px] uppercase font-playfair my-4">
              {formData.productName || "Product Name"}
            </h1>
            {/* Product Description */}
            <p className="text-[#919089]  mb-4 text-sm md:text-[16px]">
              {formData.description || "Product description will appear here."}
            </p>

            {/* Product Specifications */}
            <div className="flex flex-wrap justify-between py-3 gap-4  text-gray-800">
              <div className="text-[12px] ">
                <p className="text-[#919089] uppercase">Price</p>
                <p className="mt-2">
                  $ {formData?.price?.toLocaleString() || "Price"}
                </p>
              </div>
              <div className="text-[12px]">
                <p className="text-[#919089] uppercase">Measurements</p>
                <p className="mt-2">
                  {formData?.dimensions?.width || "Width"} CM X{" "}
                  {formData?.dimensions?.height || "Height"} CM X{" "}
                </p>
              </div>
              <div className="text-[12px]">
                <p className="text-[#919089] uppercase">Date & Origin</p>
                <p className="mt-2">1293</p>
              </div>
              <div className="text-[12px]">
                <p className="text-[#919089] uppercase">Materials</p>
                <p className="mt-2">108C GOLD</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-6">
              <Button
                label="Add to favorite"
                icon={<CiHeart className="text-xl" />}
                className="bg-white uppercase text-xs hover:bg-[#0D0106] hover:text-white text-nowrap 2xl:text-sm border border-[#0D0106] text-[#0D0106] w-full py-4 "
              />
              <Button
                label="Send a Query"
                className="bg-[#0D0106] uppercase border text-xs 2xl:text-sm border-[#0D0106] text-white w-full py-4 hover:bg-gray-800"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
