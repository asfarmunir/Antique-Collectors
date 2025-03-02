"use client";
import React, { useContext, useState } from "react";
import { IoClose } from "react-icons/io5";
import { subscriptionPlans } from "@/lib/data";
import Button from "@/components/ui/Button";
import { LayoutContext } from "../layout";
import { useSellerAccountDetails } from "@/hooks/useSellerAccount";
import { Dialog } from "@/components/ui/Dialog";
import SellerAccountSetting from "@/components/shared/SellerAccountSetting";
import { SellerData } from "@/hooks/useSellerAccount";
import SellerAccountFinish from "@/components/shared/sellerAccountFinish";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";

const sub = [
  "posting",
  "feed access",
  "scheduled posts",
  "account support",
  "forum access",
  "pop-Up ads",
  "messaging",
  "sharing",
  "analytics",
];
const Subscription = ({
  onClose,
  sellerData,
  onUpdate,
}: {
  onClose: () => void;
  sellerData: SellerData;
  onUpdate: (data: SellerData) => void;
}) => {
  const { formData, setFormData, handleNext, setStep, step } =
    useSellerAccountDetails({ initialData: sellerData, onUpdate });
  // const {setHideNavbarFooter} = useContext(LayoutContext);
  const { setHideNavbarFooter } = useContext(LayoutContext);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const router = useRouter();

  React.useEffect(() => {
    setHideNavbarFooter(true);

    // Revert the Navbar and Footer visibility when the component unmounts
    return () => setHideNavbarFooter(false);
  }, [setHideNavbarFooter]);

  // Method to update the subscription plan
  const updateSubscriptionPlan = (plan: string) => {
    setFormData((prev) => ({ ...prev, subscriptionPlan: plan }));

    toast.success(`Subscription plan updated to ${plan}`);
    // router.push('/');
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <>
      <div className="absolute top-0 w-full">
        <div className="border-b border-[#EBE9E0] flex flex-row justify-between gap-6 px-4 xl:px-[80px] items-center">
          <h1 className="text-xl py-4 uppercase font-playfair">
            Setting up your account{" "}
          </h1>
          <Link href={"/"}>
            <IoClose className="text-xl" />
          </Link>
        </div>

        <div>
          <div className="mt-16 relative">
            <div className="px-4 md:px-10 xl:px-[80px] md:w-[650px]">
              <h1 className="text-[48px] leading-[63px] font-playfair">
                Choose your Subscription Plan
              </h1>
              <p className="py-6 text-sm text-[#919089]">
                Each tier is designed to fit your unique needs as a seller on
                The Antique Collector. Choose the plan that best matches your
                goals and begin sharing your collection with a community of
                passionate collectors.
              </p>
            </div>

            <div className="bg-[#F9F8F3] mt-10 py-8 px-6 xl:px-[80px] md:pl-12 pr-6">
              {[
                "posting",
                "feed access",
                "scheduled posts",
                "account support",
                "forum access",
                "pop-Up ads",
                "messaging",
                "sharing",
                "analytics",
              ].map((item) => (
                <p
                  className="border-b w-full max-w-lg py-1 font-semibold border-[#EBE9E0] text-[#0D0106] capitalize text-xs"
                  key={item}
                >
                  {item}
                </p>
              ))}
            </div>

            <div className="lg:absolute lg:right-10 lg:top-0 ">
              <div className="mt-5 lg:mt-0 grid grid-cols-1  md:grid-cols-3 gap-2 px-4 lg:px-0">
                {subscriptionPlans.map((plan) => (
                  <div
                    key={plan.name}
                    className={`border relative min-w-52 h-[650px] rounded-sm p-4 bg-[#FFFFFF8F] flex flex-col justify-between gap-3 items-center  border-[#EBE9E0] ${
                      plan.name === "Silver" ? "border-2 border-[#0D0106]" : ""
                    }`}
                  >
                    <div className="mt-6 space-y-3  text-center flex flex-col items-center">
                      <p
                        className={`${
                          plan.name === "Silver"
                            ? "bg-[#0D0106] flex items-center justify-center absolute top-0 py-1 w-full "
                            : ""
                        }   text-white text-[10px] `}
                      >
                        {plan.name === "Silver" ? "Popular Plan" : ""}
                      </p>
                      <h1 className="text-2xl font-playfair uppercase ">
                        {plan.name}
                      </h1>
                      <p className="text-xs">
                        <span className="text-base font-semibold">
                          ${plan.price_per_month}{" "}
                        </span>
                        <span className="text-[#919089]">user/mo</span>
                      </p>
                      <p className="text-xs">
                        or ${plan.price_per_year}{" "}
                        <span className="text-[#919089]">/year</span>
                      </p>
                    </div>
                    <div className="mt-2 lg:mt-4">
                      <ul className="list-inside list-disc">
                        {Object.entries(plan.features).map(([key, value]) => (
                          <li
                            key={key}
                            className="text-center  border-b border-[#EBE9E0]"
                          >
                            <span className="text-xs text-[#919089]">
                              {" "}
                              {value}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-14 flex justify-center items-center">
                        <Button
                          label="Select"
                          onClick={() => updateSubscriptionPlan(plan.name)}
                          className="py-2 w-3/4  text-xs uppercase text-[#0D0106] bg-white border-[1px] xl:w-[124px] font-semibold border-[#0D0106]"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-36 mb-20 px-8 xl:px-[80px]">
          <h1 className="text-[32px] font-playfair capitalize">
            Or Continue with a free account
          </h1>
          <div className="py-12">
            <p className="text-sm">
              <span className="pr-1">•</span> Minimum Posts: 1 per week (or
              auto-bump to Bronze)
            </p>
            <p className="text-sm">
              <span className="pr-1">•</span> Messaging: View-Only – Receive
              email notifications of new messages, but no in-app message view.
            </p>
            <p className="text-sm">
              <span className="pr-1">•</span> Forum Access: Not included
            </p>
            <p className="text-sm">
              <span className="pr-1">•</span> Features: Full sharing features
            </p>
            <p className="text-sm">
              <span className="pr-1">•</span> Basic analytics
            </p>
          </div>

          <Button
            className="w-1/3 p-2 py-4 uppercase text-xs"
            type="submit"
            label="Continue"
          />
        </div>
      </div>

      {isDialogOpen && (
        <SellerAccountFinish onClose={() => setIsDialogOpen(false)} />
      )}
    </>
  );
};

export default Subscription;
