import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";

export default function Redirection() {
  return (
    <div className="h-[75vh] flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-between gap-20 w-[80%] md:w-[60%] h-[80%] border border-gray-300 rounded-lg shadow-lg p-10 ">
        <div className="flex flex-col items-center gap-5 md:gap-15 md:w-[45%]">
          <h1 className="text-[16px] md:text-[20px] capitalize text-center">
            If you haven&apos;t registered click the button below to Register
          </h1>
          <Link
            href="https://www.citn.org/mem_reg.php?mtype=PFS"
            className="text-[14px] underline mb-5"
          >
            <Button className="bg-[#008f47] text-white hover:bg-white hover:border-[#008f47] hover:border hover:text-[#008f47]">
              Proceed to Registration Form
            </Button>
          </Link>
        </div>
        <Separator
          orientation="vertical"
          className=" h-[60%] bg-gray-900 md:block hidden"
        />
        <div className="flex flex-col gap-5 md:gap-15 items-center md:w-[45%]">
          <h1 className="text-[16px] md:text-[20px] capitalize text-center">
            If you have registered already, click the button below to go to your
            portal
          </h1>
          <Link
            href="https://www.citn.org/login_interface_student.php"
            className="text-[14px] underline mb-5"
          >
            <Button className="bg-[#008f47] text-white hover:bg-white hover:border-[#008f47] hover:border hover:text-[#008f47]">
              Proceed to Your Portal
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
