"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useBlogDetails } from "@/hooks/useBlogs";
import { useBlogs } from "@/hooks/useBlogs";
import { FaRegHeart } from "react-icons/fa";
import { CgMailReply } from "react-icons/cg";
import { HiOutlineUpload } from "react-icons/hi";
import { BsEmojiSmile } from "react-icons/bs";
import { VscSend } from "react-icons/vsc";

const BlogDetails = ({ params }: { params: any }) => {
  const { blog } = useBlogs();
  const { blogDetails, error } = useBlogDetails(params.id);
  const router = useRouter();

  const handleReadMore = (id: any) => {
    router.push(`/blog/${id}`);
  };

  return (
    <>
      <div>
        <div className="py-4 px-4 md:px-12 border border-[#EBE9E0]">
          <h1 className="text-xs">Home / Blog / Blog Post Title</h1>
          <h1 className="font-playfair pt-4 uppercase text-xl 2xl:text-2xl ">
            {blogDetails?.title}
          </h1>
        </div>
        <div className="p-4 md:py-8 md:px-12">
          <div className="relative w-full min-h-80 mx-auto">
            <Image
              src="/images/post/post4.jpeg"
              alt="imag"
              layout="fill"
              objectFit="cover"
              priority // Optional: If the image is above the fold
            />
          </div>

          <h1 className="text-[40px] font-playfair capitalize py-3">
            {blogDetails?.title}
          </h1>
          <div className="flex flex-row items-center text-sm gap-3 pb-3">
            <div className="bg-[#EBE9E0] p-2 rounded-full w-8 h-8 flex items-center justify-center">
              <Image
                src="/"
                width={10}
                height={10}
                className="rounded-full"
                alt=""
              />
            </div>
            <h1 className="text-xs uppercase text-[#404040]">Oliver bennett</h1>
            <span className="w-1 h-1 bg-[#404040] rounded-full"></span>
            <h1 className="text-[#404040] uppercase text-xs">
              {blogDetails?.date || "23 JAN 2023"}
            </h1>
          </div>

          <p className="text-[#666666] text-sm pb-4 border-b border-[#EBE9E0] ">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
          </p>

          <h1 className="text-[#3D3D3D] py-3 text-lg font-playfair">
            Lorem Heading
          </h1>
          <p className="text-[#666666] text-sm">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
          </p>

          <div className="grid grid-cols-1  md:grid-cols-2 gap-4 md:gap-12 py-4">
            <div className=" w-full">
              <Image
                src="/images/post/post2.jpeg"
                height={300}
                width={400}
                alt="pic2"
                className=" w-full"
              />
            </div>

            <div className=" w-full">
              <Image
                src="/images/post/post2.jpeg"
                height={300}
                width={400}
                alt="pic2"
                className=" w-full object-cover"
              />
            </div>
          </div>

          <p className="text-[#666666] text-sm">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
          </p>

          <h1 className="text-[#3D3D3D] py-3 text-lg font-playfair">
            Lorem Heading
          </h1>
          <p className="text-[#666666] text-sm">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
          </p>
        </div>
        <div className="flex px-8 gap-4 flex-col md:flex-row ">
          <div className=" px-8 w-full mx-4">
            {/* Left Side: Like and Comment */}
            <div className="flex items-center bg-[#F9F8F3] p-5 justify-between">
              <div className="flex flex-row gap-6 ">
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
            {Array.from({ length: 1 }).map((_, index) => (
              <div className=" p-3 my-3 ">
                <h3 className="uppercase text-semibold text-sm text-[#0D0106]">
                  Name SurName
                </h3>
                <p className="text-xs py-3 text-[#919089]">
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
                  <h3 className="uppercase text-semibold text-sm text-[#0D0106]">
                    Name SurName
                  </h3>
                  <p className="text-xs py-3 text-[#919089]">
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
            <div className="flex mb-5 items-center justify-between border-t pt-4 border-[#EBE9E0]">
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
          <div className=" bg-[#F9F8F3] p-6 w-full space-y-3 h-full md:w-[35%]">
            <h3 className="text-2xl font-playfair">
              Want to share your knowledge in Antiques?
            </h3>
            <p className="text-[#919089] text-sm 2xl:text-base">
              Lorem ipsum dolor sit amet consectetur. Sed amet bibendum at
              venenatis faucibus mi fringilla viverra. In nulla aliquam magna
              orci neque penatibus neque eget. Commodo scelerisque cursus purus
              id fermentum lorem nisi sit malesuada.
            </p>
            <button className="bg-black uppercase text-white text-xs py-3 w-full px-4 mt-4">
              Write a blog posr
            </button>
          </div>
        </div>

        <section className="bg-white">
          <div className=" py-6 border-y border-[#EBE9E0] px-4 md:px-6 lg:px-12 flex items-center font-playfair justify-between">
            <h2 className="text-lg md:text-[20px] uppercase ">
              Similar Blog Posts
            </h2>
            <Link href={"/blog"} className="text-sm ">
              VIEW ALL
            </Link>
          </div>
        </section>

        <section className="px-4 border-b border-[#EBE9E0]  md:px-6 lg:px-12 ">
          <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-4 w-full mt-6">
            {blog.slice(0, 3).map((b) => (
              <div
                key={b.id}
                className="w-full py-3 md:py-5 md:pr-4  last:border-r-0"
              >
                <Image
                  src="/images/blogs/b1.png" //replacce with original image
                  className="w-full h-auto "
                  height={150}
                  width={120}
                  alt={b.title}
                />
                <h1 className="text-xl font-playfair py-3">{b.title}</h1>
                <p className="text-sm text-[#463F3A] line-clamp-6">{b.body}</p>

                <button
                  onClick={() => handleReadMore(b.id)}
                  className=" pt-4 pb-6 text-sm text-[#0D0106]"
                >
                  READ MORE
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogDetails;
