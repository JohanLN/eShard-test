import React, { useState } from "react";
import { calculateIntervalValue } from "../lib/calculateBlock";
import { numberToHexa } from "../lib/typeFormatter";
import ISection from "../models/ISection";
import ISelectedInfo from "../models/ISelectedInfo";
import SectionList from "./SectionList";

const NavBar = (props: { sections: ISection[] }) => {
  const { sections } = props;
  const [hoveredSection, setHoveredSection] = useState<ISelectedInfo | null>(
    null
  );
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>,
    section: ISection
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const currentPercentagePosition = offsetX / rect.width;
    const currentVma = calculateIntervalValue(
      currentPercentagePosition,
      section
    );

    setHoveredSection({
      name: section.name,
      vma: numberToHexa(currentVma),
    });
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseLeave = () => {
    setHoveredSection(null);
  };

  return (
    <div
      className="w-full h-full p-2"
      onMouseLeave={() => {
        handleMouseLeave();
      }}
    >
      <SectionList
        sections={sections}
        mousePosition={mousePosition}
        handleMouseMove={handleMouseMove}
        hoveredSection={hoveredSection}
      />
    </div>
  );
};

export default NavBar;
