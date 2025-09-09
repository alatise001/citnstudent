import { Dot } from "lucide-react";
import { Button } from "@/components/ui/button";
import data from "../../public/data/citn-exam-database.json";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { date, object } from "zod";
import Link from "next/link";

export default function ExemptionAndExamInfo({
  isQualification,
}: {
  isQualification: string;
}) {
  const selectedQualification = Object?.entries(data?.qualifications)?.find(
    (value) => value[1]?.name === isQualification
  );

  const exams = Object.entries(selectedQualification?.[1]?.requiredExams || {});
  const exemptions = Object.entries(
    selectedQualification?.[1]?.exemptions || {}
  );
  const totalExemptionFee = selectedQualification?.[1]?.exemptionFee || 0;

  const totalExamFee = Object.entries(
    selectedQualification?.[1]?.examFees || {}
  ).reduce((acc, [key, value]) => acc + Number(value), 0);

  const examRegSteps = data.examinationApplication.steps;

  return (
    <>
      {isQualification === "none" ? (
        <>
          <h1 className="flex justify-center items-center h-[450px] text-[28px] md:text-[32px] text-center">
            Please select and submit a qualification to view your exemptions and
            required exams.
          </h1>
        </>
      ) : (
        <div className="mt-10 md:mt-15 space-y-1.5">
          <h1 className="text-[32px]">{selectedQualification?.[1].name}</h1>

          <div className=" md:flex md:justify-between md:mt-10">
            <div className="md:w-[40%]">
              <h2 className="text-[24px] ">Exemptions</h2>
              <p className="text-[13px]">
                Based on your selection, you are eligible for the following
                exemptions at their respective levels:
              </p>

              <div className="p-4 mt-5 border border-black/70 rounded-md space-y-3">
                {exemptions.map((value) => (
                  <div key={value[0]}>
                    <h2 className="text-[16px] mb-1.5 uppercase">{value[0]}</h2>
                    <div className="space-y-1.5 text-[13px]">
                      {(value[1] as string[]).map((exam: string) => (
                        <div key={exam} className="flex items-center">
                          <Dot height={24} width={24} />
                          <p>{exam}</p>
                        </div>
                      ))}
                    </div>
                    <Separator className="bg-black/70 mt-3" />
                  </div>
                ))}

                <div className="flex justify-between mt-6 uppercase font-bold">
                  <p className="text-base">Total fee</p>
                  <p className="text-base">₦{totalExemptionFee}</p>
                </div>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="mt-5">
                    STUDENT&apos;S EXAMINATION APPLICATION PROCESS
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    {examRegSteps.map((step, index) => (
                      <div
                        key={index}
                        className="flex items-center font-semibold gap-1"
                      >
                        <Dot height={24} width={24} className="" />
                        <p className="w-[90%]">{step}</p>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className=" mt-10 md:mt-0 md:w-[40%]">
              <h2 className="text-[24px]">Exams</h2>
              <p className="text-[13px]">
                Based on your selection, you are required to write the following
                exams at their respective levels:
              </p>
              <div className="p-4 mt-5 border border-black/70 rounded-md space-y-3">
                {exams.map((value) => (
                  <div key={value[0]}>
                    <h2 className="text-[16px] mb-1.5 uppercase">{value[0]}</h2>
                    <div className="space-y-1.5 text-[13px]">
                      {(value[1] as string[]).map((exam: string) => (
                        <div key={exam} className="flex items-center">
                          <Dot height={24} width={24} />
                          <p>{exam}</p>
                        </div>
                      ))}
                    </div>
                    <Separator className="bg-black/70 mt-3" />
                  </div>
                ))}

                <div className="flex justify-between mt-6 uppercase font-bold">
                  <p className="text-base">Total fee</p>
                  <p className="text-base">₦{totalExamFee}</p>
                </div>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="mt-5">
                    STUDENT&apos;S EXAMINATION APPLICATION PROCESS
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    {examRegSteps.map((step, index) => (
                      <div
                        key={index}
                        className="flex items-center font-semibold gap-1"
                      >
                        <Dot height={24} width={24} className="" />
                        <p className="w-[90%]">{step}</p>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Link href="/redirection" className="text-[14px] underline">
                <Button className="self-start mt-10  w-full h-[48px] bg-[#008f47] text-white hover:bg-white hover:border-[#008f47] hover:border hover:text-[#008f47]">
                  Proceed to Redirection
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
