import ISection from "../models/ISection";

export const totalSectionSize = (sections: ISection[]): number => {
  let total = 0;

  sections.forEach((section) => {
    total += section.size;
  });

  return total;
};

export const calculateBlockWidth = (
  total: number,
  currentSize: number
): number => {
  return (currentSize * 100) / total;
};

export const calculateIntervalValue = (
  percentagePorgress: number,
  section: ISection
) => {
  const interval = section.vma + section.size - section.vma;
  const currentVma = Math.round(percentagePorgress * interval + section.vma);

  return currentVma;
};
