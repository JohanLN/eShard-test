import ISection from "../models/ISection";
import sections from "../utils/sections.json";
import { calculateBlockWidth, totalSectionSize } from "./calculateBlock";

export const formattedJson = (): ISection[] => {
  const formattedSection = JSON.parse(JSON.stringify(sections)) as ISection[];
  const totalSize = totalSectionSize(formattedSection);

  formattedSection.forEach((section) => {
    section.block = new Array<string>();
    section.sectionWidth = calculateBlockWidth(totalSize, section.size);
  });

  return formattedSection;
};
