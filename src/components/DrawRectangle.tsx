import ISelectedInfo from "../models/ISelectedInfo";

const DrawRectangle = (props: {
  mousePositionX: number;
  currentSection: ISelectedInfo;
}) => {
  const { mousePositionX, currentSection } = props;

  return (
    <>
      <div
        className="absolute w-5 h-5"
        style={{
          left: mousePositionX,
          top: 8,
        }}
      >
        <div className="absolute left-[-10px] top-0 bottom-0 w-5 bg-yellow-300 bg-opacity-30 border-l-[1px] border-yellow-300"></div>
        <div className="absolute right-[10px] top-0 bottom-0 w-[1px] bg-yellow-300"></div>
        <div className="absolute left-0 top-0 bottom-0 pl-[1px] bg-yellow-300"></div>
        <div className="absolute top-[calc(50%-4px)] left-[calc(50%-4px)] w-0 h-0 border-solid border-transparent border-t-4 border-yellow-300"></div>
      </div>
      <div
        className="absolute"
        style={{
          left: mousePositionX - 60,
          top: 27,
        }}
      >
        {currentSection.name} : {currentSection.vma}
      </div>
    </>
  );
};

export default DrawRectangle;
