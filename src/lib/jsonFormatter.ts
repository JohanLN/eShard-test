import ISection from "../models/ISection";
import sections from "../utils/sections.json";
import { totalSectionSize } from "./calculateBlock";

export const formattedJson = (): ISection[] => {
  const formattedSection = JSON.parse(JSON.stringify(sections)) as ISection[];
  const totalSize = totalSectionSize(formattedSection);

  formattedSection.forEach((section) => {
    section.sectionWidth = (section.size * 100) / totalSize;
  });

  return formattedSection;
};
