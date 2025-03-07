import Link from "next/link";
import React from "react";

const page: React.FC = () => {
  const data = {
    upcoming: [
      {
        status: "Scheduled",
        title: "Home Decor originating from Italy",
        image: "/images/blogs/b1.png", // Replace with the actual image URLs
        date: "15.12.2024",
        time: "5.00 pm (UTC)",
        action: "Edit",
      },
      {
        status: "Drafts",
        title: "Home Decor originating from Italy",
        image: "/images/blogs/b1.png", // Replace with the actual image URLs
        date: "15.12.2024",
        time: "5.00 pm (UTC)",
        action: "Edit",
      },
    ],
    finished: [
      {
        status: "Finished",
        title: "Home Decor originating from Italy",
        image: "/images/blogs/b1.png", // Replace with the actual image URLs
        date: "15.12.2024",
        time: "5.00 pm (UTC)",
        action: "View Stats",
      },
      {
        status: "Finished",
        title: "Home Decor originating from Italy",
        image: "/images/blogs/b1.png", // Replace with the actual image URLs
        date: "15.12.2024",
        time: "5.00 pm (UTC)",
        action: "View Stats",
      },
    ],
  };

  return (
    <div className="border-b border-[#EBE9E0] pb-12">
      <div className="py-4 xl:py-[32px] px-4 md:px-6 lg:px-12 xl:px-[80px] border-b border-[#EBE9E0] flex flex-row flex-wrap gap-4 justify-between items-center">
        <div>
          <p className="text-xs">Home / Live Presentations</p>
          <h1 className="font-playfair pt-4 uppercase text-base md:text-[24px] ">
            Live Presentations
          </h1>
        </div>

        <div>
          <Link
            href={"/presentation/create"}
            className="text-xs tracking-wide xl:w-[237px] 2xl:text-sm hover:opacity-80 py-4 px-4 text-white bg-[#0D0106] uppercase"
          >
            Create a live presentation
          </Link>
        </div>
      </div>
      <div className=" w-full px-4 md:px-6 lg:px-12 xl:px-[80px] py-8 gap-6  grid grid-cols-1 sm:grid-cols-5  ">
        <div className="bg-primary-50 p-6 h-fit sm:col-span-2">
          <h2 className="text-[24px] 2xl:text-2xl font-playfair  mb-3">
            How does it work?
          </h2>
          <p className=" text-[#919089] text-[16px] 2xl:text-base pb-4 border-b border-[#EBE9E0] mb-4">
            Host live sessions to showcase your treasures and connect with
            collectors in real time.
          </p>
          <div className="list-decimal list-inside pt-3 text-gray-700 space-y-5">
            <div className=" space-y-2">
              <p className=" uppercase tracking-wider mb-2  text-[14px] 2xl:text-base">
                1: Schedule the live session
              </p>{" "}
              <p className="text-xs 2xl:text-sm text-[#919089]">
                Select details, schedule date and time, and pick an eye-catching
                title to attract buyers to sign up for your live.
              </p>
            </div>
            <div className=" space-y-2">
              <p className=" uppercase tracking-wider mb-2  text-[14px] 2xl:text-base">
                2: Get Ready to Go Live
              </p>{" "}
              <p className="text-xs 2xl:text-sm text-[#919089]">
                Preview your setup and ensure everything is picture-perfect
                before you start.
              </p>
            </div>
            <div className=" space-y-2">
              <p className=" uppercase tracking-wider mb-2  text-[14px] 2xl:text-base">
                3: You’re Live!
              </p>{" "}
              <p className="text-xs 2xl:text-sm text-[#919089]">
                Showcase your collection, answer questions, and connect with
                buyers in real time.
              </p>
            </div>
            <div className=" space-y-2">
              <p className=" uppercase tracking-wider mb-2  text-[14px] 2xl:text-base">
                4. Post-Live Summary
              </p>{" "}
              <p className="text-xs 2xl:text-sm text-[#919089]">
                See how your session performed and follow up with interested
                buyers.
              </p>
            </div>
          </div>
        </div>
        <div className=" col-span-1 sm:col-span-3 p-2">
          {/* Upcoming Section */}
          <div className="mb-12 w-full ">
            <h2 className="text-[24px] text-[#463F3A] font-playfair  mb-6">
              Upcoming
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 w-full gap-6">
              {data.upcoming.map((item, index) => (
                <div
                  key={index}
                  className="border border-[#EBE9E0]  shadow-sm overflow-hidden bg-white"
                >
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span
                        className={`text-sm  tracking-wide font-medium ${
                          item.status === "Scheduled"
                            ? "text-green-600"
                            : "text-[#FBBC04]"
                        }`}
                      >
                        {item.status.toUpperCase()}
                      </span>
                      <Link
                        href="/presentation/1/edit"
                        className="text-xs 2xl:text-sm uppercase font-medium"
                      >
                        {item.action}
                      </Link>
                    </div>
                    <h3 className="text-[20px] font-playfair 2xl:text-lg  mb-3">
                      {item.title}
                    </h3>

                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="text-sm mt-4 flex items-center justify-between 2xl:text-sm ">
                      <p>{item.date}</p>
                      <p>{item.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Finished Section */}
          <div>
            <h2 className="text-[24px] text-[#463F3A] font-playfair mb-6">
              Finished
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
              {data.finished.map((item, index) => (
                <div key={index} className="border overflow-hidden bg-white">
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span
                        className={`text-xs 2xl:text-sm font-medium ${
                          true ? "text-[#919089]" : "text-yellow-600"
                        }`}
                      >
                        {item.status.toUpperCase()}
                      </span>
                      <Link
                        href="/presentation/1/summary"
                        className="text-xs 2xl:text-sm font-medium"
                      >
                        {item.action}
                      </Link>
                    </div>
                    <h3 className="text-md font-playfair 2xl:text-lg  mb-2">
                      {item.title}
                    </h3>

                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="text-xs mt-2 flex items-center justify-between 2xl:text-sm text-gray-600">
                      <p>{item.date}</p>
                      <p>{item.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
