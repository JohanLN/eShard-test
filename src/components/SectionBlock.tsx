import React from "react";
import ISection from "../models/ISection";

const SectionBlock = (props: {
  section: ISection;
  handleMouseMove: (
    event: React.MouseEvent<HTMLDivElement>,
    section: ISection
  ) => void;
}) => {
  const { section, handleMouseMove } = props;

  return (
    <React.Fragment key={section.name}>
      <div
        className={` h-5 ${
          section.type === "data" ? "bg-slate-700" : "bg-blue-700"
        }`}
        style={{
          width: `${section.sectionWidth}%`,
        }}
        onMouseMove={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
          handleMouseMove(event, section)
        }
      ></div>
    </React.Fragment>
  );
};

export default SectionBlock;
