import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Dot } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="bg-[#008f47] h-[60px] flex items-center justify-around text-center py-1">
        <p className="font-bold text-[24px] md:text-[34px] text-[#fff] w-[80%]">
          WANT TO BECOME A MEMBER OF CITN?
        </p>
      </div>
      <div className=" h-[80vh] flex self-center gap-6 flex-col items-center justify-center">
        {/* <div>
        <h1 className="text-[16px] md:text-[20px] capitalize text-center">
          <b>Note:</b> your are to following these process during your
          Registration
        </h1>

        <div>
          <div className="flex items-center font-semibold gap-1">
            <Dot height={24} width={24} className="" />
            {}
            <p className="w-[90%]"></p>
          </div>
        </div>
      </div> */}

        <div className="flex flex-col md:flex-row items-center justify-between gap-20 w-[80%] md:w-[90%] md:h-[80%]  border-gray-300 rounded-lg shadow-md p-10 ">
          <div className="flex flex-col items-center gap-5 md:gap-15 md:w-[45%]">
            <h1 className="text-[18px] md:text-[22px] capitalize text-center">
              Find out if you are <br />
              eligible for <b>CITN Direct</b> Membership
            </h1>
            <Link
              href="https://citnevents.org/citndirecteligibility/"
              className="text-[14px] underline mb-5"
            >
              <p className="text-center text-[16px] md:text-[20px] hover:bg-white hover:text-[#008f47]">
                Proceed to check <b>Eligibility</b>
              </p>
            </Link>
          </div>
          <Separator
            orientation="vertical"
            className=" h-[60%] bg-gray-900 md:block hidden"
          />

          <div className="flex flex-col gap-5 md:gap-15 items-center md:w-[45%]">
            <h1 className="text-[18px] md:text-[22px] capitalize text-center">
              Not Eligible for Direct Membership?
            </h1>

            <h1 className="text-[18px] md:text-[22px] capitalize text-center">
              Check your <br /> <b>Exemptions </b> and <b>Examinations</b>{" "}
              requirements
            </h1>
            <Link href="/information" className="text-[14px] underline mb-5">
              <p className="text-center text-[16px] md:text-[20px] hover:bg-white hover:text-[#008f47]">
                Proceed to Exemptions and Examinations Requirements
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
