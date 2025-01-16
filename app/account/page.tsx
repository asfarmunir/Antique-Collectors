import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const settings = [
    {
      title: "Personal info",
      description: "Provide personal details and how we can reach you",
      icon: "info.svg",
      link: "/account/profile",
    },
    {
      title: "Verify Account",
      description:
        "We encourage all Buyers and Sellers to verify their identity to keep the platform safe.",
      icon: "verify.svg",
      link: "#",
    },
    {
      title: "Preferences",
      description: "Manage taxpayer information and tax documents",
      icon: "preference.svg",
      link: "#",
    },
    {
      title: "Notifications",
      description:
        "Choose notification preferences and how you want to be contacted",
      icon: "notification.svg",
      link: "#",
    },
    {
      title: "Help & Support",
      description:
        "Manage your personal data, connected services, and data sharing settings",
      icon: "support.svg",
      link: "#",
    },
    {
      title: "Become a Seller",
      description: "Set your default language, currency, and timezone",
      icon: "seller.svg",
      link: "#",
    },
  ];

  return (
    <div>
      <div className="py-6 px-6 md:px-12">
        <h1 className="text-xs">Home / My Account</h1>
        <h1 className="font-playfair pt-4 uppercase text-xl ">My account</h1>
      </div>
      <div className="  px-6 md:px-12 py-7">
        <h2 className=" text-3xl font-playfair">My Account</h2>
        <p className=" uppercase py-3 text-[#666666] text-xs 2xl:text-sm gap-1 inline-flex items-center">
          <span className=" font-semibold">Anna,</span>
          <span> annasmith@gmail.com </span>
        </p>
        <div className=" w-full mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ">
          {settings.map((setting) => (
            <Link
              key={setting.title}
              href={setting.link}
              className=" rounded-[2px]  shadow-lg    p-4 "
            >
              <Image
                src={`/images/icons/${setting.icon}`}
                height={30}
                width={30}
                alt="pic2"
              />
              <h2 className=" font-semibold pt-4   pb-2 text-sm 2xl:text-base uppercase">
                {setting.title}
              </h2>
              <p className="text-[#919089] text-sm">{setting.description}</p>
            </Link>
          ))}
        </div>
        <div className=" mt-32">
          <p className="text-xs font-semibold">
            Need to deactivate your account?
          </p>
          <button className=" font-thin py-1 capitalize">deactivate now</button>
        </div>
      </div>
    </div>
  );
};

export default page;