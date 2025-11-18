/**
 * CITN Examination Fee Calculator
 * Calculates exemption and examination fees based on the official CITN fee structure
 */

interface ExemptionFees {
  foundation: { perPaper: number; formFee: number };
  ptx1: { perPaper: number; formFee: number };
  ptx2: { perPaper: number; formFee: number };
}

interface ExamFees {
  foundation: { perPaper: number; formFee: number; registrationFee: number };
  ptx1: { perPaper: number; formFee: number; registrationFee: number };
  ptx2: { perPaper: number; formFee: number; registrationFee: number };
}

interface LevelSubjects {
  foundation: string[];
  ptx1: string[];
  ptx2: string[];
}

interface FeeCalculationResult {
  exemptionFee: {
    foundation: number;
    ptx1: number;
    ptx2: number;
    total: number;
  };
  examFee: {
    foundation: number;
    ptx1: number;
    ptx2: number;
    total: number;
  };
  grandTotal: number;
}

/**
 * Calculate exemption fee for a specific level
 * Formula: (numberOfPapers × perPaperFee) + formFee
 */
function calculateExemptionFeeForLevel(
  subjects: string[],
  perPaperFee: number,
  formFee: number
): number {
  // Filter out special cases like "No exemptions", "By Transcript", "Subject by subject exemption"
  const validSubjects = subjects.filter(
    (subject) =>
      subject !== "No exemptions" &&
      subject !== "By Transcript" &&
      subject !== "Subject by subject exemption" &&
      subject !== "Based on exemptions"
  );

  if (validSubjects.length === 0) return 0;

  return validSubjects.length * perPaperFee + formFee;
}

/**
 * Calculate exam fee for a specific level
 * Formula: (numberOfPapers × perPaperFee) + formFee + registrationFee
 */
function calculateExamFeeForLevel(
  subjects: string[],
  perPaperFee: number,
  formFee: number,
  registrationFee: number
): number {
  // Filter out special cases like "No exams required", "By Transcript", "Subject by subject exemption"
  const validSubjects = subjects.filter(
    (subject) =>
      subject !== "No exams required" &&
      subject !== "By Transcript" &&
      subject !== "Subject by subject exemption" &&
      subject !== "Based on exemptions"
  );

  if (validSubjects.length === 0) return 0;

  return validSubjects.length * perPaperFee + formFee + registrationFee;
}

/**
 * Main function to calculate total fees for a qualification
 */
export function calculateQualificationFees(
  exemptions: LevelSubjects,
  requiredExams: LevelSubjects,
  exemptionFees: ExemptionFees,
  examFees: ExamFees
): FeeCalculationResult {
  // Calculate exemption fees for each level
  const foundationExemptionFee = calculateExemptionFeeForLevel(
    exemptions.foundation,
    exemptionFees.foundation.perPaper,
    exemptionFees.foundation.formFee
  );

  const ptx1ExemptionFee = calculateExemptionFeeForLevel(
    exemptions.ptx1,
    exemptionFees.ptx1.perPaper,
    exemptionFees.ptx1.formFee
  );

  const ptx2ExemptionFee = calculateExemptionFeeForLevel(
    exemptions.ptx2,
    exemptionFees.ptx2.perPaper,
    exemptionFees.ptx2.formFee
  );

  // Calculate exam fees for each level
  const foundationExamFee = calculateExamFeeForLevel(
    requiredExams.foundation,
    examFees.foundation.perPaper,
    examFees.foundation.formFee,
    examFees.foundation.registrationFee
  );

  const ptx1ExamFee = calculateExamFeeForLevel(
    requiredExams.ptx1,
    examFees.ptx1.perPaper,
    examFees.ptx1.formFee,
    examFees.ptx1.registrationFee
  );

  const ptx2ExamFee = calculateExamFeeForLevel(
    requiredExams.ptx2,
    examFees.ptx2.perPaper,
    examFees.ptx2.formFee,
    examFees.ptx2.registrationFee
  );

  // Calculate totals
  const totalExemptionFee =
    foundationExemptionFee + ptx1ExemptionFee + ptx2ExemptionFee;
  const totalExamFee = foundationExamFee + ptx1ExamFee + ptx2ExamFee;
  const grandTotal = totalExemptionFee + totalExamFee;

  return {
    exemptionFee: {
      foundation: foundationExemptionFee,
      ptx1: ptx1ExemptionFee,
      ptx2: ptx2ExemptionFee,
      total: totalExemptionFee,
    },
    examFee: {
      foundation: foundationExamFee,
      ptx1: ptx1ExamFee,
      ptx2: ptx2ExamFee,
      total: totalExamFee,
    },
    grandTotal,
  };
}

/**
 * Check if a qualification has special fee notes (transcript-based or subject-by-subject)
 */
export function hasSpecialFeeCalculation(
  exemptions: LevelSubjects,
  requiredExams: LevelSubjects
): { hasSpecial: boolean; note: string | null } {
  const allSubjects = [
    ...exemptions.foundation,
    ...exemptions.ptx1,
    ...exemptions.ptx2,
    ...requiredExams.foundation,
    ...requiredExams.ptx1,
    ...requiredExams.ptx2,
  ];

  if (allSubjects.includes("By Transcript")) {
    return {
      hasSpecial: true,
      note: "Fees calculated based on transcript evaluation",
    };
  }

  if (allSubjects.includes("Subject by subject exemption")) {
    return {
      hasSpecial: true,
      note: "Fees calculated based on subject-by-subject exemption evaluation",
    };
  }

  return { hasSpecial: false, note: null };
}

/**
 * Format currency in Naira
 */
export function formatCurrency(amount: number): string {
  return `₦${amount.toLocaleString()}`;
}
