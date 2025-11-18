import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CITN Student Exemptions And Examinations",
  description:
    "A web application to help CITN students determine their exemptions and required exams based on their qualifications.",
};

export default function ExemptionAndExaminationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="z-0 min-h-screen">
      {/* <div className="-z-10 min-h-screen backdrop-blur-md outline-2"> */}
      <header className=" h-[20%] md:h-[30%] flex flex-col overflow-hidden">
        <div className="h-[50%] md:h-[80%] bg-[#008f47] flex items-center justify-around text-center py-1">
          <p className="font-bold text-[24px] md:text-[32px] text-[#fff] w-[80%]">
            CITN Student Exemptions And Examinations
          </p>
        </div>
      </header>
      {children}
      {/* </div> */}
    </div>
  );
}
