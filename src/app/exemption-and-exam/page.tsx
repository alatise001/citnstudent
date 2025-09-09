"use client";
import React from "react";
import ExemptionAndExamForm from "@/components/forms/exemption-and-exam-form";
import ExemptionAndExamInfo from "@/components/exemption-and-exam-info";

export default function ExemptionAndExamPage() {
  const [isQualification, setIsQualification] = React.useState("none");

  return (
    <div className="max-w-md md:max-w-[960px] mx-auto p-10">
      <ExemptionAndExamForm setIsQualification={setIsQualification} />

      <ExemptionAndExamInfo isQualification={isQualification} />
    </div>
  );
}
