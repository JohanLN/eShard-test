import React, { useState } from "react";
import ISection from "../models/ISection";
import ISelectedInfo from "../models/ISelectedInfo";
import DrawRectangle from "./DrawRectangle";
import SectionBlock from "./SectionBlock";

interface ISectionListProps {
  sections: ISection[];
  hoveredSection: ISelectedInfo | null;
  handleMouseMove: (
    event: React.MouseEvent<HTMLDivElement>,
    section: ISection
  ) => void;
  mousePosition: {
    x: number;
    y: number;
  };
}

const SectionList = (props: ISectionListProps) => {
  const { sections, hoveredSection, handleMouseMove, mousePosition } = props;

  const [selectedInfo, setSelectedInfo] = useState<ISelectedInfo | null>(null);
  const [selectedMousePosition, setSelectedMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setSelectedInfo({ name: hoveredSection?.name, vma: hoveredSection?.vma });
    setSelectedMousePosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div
      className="flex flex-row space-x-[2px]"
      onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
        handleClick(event)
      }
    >
      {sections.map((section) => (
        <SectionBlock section={section} handleMouseMove={handleMouseMove} />
      ))}
      {hoveredSection && (
        <DrawRectangle
          mousePositionX={mousePosition.x}
          currentSection={hoveredSection}
        />
      )}
      {selectedInfo && (
        <DrawRectangle
          mousePositionX={selectedMousePosition.x}
          currentSection={selectedInfo}
        />
      )}
    </div>
  );
};

export default SectionList;
