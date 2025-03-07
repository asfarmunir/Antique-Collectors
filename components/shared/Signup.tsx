import React, { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/Dialog";
import Button from "../ui/Button";
import { RxCross2 } from "react-icons/rx";
import { LuUpload } from "react-icons/lu";
import InputField from "../ui/InputField";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Checkbox1 from "../ui/tickbox";
import Link from "next/link";
// import SellerAccountSetting from "./SellerAccountSetting";
import SellerAccountSetting from "./SellerAccountSetting";
import { BuyerAccountSetting } from "./BuyerAccountSetting";
import { toast, ToastContainer } from "react-toastify";
import useSignup from "@/hooks/useSignup";
import localFont from "next/font/local";
const playfair = localFont({ src: "../../fonts/PlayfairDisplay-Italic.ttf" });
const SignUp = ({ onClose }: { onClose: any }) => {
  const {
    formData,
    currentStep,
    otp,
    handleInputChange,
    handleOtpChange,
    handleSubmit,
  } = useSignup();

  const [isBuyerOpen, setIsBuyerOpen] = useState(false);
  const [isSettingOpen, setIsSettingOpen] = useState(false);

  const handleSellerAccount = () => setIsSettingOpen(!isSettingOpen);
  const handleBuyer = () => setIsBuyerOpen(!isBuyerOpen);

  return (
    <>
      <div className="relative ">
        <Dialog open onOpenChange={onClose}>
          <DialogContent
            className="font-playfair  max-h-[95svh] p-0 overflow-y-auto"
            customWidth="max-w-[554px] "
          >
            <DialogHeader className="font-playfair xl:p-[32px] text-xl border-b border-[#EBE9E0] pb-2 ">
              <DialogTitle>
                <Button
                  onClick={onClose}
                  icon={<RxCross2 className="text-[#0D0106]" />}
                  label=""
                  className="bg-transparent absolute right-0 top-4"
                />
                <h1 className="font-playfair text-base xl:text-[24px] uppercase text-start">
                  {currentStep === 1 && <span>Login or Sign Up</span>}

                  {currentStep > 1 && <span>Sign Up</span>}
                </h1>
              </DialogTitle>
            </DialogHeader>

            {/* step 1 */}

            {currentStep === 1 && (
              <div className="flex flex-col px-6 xl:px-[48px] ">
                <h1 className="text-[48px] pt-8 text-center leading-tight">
                  Welcome to <br />
                  <span className={`${playfair.className}`}>
                    {" "}
                    The Antique Collector
                  </span>
                </h1>
                <p className="text-[16px] text-[#919089] text-center   font-openSans pb-6 pt-4">
                  Join the community of antique and jewelry lovers today and see
                  a custom feed tailored to your requirements
                </p>

                <div className="my-4">
                  <form onSubmit={handleSubmit}>
                    <div className="">
                      <label className="block mb-2 text-[12px] uppercase  font-openSans tracking-wide">
                        use your email address to sign up or log in
                      </label>
                      <InputField
                        className="text-sm  font-openSans placeholder:text-sm text-[#919089] placeholder:text-[#919089]  w-full border border-[#EBE9E0]"
                        placeholder="email@gmail.com"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                      />

                      <Button
                        type="submit"
                        label="Continue"
                        className="text-[12px] uppercase mt-6 hover:opacity-80 py-[16px] tracking-wider w-full  font-openSans"
                      />
                    </div>
                  </form>
                </div>

                <div className="flex items-center gap-3 py-3 xl:py-5">
                  <div className="flex-grow border-t border-[#EBE9E0]"></div>
                  <p className="text-[#919089] px-3 text-[14px]">or</p>
                  <div className="flex-grow border-t border-[#EBE9E0]"></div>
                </div>

                <div className="pb-8">
                  <p className="text-[12px]  font-openSans uppercase text-[#0D0106] py-2">
                    Instantly Login or sign up via google
                  </p>

                  <div className="flex flex-col md:flex-row gap-3">
                    <Button
                      icon={<FcGoogle />}
                      label="Continue with google"
                      className="w-full font-semibold hover:bg-gray-100  py-[16px] font-openSans bg-white uppercase  border border-[#919089] text-nowrap flex text-xs text-[#0D0106] flex-row "
                    />
                    <Button
                      icon={<FaApple />}
                      label="Continue with apple"
                      className="w-full font-semibold  hover:bg-gray-100 py-[16px] uppercase  font-openSans bg-white border border-[#919089] text-nowrap text-xs flex flex-row text-[#0D0106] "
                    />
                  </div>
                </div>
              </div>
            )}

            {/* step 2 */}

            {currentStep === 2 && (
              <div className="flex flex-col px-2 md:px-6 xl:px-[48px] py-4">
                <h1 className="text-[32px] xl:py-3 mb-4">
                  Create your account
                </h1>
                <div className="my-4">
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-2">
                      <label className="block text-xs uppercase  font-openSans">
                        use your email address to sign up or login
                      </label>
                      <InputField
                        className="text-sm  font-openSans text-[#0D0106] placeholder:text-sm  w-full border-b border-[#919089]"
                        placeholder="email@gmail.com"
                        value={formData.email}
                        type="email"
                        readOnly
                      />
                    </div>

                    <div className="mt-4">
                      <label className="block text-xs pb-2 uppercase  font-openSans">
                        Your name
                      </label>
                      <InputField
                        className="text-sm  font-openSans placeholder:text-sm text-[#919089] w-full border border-[#EBE9E0]"
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="First and Last name"
                        type="text"
                      />
                    </div>
                    <div className="mt-4">
                      <label className="block text-xs pb-2 uppercase  font-openSans">
                        mobile number
                      </label>
                      <InputField
                        className="text-sm  font-openSans placeholder:text-sm text-[#919089] w-full border border-[#EBE9E0]"
                        placeholder="+44"
                        type="number"
                        required
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="mt-4">
                      <label className="block text-xs pb-2 uppercase  font-openSans">
                        create a Password
                      </label>
                      <InputField
                        required
                        minLength={8}
                        className="text-sm  font-openSans placeholder:text-sm text-[#919089] w-full border border-[#EBE9E0]"
                        placeholder="*******"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                      />
                      <p className="text-[12px] py-2  font-openSans text-[#919089] text-start">
                        Create a strong password containing at least 1 Upper
                        case, 1 Lower case and a Number
                      </p>
                    </div>

                    <div className="mt-4">
                      <label className="block text-xs pb-2 uppercase  font-openSans">
                        confirm Password
                      </label>
                      <InputField
                        required
                        minLength={8}
                        className="text-sm  font-openSans placeholder:text-sm text-[#919089] w-full border border-[#EBE9E0]"
                        placeholder="*******"
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="mt-7  inline-flex items-center gap-2 mb-4">
                      <Checkbox1
                        name="terms"
                        checked={formData.terms}
                        onChange={handleInputChange}
                      />
                      <p className="text-[14px] text-[#919089] font-openSans">
                        By signing up you agree to our{" "}
                        <span className="text-black">Terms and Conditions</span>{" "}
                        & <span className="text-black">Privacy Policy.</span>
                      </p>
                    </div>

                    <Button
                      type="submit"
                      label="Continue"
                      className="text-sm hover:opacity-80 capitalize w-full  font-openSans"
                    />
                  </form>
                </div>

                <div className="flex items-center gap-3 py-3">
                  <div className="flex-grow border-t border-[#EBE9E0]"></div>
                  <p className="text-[#919089] px-3 text-[[14px]">or</p>
                  <div className="flex-grow border-t border-[#EBE9E0]"></div>
                </div>

                <div>
                  <p className="text-[12px]  font-openSans uppercase text-[#0D0106] py-2">
                    Instantly Login or sign up via google
                  </p>

                  <div className="flex flex-col md:flex-row pb-4 gap-3">
                    <Button
                      icon={<FcGoogle />}
                      label="Continue with google"
                      className="w-full hover:bg-gray-100 py-[16px] text-nowrap  font-openSans bg-white uppercase  border border-[#919089] flex text-xs text-[#0D0106] flex-row "
                    />
                    <Button
                      icon={<FaApple />}
                      label="Continue with apple"
                      className="w-full hover:bg-gray-100 uppercase text-nowrap  font-openSans bg-white border border-[#919089] text-xs flex flex-row text-[#0D0106] "
                    />
                  </div>
                </div>
              </div>
            )}

            {/* step 3 */}

            {/* code verification */}

            {currentStep === 3 && (
              <div className="px-8 xl:px-[44px] ">
                <h1 className="text-[#0D0106] py-4 capitalize text-[30px]">
                  Please verify your email address to finish creating your
                  account
                </h1>

                <div className="mt-6 text-[#0D0106]">
                  <p className=" font-openSans text-[#919089] text-[16px] mb-2 ">
                    We’ve sent a verification code to email@address.com
                    containing 4-digit verification code.{" "}
                  </p>

                  {/* <InputField
                    className="text-sm text-[#0D0106]  font-openSans placeholder:text-sm  w-full border-b border-[#919089]"
                    placeholder="email@gmail.com"
                    value={formData.email}
                    type="email"
                    readOnly
                  /> */}

                  <div className="py-4">
                    <p className="text-[12px] text-[#0D0106]  font-openSans uppercase">
                      Your 4-digit code
                    </p>

                    <div className="flex flex-row gap-4 py-2">
                      {otp.map((digit, index) => (
                        <InputField
                          className="border border-[#EBE9E0] h-32 text-4xl  w-full"
                          key={index}
                          value={digit}
                          onChange={(e) =>
                            handleOtpChange(index, e.target.value)
                          }
                          maxLength={1}
                        />
                      ))}
                    </div>

                    <p className="text-[14px] text-[#463F3A] my-5 font-openSans">
                      Didn't receive a code?{" "}
                      <Link href={"#"} className="uppercase text-[10px]">
                        Resend
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* last step */}

            {currentStep === 4 && (
              <div className="flex flex-col items-center px-8 xl:px-[48px] ">
                <h1 className=" text-2xl xl:text-[48px] xl:py-7 leading-[3.2rem] text-center">
                  Welcome to <br />{" "}
                  <span className={`${playfair.className}`}>
                    The Antique Collector
                  </span>{" "}
                  Anna!
                </h1>

                <div className=" font-openSans text-center mt-6">
                  <p className="text-[#0D0106] text-[14px] xl:mb-2  tracking-wide uppercase">
                    Are You Here to Buy or Sell?
                  </p>
                  <p className="text-[16px] text-[#919089] pt-2 pb-3">
                    Let us know your goals, and we’ll tailor your journey to
                    match. You can start as a Buyer, and further upgrade your
                    account to Seller.
                  </p>
                </div>

                <div className=" font-openSans my-6 flex flex-col w-full  gap-3 ">
                  <Button
                    type="submit"
                    onClick={handleBuyer}
                    label="I'm a Buyer"
                    className="bg-[#EBE9E0] py-[14px] text-[12px] uppercase text-[#463F3A] w-full"
                  />
                  <Button
                    type="submit"
                    label="I'm a Seller"
                    className="bg-[#463F3A] text-[12px] py-[14px] text-white uppercase w-full"
                    onClick={handleSellerAccount}
                  />
                </div>
              </div>
            )}

            <DialogFooter></DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {isSettingOpen && (
        <SellerAccountSetting onClose={() => setIsSettingOpen(false)} />
      )}
      {isBuyerOpen && (
        <BuyerAccountSetting onClose={() => setIsBuyerOpen(false)} />
      )}

      <ToastContainer />
    </>
  );
};

export default SignUp;
