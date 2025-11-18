import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Dot } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Redirection() {
  return (
    <div className="h-[75vh] flex gap-6 flex-col items-center justify-center">
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
      <div className="flex flex-col md:flex-row items-center justify-between gap-20 w-[80%] md:w-[60%] h-[80%] border border-gray-300 rounded-lg shadow-lg p-10 ">
        <div className="flex flex-col items-center gap-5 md:gap-15 md:w-[45%]">
          <h1 className="text-[16px] md:text-[20px] capitalize text-center">
            If you aren&apos;t a registered student, click the button below to
            Register
          </h1>
          <Link
            href="https://citnevents.org/citndirecteligibility/"
            className="text-[14px] underline mb-5"
          >
            <Button className="bg-[#008f47] text-white hover:bg-white hover:border-[#008f47] hover:border hover:text-[#008f47]">
              Proceed to Student Registration Form
            </Button>
          </Link>
        </div>
        <Separator
          orientation="vertical"
          className=" h-[60%] bg-gray-900 md:block hidden"
        />
        <div className="flex flex-col gap-5 md:gap-15 items-center md:w-[45%]">
          <h1 className="text-[16px] md:text-[20px] capitalize text-center">
            If you are a registered student, click the button below to go to
            your portal
          </h1>
          <Link
            href="https://www.citn.org/login_interface_student.php"
            className="text-[14px] underline mb-5"
          >
            <Button className="bg-[#008f47] text-white hover:bg-white hover:border-[#008f47] hover:border hover:text-[#008f47]">
              Proceed to Your Student Portal
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
