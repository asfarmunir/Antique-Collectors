import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogDescription,
  DialogTitle,
  DialogHeader,
} from "../ui/Dialog";
import Button from "../ui/Button";
import Dropdown from "../ui/DropDown";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import { LuUpload } from "react-icons/lu";
import InputField from "../ui/InputField";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Checkbox1 from "../ui/tickbox";
import { intrests } from "@/lib/data";
import localFont from "next/font/local";
const playfair = localFont({ src: "../../fonts/PlayfairDisplay-Italic.ttf" });

const checkboxLabels = [
  "Roman - 753 BC - 476 AD",
  "Elizabethan - 1558 - 1603",
  "Baroque - 1600 - 1750",
  "Victorian - 1837 - 1901",
  "Art Deco - 1920s - 1930s",
  "Mid-Century Modern - 1933 - 1965",
];

const sortData = [
  "Latest",
  "A to Z",
  "Low to Higher Price",
  "Higher to Low Price",
  "Highest Sale Products",
];

export const BuyerAccountSetting = ({ onClose }: { onClose: any }) => {
  const [step, setStep] = useState(1);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    country: "",
    buyFromCountries: "",
    selectedInterests: [],
    enableNotifications: false,
  });

  const handleSelect = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleCheckboxChange = (interest: string) => {
    setFormData((prev: any) => {
      const updatedInterests = prev.selectedInterests.includes(interest)
        ? prev.selectedInterests.filter((i: any) => i !== interest)
        : [...prev.selectedInterests, interest];
      return { ...prev, selectedInterests: updatedInterests };
    });
  };

  const handleNext = () => {
    console.log("Form Data:", formData);
    setStep((prev) => prev + 1);
  };

  const handleFinish = () => {
    alert(`Account setup complete: ${JSON.stringify(formData)}`);
    setStep(4);
  };

  const isStep1Complete = formData.country && formData.buyFromCountries;
  const isStep2Complete = formData.selectedInterests.length > 0;

  return (
    <div className="relative">
      <Dialog open onOpenChange={onClose}>
        <DialogContent
          className="font-playfair max-h-[90vh] p-0 overflow-y-auto"
          customWidth="max-w-lg "
        >
          <DialogHeader className="font-playfair text-xl border-b border-[#EBE9E0] p-[32px]">
            <DialogTitle>
              <Button
                onClick={onClose}
                icon={<RxCross2 className="text-[#0D0106]" />}
                label=""
                className="bg-transparent absolute right-0 top-4"
              />
              <h1 className="font-playfair text-[24px] uppercase text-start">
                Setting up your account
              </h1>
            </DialogTitle>
          </DialogHeader>

          {step === 1 && (
            <div className="flex flex-col  py-[16px]  px-6 xl:px-12">
              <h1 className="text-3xl md:text-4xl">Location Preferences</h1>
              <p className="text-base text-[#919089] py-4 font-openSans">
                Personalize your experience by sharing a few details about your
                location preferences.
              </p>

              <div>
                <div className="py-3">
                  <p className="text-xs tracking-wide pb-2 font-openSans uppercase">
                    What is your country of residence?
                  </p>
                  <div>
                    <Dropdown
                      label="-Select-"
                      items={sortData}
                      // onSelect={(item) => handleSelect("country", item)}
                      // isOpen={openDropdown === 1}
                      // toggleDropdown={() => toggleDropdown(1)}
                      className="bg-white border xl:w-full border-[#EBE9E0] font-openSans"
                    />
                  </div>
                </div>

                <div className="py-3">
                  <p className="text-xs  tracking-wide pb-2 font-openSans uppercase">
                    Do you have a preference for countries you would like to buy
                    from?
                  </p>
                  <div>
                    <Dropdown
                      label="-Select-"
                      items={sortData}
                      // onSelect={(item) =>
                      //   handleSelect("buyFromCountries", item)
                      // }
                      // isOpen={openDropdown === 2}
                      // toggleDropdown={() => toggleDropdown(2)}
                      className="bg-white border xl:w-full border-[#EBE9E0] font-openSans"
                    />
                  </div>
                </div>

                <div className="flex flex-col py-4 md:flex-row gap-3">
                  <Button
                    label="I'll Do It Later"
                    className="w-full text-nowrap font-openSans md:w-[40%] bg-white uppercase text-xs text-[#0D0106]"
                  />
                  <Button
                    onClick={handleNext}
                    type="button"
                    // disabled={!isStep1Complete}
                    label="Continue"
                    className="w-full font-openSans  uppercase bg-[#F9F8F3] py-[16px] text-xs text-[#0D0106]"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="flex flex-col py-[26px]   px-6 xl:px-12">
              <h1 className="text-2xl md:text-[32px] pb-2">
                What Interests You
              </h1>
              <p className="text-base font-openSans text-[#919089]">
                Personalize your experience by sharing a few details about your
                interests.
              </p>

              <div className="font-openSans mt-6">
                <h3 className="uppercase tracking-wide text-sm">
                  1. What Kind of Antiques Do You Love?
                </h3>
                <p className="text-[#919089] text-sm">
                  Choose your favorite categories to see more of what you’re
                  passionate about.
                </p>

                <div className="flex my-3 px-5 py-6 flex-wrap  justify-center  gap-6 bg-[#F9F8F3]">
                  {intrests.map((interest, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-between"
                    >
                      <Image
                        src={interest.image}
                        alt="interest"
                        width={70}
                        height={70}
                      />
                      <h2 className="uppercase text-xs text-[#919089]">
                        {interest.name}
                      </h2>
                    </div>
                  ))}
                </div>
              </div>

              <div className="font-openSans mt-6">
                <h3 className="uppercase text-sm tracking-wide">
                  2. What's your style?
                </h3>
                <p className="text-[#919089] text-sm py-2">
                  Select the eras and styles that inspire you most, from Art
                  Deco to Victorian.
                </p>

                <div className="flex flex-col gap-3 bg-[#F9F8F3] p-6 h-40 overflow-y-auto">
                  {checkboxLabels.map((item) => (
                    <div
                      key={item}
                      onClick={() => handleCheckboxChange(item)}
                      className="flex items-center gap-3 py-2 cursor-pointer"
                    >
                      <Checkbox1 label={item} name={item} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-3 mt-5">
                <Button
                  label="I'll Do It Later"
                  className="w-1/3  font-openSans py-[16px] bg-white uppercase text-xs text-[#0D0106]"
                />
                <Button
                  onClick={handleNext}
                  // disabled={!isStep2Complete}
                  label="Continue"
                  className="w-2/3  font-openSans py-[16px] uppercase bg-[#F9F8F3] text-xs text-[#0D0106]"
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className=" px-6 xl:px-12 py-[24px]">
              <h1 className="text-3xl">Stay in the Loop</h1>
              <p className="text-sm text-[#919089] uppercase  tracking-wide py-2 font-openSans">
                Never Miss a New Arrival
              </p>

              <div className="flex items-center gap-2 py-7">
                <Checkbox1
                  name="notifications"
                  checked={formData.enableNotifications}
                  onChange={() =>
                    setFormData((prev) => ({
                      ...prev,
                      enableNotifications: !prev.enableNotifications,
                    }))
                  }
                />
                <label className="text-[14px]  font-openSans">
                  Enable email notifications to get updates on items matching
                  your preferences.
                </label>
              </div>

              <Button
                label="Finish Setting Up My Account"
                onClick={handleFinish}
                className="uppercase w-full font-openSans tracking-wide text-xs py-[12px]"
              />
            </div>
          )}

          {step === 4 && (
            <div className=" flex flex-col items-center px-6 xl:px-10">
              <h1 className="text-[40px]">Welcome To</h1>
              <h1 className={` ${playfair.className} text-[40px]`}>
                The Antique Collectors
              </h1>
              <h1 className="text-[40px]">Anna!</h1>
              <p className="text-sm tracking-wide font-openSans text-center py-4 text-[#919089] uppercase ">
                The global platform for lovers of all antiques and jewelry.
              </p>

              <div className="mt-3">
                <p className="py-4 text-base text-center font-openSans">
                  Now that you have created an account it is important to follow
                  your favorite sellers so that you see their latest posts in
                  your daily feed.
                </p>
                <p className="py-2 text-base text-center font-openSans">
                  You can do this by heading over the Seller Directory picking
                  out your favourites. To help with this we suggest you use the
                  filters provided to narrow down your search.
                </p>
                <p className="py-2 text-base text-center font-openSans">
                  Alternatively you can find Sellers by exploring the ‘Shop By
                  Category’ section, or the Search bar.
                </p>
              </div>

              <p className={`text-[24px] ${playfair.className} py-4`}>
                Happy Hunting
              </p>

              <Button
                label="Start Exploring"
                className="uppercase w-full mt-4 py-[16px] mb-8 font-openSans text-xs"
              />
            </div>
          )}

          <DialogFooter />
        </DialogContent>
      </Dialog>
    </div>
  );
};
