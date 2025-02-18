"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { intrests } from "@/lib/data";
import { Product } from "@/lib/data";
import Button from "@/components/ui/Button";
import InputField from "@/components/ui/InputField";
import { CiHeart } from "react-icons/ci";
import { useRouter } from "next/navigation";
import Login from "@/components/shared/Login";
import { slides } from "@/lib/data";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import useProducts from "@/hooks/useProducts";
import usePosts from "@/hooks/usePosts";
import { FaRegCommentDots } from "react-icons/fa";
import localFont from "next/font/local";
import { IoIosHeartEmpty } from "react-icons/io";
const playfair = localFont({ src: "../fonts/PlayfairDisplay-Italic.ttf" });

const page = () => {
  const [subEmail, setSubEmail] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const { products, isFavorite, toggleFavorite } = useProducts();
  const post = usePosts();
  const router = useRouter();

  const posts = post.slice(0, 3);
  const product = products.slice(0, 8);
  // console.log(product);

  const handleLogin = () => {
    setIsLogin(!isLogin);
  };

  const handleLiveShows = () => {
    router.push("/presentation");
  };

  const handleSubscribe = () => {
    if (!subEmail) {
      alert("Please enter a valid email address.");
      return;
    }

    // Perform your subscription logic here
    console.log("Subscribed with email:", subEmail);
    alert("Thank you for subscribing!");

    // Clear the input field after subscription
    setSubEmail("");
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Handle dot navigation click
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleProductDetails = (id: any) => {
    router.push(`/products/${id}`);
  };

  const handleReadMore = (id: any) => {
    router.push(`/blog/${id}`);
  };

  return (
    <>
      <main>
        <section
          className="w-full h-[713px]  lg:h-screen flex items-center justify-center flex-col  relative"
          style={{
            backgroundImage: "url(/heroBg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* <div className="w-[150px] h-[140px] md:min-w-[180px] md:min-h-[140px] 2xl:min-w-[240px]  2xl:min-h-[180px] absolute top-0 ">
            <Image
              src="/images/hero1.svg"
              alt="hero"
              width={200}
              height={230}
              className=" w-full h-full  "
            />
          </div>
          <div className="absolute top-32 md:top-20 w-[90px] h-[90px] md:w-[120px] md:h-[120px] md:min-w-[150px] md:min-h-[150px] 2xl:min-w-[200px]  2xl:min-h-[180px] left-0 md:left-8 2xl:left-12 ">
            <Image
              src="/images/hero2.svg"
              alt="hero"
              width={150}
              height={150}
              layout="responsive"
              className=" "
            />
          </div>
          <div className=" absolute w-[100px] h-[100px] top-24 md:min-w-[150px] md:min-h-[150px] right-0 md:right-10 2xl:right-20 ">
            <Image
              src="/images/hero3.svg"
              alt="hero"
              width={150}
              height={150}
              className=" "
            />
          </div>

          <div className=" absolute bottom-0 md:bottom-10 2xl:bottom-1   left-0 h-[160px] w-[170px] md:min-w-[300px] md:min-h-[250px] 2xl:min-w-[400px]    2xl:min-h-[370px]">
            <Image
              src="/images/hero4.svg"
              alt="hero"
              width={340}
              height={340}
              className=" w-full "
            />
          </div>

          <div className=" absolute right-0 bottom-16 md:bottom-28 2xl:bottom-36 w-[120px] h-[120px] md:min-w-[120px]  md:min-h-[120px] 2xl:min-w-[150px] 2xl:min-h-[150px]">
            <Image
              src="/images/hero6.svg"
              alt="hero"
              width={150}
              height={150}
              className=" "
            />
          </div>

          <div className=" absolute sm:block hidden  -bottom-2  right-64 2xl:right-80   w-[120px] h-[120px] md:min-h-[200px] md:min-w-[200px] 2xl:min-w-[240px]  2xl:min-h-[240px]">
            <Image
              src="/images/hero5.svg"
              alt="hero"
              width={200}
              height={200}
              className=" w-full h-full "
            />
          </div> */}
          <div className="mt-8 xl:mt-16">
            <h2 className="text-3xl md:text-5xl xl:text-[64px] md:leading-snug 2xl:leading-snug text-center font-playfair ">
              Welcome to <br />{" "}
              <span className={`${playfair.className}`}>
                The Antique Collector
              </span>
            </h2>
            <p className="text-center text-[#463F3A] max-w-lg 2xl:max-w-xl text-sm 2xl:text-base my-5">
              The new and exciting global marketplace where antique and jewelry
              lovers can connect with the world’s premiere dealers, view their
              inventories, and buy their latest pieces.
            </p>

            <div className="   flex items-center justify-center text-xs">
              <button className=" hover:opacity-80 py-3 uppercase mb-8 2xl:py-4 px-16 xl:py-[16px] 2xl:px-20 bg-[#0D0106] xl:text-[14px] xl:tracking-wide  2xl:text-sm text-white ">
                Start browsing
              </button>
            </div>
          </div>
        </section>

        <section className=" bg-[#F9F8F3]">
          <div className="py-6 xl:py-[32px] 2xl:py-8 border-b border-[#EBE9E0] px-4 md:px-6 lg:px-16 flex items-center font-playfair justify-between">
            <h2 className="text-lg xl:text-[24px] text-[#0D0106]  ">SELLERS</h2>
            <Link
              href={"/sellers"}
              className="text-sm xl:text-[12px] font-openSans  text-[#463F3A] "
            >
              VIEW ALL
            </Link>
          </div>

          <div className=" w-full flex flex-col-reverse md:flex-row flex-wrap ">
            <div className=" w-full md:w-[50%] px-6 md:px-16  py-6 xl:pb-9 md:pt-10 border-r border-[#EBE9E0]">
              <div className=" relative overflow-hidden">
                <div
                  className="transition-transform duration-700 ease-in-out flex flex-row"
                  style={{
                    transform: `translateX(-${
                      currentIndex * (100 / slides.length)
                    }%)`,
                    width: `${slides.length * 100}%`,
                  }}
                >
                  {slides.map((slide, index) => (
                    <div
                      key={index}
                      className="w-full bg-[#EBE9E0]  p-6 flex-shrink-0 gap-5"
                      style={{ width: `${100 / slides.length}%` }}
                    >
                      <div className=" w-full items-center justify-between flex">
                        <h2 className="text-[12px] text-[#0D0106] uppercase">
                          {slide.productsCount} Products
                        </h2>
                        <Link href={"#"} className="text-[12px] text-[#0D0106]">
                          SHOP ALL
                        </Link>
                      </div>
                      <div className=" w-full grid grid-cols-3 my-4 gap-2">
                        {slide.products.map((product) => (
                          <div key={product.id}>
                            <Image
                              src={product.image}
                              alt="product"
                              width={100}
                              className=" w-full h-full"
                              height={100}
                            />
                          </div>
                        ))}
                      </div>
                      <div className=" w-full items-center mb-4  justify-between flex">
                        <h2 className=" text-lg md:text-2xl lg:text-3xl font-playfair">
                          {slide.title}
                        </h2>
                        <Link href={"#"} className="text-[12px]">
                          FOLLOW
                        </Link>
                      </div>
                      <p className="text-[12px] text-[#463F3A]">
                        {slide.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-row justify-center mt-8 xl:mt-12">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-8 xl:w-12  h-1 mx-2 cursor-pointer ${
                      currentIndex === index ? "bg-[#919089]" : "bg-[#EBE9E0]"
                    }`}
                  ></div>
                ))}
              </div>
            </div>

            <div className=" w-full md:w-[50%] flex flex-col justify-between pt-8 items-center xl:items-start">
              <div className="flex flex-col items-start  px-5 md:px-16 md:items-start xl:pl-[4.8rem]">
                <h2 className="text-2xl md:text-4xl xl:text-[48px] 2xl:text-6xl text-[#463F3A]   text-center font-playfair ">
                  Featured Sellers
                </h2>
                <p className="text-center md:text-start max-w-xl  text-sm text-[#463F3A] text-[14px] xl:text-[16px] 2xl:text-base my-[26px]">
                  Every month we showcase several dealers and their galleries in
                  this section. This is a great way for you to discover new
                  people to follow, and new pieces to fall in love with!
                </p>
                <button className=" py-3 w-[175px] xl:py-[15px] 2xl:py-4  hover:opacity-80 bg-black text-xs xl:text-[12px]  text-white ">
                  BECOME A SELLER
                </button>
              </div>

              <Table className=" w-full mt-12">
                <TableBody>
                  <TableRow className=" bg-[#EBE9E0] ">
                    <TableCell className=" text-center font-playfair text-lg  border-y border-[#EBE9E0]">
                      <div className="flex justify-center py-[14px] xl:justify-start flex-row items-center gap-3 xl:pl-[60px]">
                        <div className="bg-[#919089] p-2 rounded-full w-8 h-8 xl:w-10 xl:h-10 flex items-center justify-center">
                          <Image
                            src="/"
                            width={10}
                            height={10}
                            className="rounded-full"
                            alt=""
                          />
                        </div>
                        <p className="text-[20px]">Antique Animal Jewelry</p>
                      </div>
                    </TableCell>
                    <TableCell className="text-center text-sm xl:text-[12px] uppercase border-y border-[#EBE9E0] text-[#463F3A]">
                      Follow
                    </TableCell>
                  </TableRow>
                  <TableRow className=" ">
                    <TableCell className=" text-center font-playfair text-lg  border-y border-[#EBE9E0]">
                      <div className="flex py-[14px] justify-center  xl:justify-start flex-row items-center gap-3 xl:pl-[60px]">
                        <div className="bg-[#EBE9E0] p-2 rounded-full w-8 h-8 xl:w-10 xl:h-10 flex items-center justify-center">
                          <Image
                            src="/"
                            width={10}
                            height={10}
                            className="rounded-full"
                            alt=""
                          />
                        </div>
                        <p className="text-[20px]">Patrick Boyd Carpenter</p>
                      </div>
                    </TableCell>
                    <TableCell className="text-center text-sm xl:text-[12px] uppercase border-y border-[#EBE9E0] text-[#463F3A]">
                      Follow
                    </TableCell>
                  </TableRow>
                  <TableRow className=" ">
                    <TableCell className=" text-center font-playfair text-lg  border-y border-[#EBE9E0]">
                      <div className="flex py-[14px] justify-center xl:justify-start flex-row items-center gap-3 xl:pl-[60px]">
                        <div className="bg-[#EBE9E0] p-2 rounded-full w-8 h-8 xl:w-10 xl:h-10 flex items-center justify-center">
                          <Image
                            src="/"
                            width={10}
                            height={10}
                            className="rounded-full"
                            alt=""
                          />
                        </div>
                        <p className="text-[20px]">Inezstodel Cloth House</p>
                      </div>
                    </TableCell>
                    <TableCell className="text-center text-sm xl:text-[12px] uppercase border-y border-[#EBE9E0] text-[#463F3A]">
                      Follow
                    </TableCell>
                  </TableRow>
                  <TableRow className=" ">
                    <TableCell className=" text-center font-playfair text-lg  border-y border-[#EBE9E0]">
                      <div className="flex py-[14px] justify-center xl:justify-start flex-row items-center gap-3 xl:pl-[60px]">
                        <div className="bg-[#EBE9E0] p-2 rounded-full w-8 h-8 xl:w-10 xl:h-10 flex items-center justify-center">
                          <Image
                            src="/"
                            width={10}
                            height={10}
                            className="rounded-full"
                            alt=""
                          />
                        </div>
                        <p className="text-[20px]">Inezstodel Cloth House</p>
                      </div>
                    </TableCell>
                    <TableCell className="text-center text-sm xl:text-[12px] uppercase border-y border-[#EBE9E0] text-[#463F3A]">
                      Follow
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        <section className="pb-12">
          <div className="py-6 xl:py-[32px] 2xl:py-8 px-4 md:px-6 lg:px-16 border-b border-[#EBE9E0]  flex items-center  justify-between">
            <div>
              <h2 className="text-2xl xl:text-[24px] uppercase  font-playfair mb-2 2xl:text-3xl  ">
                New Arrivals
              </h2>
              <p className=" font-light font-openSans text-sm xl:text-[16px] 2xl:text-base text-[#919089]">
                All the latest pieces land here in real time. <br />{" "}
                <span className=" underline text-black">Sign up</span> for an
                account to create your own custom feed, and only see products
                from sellers you follow
              </p>
            </div>
            <Link
              className="text-sm xl:text-[12px] font-openSans  text-[#463F3A] "
              href={"/products"}
            >
              VIEW ALL
            </Link>
          </div>
          <div className="flex flex-row flex-nowrap md:flex-wrap overflow-x-auto gap-y-3 2xl:gap-y-4 py-6 md:py-10 px-4 md:px-6 lg:px-10">
            {product.map((p, index) => {
              const isLastRow =
                Math.floor(index / 4) === Math.floor((product.length - 1) / 4);
              const isLastColumn = (index + 1) % 4 === 0;
              const isFavorited = isFavorite(p.id);

              return (
                <div
                  key={p.id}
                  className={`flex-shrink-0 w-full md:w-1/4 flex flex-col md:py-6  relative px-6 ${
                    !isLastRow ? "md:border-b md:border-[#EBE9E0]" : ""
                  } ${!isLastColumn ? "border-r border-[#EBE9E0]" : ""}`}
                  onClick={() => handleProductDetails(p.id)}
                >
                  {/* Product Image Container */}
                  <div className="relative group">
                    {/* Favorite Button */}
                    <div className="absolute top-2 right-4 z-10">
                      <button
                        onClick={() => toggleFavorite(p.id)}
                        aria-label={`Add ${p.title} to favorites`}
                        className="text-xl font-semibold focus:outline-none"
                      >
                        {isFavorited ? (
                          <FaHeart className="text-red-500" />
                        ) : (
                          <IoIosHeartEmpty className="text-gray-500" />
                        )}
                      </button>
                    </div>

                    {/* Product Image */}
                    <Image
                      src="/images/products/p5.png"
                      alt={p.title}
                      width={150}
                      className="w-full h-full object-contain object-center transform hover:scale-105  transition duration-500 ease-in-out"
                      height={150}
                    />

                    {/* Likes and Comments Overlay on Hover */}
                    <div className="absolute inset-0 bg-white bg-opacity-80   flex flex-row gap-4 items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm text-black flex items-center gap-2">
                        <CiHeart className="text-2xl" /> {p.likes || 34}
                      </p>
                      <p className="text-sm text-black flex items-center gap-2">
                        <Image
                          src="/images/message2.svg"
                          width={20}
                          height={20}
                          alt="comment"
                          className="w-5 h-5"
                        />
                        {p.comments || 34}
                      </p>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="w-full mt-4">
                    <h2 className="text-[14px] md:text-base uppercase">
                      {p.title}
                    </h2>

                    <div className="flex flex-row gap-4 justify-between">
                      <p className="text-[#919089] mb-1 text-[12px]">
                        {p.brand}
                      </p>
                      <Link href={"#"} className="text-[#919089] text-[12px]">
                        FOLLOW
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section
          className="  relative h-[80svh] md:h-[140svh] xl:h-[1080px] w-full flex-col flex items-center justify-center"
          style={{
            backgroundImage: "url(/images/bg.svg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Image
            src="/images/p1.png"
            alt="hero"
            width={280}
            height={280}
            className=" absolute top-12 2xl:top-16 left-16 md:block hidden"
          />
          <Image
            src="/images/p2.png"
            alt="hero"
            width={280}
            height={280}
            className=" absolute bottom-12  right-16 md:block hidden "
          />
          <h2 className=" text-[48px] text-white mt-6  text-center font-playfair ">
            Live Presentations
          </h2>
          <p className="text-center px-6 max-w-md uppercase font-light 2xl:max-w-lg text-[#EBE9E0] text-[14px] tracking-wide mt-6">
            Set a reminder, and book a virtual seat!
          </p>
          <p className="text-center px-6 max-w-[26rem] xl:max-w-[32rem] text-[#FFFFFF] text-[14px] my-6">
            It’s time for a Live Presentation. Be first in line. Watch a Seller
            present their latest finds via the medium of video, get all the
            latest gossip and buy directly, right then and there!
          </p>
          <button
            onClick={handleLiveShows}
            className=" py-3 uppercase xl:py-[16px] xl:tracking-wide px-[24px]  bg-white hover:bg-gray-900 text-xs xl:text-[12px] hover:text-white text-black "
          >
            see upcoming live shows
          </button>
        </section>

        <section className="bg-white">
          <div className=" py-6 xl:py-[32px] 2xl:py-8 border-b border-[#EBE9E0] px-4 md:px-6 lg:px-16 flex items-center font-playfair justify-between">
            <h2 className="text-lg xl:text-[24px]   ">CATEGORIES</h2>
            <Link
              href={"#"}
              className="text-sm xl:text-[12px] font-openSans  text-[#463F3A] "
            >
              VIEW ALL
            </Link>
          </div>
        </section>

        <section className=" bg-[#F9F8F3] p-8 md:p-10  lg:px-16 lg:py-16 xl:py-[80px]">
          <h1 className="text-3xl lg:text-5xl xl:text-[48px] text-[#463F3A] font-playfair mb-16">
            Browse by Category
          </h1>
          <div className="flex flex-row flex-wrap justify-start md:justify-between gap-[32px]">
            {intrests.map((intrest, index) => (
              <div
                key={index}
                className="flex flex-col flex-nowrap gap-4 items-center justify-between"
              >
                <div className="mb-3">
                  <Image
                    src={intrest.image}
                    alt="interest"
                    width={60}
                    height={60}
                    className=" xl:w-[80px] xl:h-[80px] "
                  />
                </div>
                <h2 className="uppercase text-xs xl:text-[14px]">
                  {intrest.name}
                </h2>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white">
          <div className=" py-6 xl:py-[32px] 2xl:py-8 border-y border-[#EBE9E0] px-4 md:px-6 lg:px-16 flex items-center font-playfair justify-between">
            <h2 className="text-lg xl:text-[24px] uppercase  ">Eras</h2>
            <Link
              href={"#"}
              className="text-sm xl:text-[12px] font-openSans  text-[#463F3A] "
            >
              VIEW ALL
            </Link>
          </div>
        </section>

        <section className="bg-[#FFFFFF] px-4 md:px-6 lg:px-16 py-10 md:py-20 border-b border-[#EBE9E0]">
          <div className="grid md:grid-cols-4">
            <div className="md:col-span-3 flex flex-col justify-center ">
              <div className="text-3xl md:text-[48px] space-y-4 font-playfair ">
                <h1
                  className={` ${playfair.className} leading-[12px] md:leading-[50px] `}
                >
                  Victorian Elegance:
                </h1>
                <h1 className={`tracking-normal`}>
                  A Journey Through 19th Century Artistry
                </h1>
              </div>

              <p className="py-10 xl:py-16 pr-1 text-[14px] text-[#919089] max-w-2xl xl:max-w-4xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
                exercitationem harum magnam eaque cupiditate natus. Maxime
                possimus perspiciatis id sed illum reprehenderit natus alias
                consequuntur ea facilis. Expedita, dignissimos deserunt? Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Dicta iste
                esse, praesentium nobis consequuntur dolores numquam ad debitis,
                beatae et corrupti id eius perferendis sunt. Sint nulla earum
                laborum voluptas?
              </p>

              <Link href={"#"} className="text-[14px] uppercase">
                See Collection
              </Link>
            </div>

            <div className="md:col-span-1  relative py-3 mt-8 md:mt-0  bg-[#EBE9E0] p-[10px] pb-[24px]">
              <div className="absolute top-7 right-9 ">
                <IoIosHeartEmpty />
              </div>
              <Image
                src="/images/products/p1.png"
                width={140}
                height={100}
                alt="img"
                layout="responsive"
                className="bg-white"
              />
              <p className="text-[#0D0106] px-2   text-[16px] mt-3">
                NATIVE IRON CHAIR
              </p>
              <div className="text-sm px-2 text-[#919089] flex flex-row gap-2 justify-between flex-nowrap mt-2">
                <h1>Antique Animal Jewelry</h1>
                <Link href={"#"} className="uppercase text-[12px]">
                  Follow
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className=" py-6 xl:py-[32px] 2xl:py-8 border-b border-[#EBE9E0] px-4 md:px-6 lg:px-16 flex items-center font-playfair justify-between">
            <h2 className="text-lg xl:text-[24px] uppercase    ">Blog</h2>
            <Link
              href={"/blog"}
              className="text-sm xl:text-[12px] font-openSans  text-[#463F3A] "
            >
              VIEW ALL
            </Link>
          </div>
        </section>

        {/* blogs card details add here */}
        <section className="px-4 md:px-6 lg:px-16 ">
          <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-4 w-full ">
            {posts.map((b) => (
              <div
                key={b.id}
                className="w-full py-3 md:py-5 md:pt-[55px] md:pr-4  border-b-0  md:border-r border-[#DFDEDB] last:border-r-0"
              >
                <Image
                  src="/images/blogs/b1.png" //replacce with original image
                  className="w-full h-auto "
                  height={150}
                  width={120}
                  alt={b.title}
                />
                <h1 className="text-[24px] font-playfair pt-3 pb-4 capitalize tracking-tight">
                  Unlocking the Past: How to Identify Authentic Victorian
                  Antiques
                </h1>
                <p className="text-[14px] font-openSans text-[#919089] line-clamp-6">
                  {b.body}
                </p>

                <button
                  onClick={() => handleReadMore(b.id)}
                  className=" pt-5 pb-6 text-[12px] text-[#0D0106]"
                >
                  READ MORE
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* how to work section */}

        <section className="bg-[#F9F8F3] pt-10 pb-0 md:pt-16 ">
          <div className="flex flex-col items-center  px-6 pt-4 pb-16">
            <h1 className="text-[48px] font-playfair">How it works</h1>
            <p className="uppercase tracking-widest py-4 text-xs text-center max-w-lg">
              We are here to help you with your global hunt for the finest and
              quirkiest jewelry and antiques!
            </p>
            <p className="md:w-[610px] xl:text-[14px] font-openSans py-2 text-balance text-center  text-[#919089]">
              By creating an account you will be able to follow all your
              favourite sellers, and see all their latest finds, here on the
              website, and also on the accompanying app. You will also receive
              live notifications in real time from the app so that you never
              miss that dream piece ever again. You will be able to save all the
              pieces you have your eye on onto your own wall, for later
              reference.
            </p>
            <p className="md:w-[550px]  xl:text-[14px]  text-pretty my-3 font-openSans text-center text-[#919089]">
              As part of{" "}
              <span className="text-black px-0.5">The AC Community</span> you
              will have access to
              <span className="text-black px-0.5">Forums,</span>
              <span className="text-black px-0.5">Blogs</span> and
              <span className="text-black px-0.5"> ‘Lives’,</span> as well as
              news on all the latest
              <span className="text-black px-0.5">Fairs and Events.</span>
            </p>

            <Button
              onClick={handleLogin}
              label="Create a Free Account"
              className="uppercase my-8 text-sm xl:text-[12px] py-4 px-8  hover:opacity-80"
            />
          </div>

          <div className="bg-[#463F3A] py-12 xl:py-16 text-white px-4">
            <div className="flex flex-col items-center justify-between">
              <h1
                className={`text-2xl md:text-[48px] leading-[50px] tracking-tight font-light font-playfair ${playfair.className} `}
              >
                Stay in the Loop:
              </h1>
              <h1 className="text-2xl text-center font-light md:text-[48px] font-playfair mt-3">
                Discover Exclusive Antiques & Insights
              </h1>

              <div className="w-full md:w-1/3 xl:w-[486px] bg-red-50 my-12 flex flex-row  ">
                <InputField
                  placeholder="Your Email Address"
                  className="border border-[#EBE9E0] w-full md:min-w-64 text-xs 2xl:text-sm text-[#919089] placeholder:text-[#919089] px-4 py-[16px] "
                  type="email"
                  value={subEmail}
                  onChange={(e) => setSubEmail(e.target.value)}
                />
                <button
                  onClick={handleSubscribe}
                  className="uppercase text-xs xl:w-[175px] 2xl:text-sm px-5 xl:px-[24px] py-[16px] border border-black bg-black text-white hover:opacity-80 "
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div className="px-4 pt-4 flex  flex-row flex-wrap  justify-around items-center   ">
              {intrests.map((intrest, index) => (
                <div key={index} className="">
                  <div className="mb-3">
                    <Image
                      src={intrest.image}
                      alt="interest"
                      width={80}
                      height={80}
                      className=" opacity-60 "
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      {isLogin && <Login onClose={() => setIsLogin(false)} />}
    </>
  );
};

export default page;
