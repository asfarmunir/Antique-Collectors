"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useBlogDetails } from "@/hooks/useBlogs";
import { useBlogs } from "@/hooks/useBlogs";

const BlogDetails = ({ params }: { params: any }) => {
  const { blog } = useBlogs();
  const { blogDetails, error } = useBlogDetails(params.id);
  const router = useRouter();

  const handleReadMore = (id: any) => {
    router.push(`/blog/${id}`);
  };

  return (
    <>
      <div className=" w-full  p-5 md:p-12 space-y-10">
        <div className=" w-full bg-[#F9F8F3] p-5 md:p-12 space-y-10">
          <div className=" w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-16">
            <div className=" w-full">
              <Image
                src="/images/events/event1.png"
                height={300}
                width={400}
                alt="pic2"
                className=" w-full"
              />
            </div>
            <div className=" w-full">
              <h2 className="text-3xl 2xl:text-4xl  font-playfair">
                Milan Antique Fair
              </h2>
              <p className="text-[#666666] text-sm 2xl:text-base py-4 max-w-lg">
                Lorem ipsum dolor sit amet consectetur. Molestie adipiscing
                massa tincidunt purus tristique malesuada. Ultricies ac aliquet
                sapien quis magna accumsan purus. Massa enim sit.
              </p>
              <button>
                <a href="/events/1" className="text-sm uppercase">
                  Read More
                </a>
              </button>
            </div>
          </div>
        </div>
        <div>
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

        {/* <section className="bg-white">
          <div className=" py-6 border-y border-[#EBE9E0] px-4 md:px-6 lg:px-12 flex items-center font-playfair justify-between">
            <h2 className="text-lg md:text-[20px] uppercase ">
              Other Blog Posts
            </h2>
            <Link href={"/blog"} className="text-sm ">
              VIEW ALL
            </Link>
          </div>
        </section>

        <section className="px-4 md:px-6 lg:px-12 ">
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
        </section> */}
      </div>
    </>
  );
};

export default BlogDetails;
