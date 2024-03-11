interface ISection {
  type: string;
  name: string;
  vma: number;
  size: number;
  sectionWidth?: number;
}

export default ISection;
