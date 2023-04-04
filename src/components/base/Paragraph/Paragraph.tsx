interface ParagraphProps {
  text: string;
  className: string;
}

export const Paragraph = ({ text, className }: ParagraphProps) => {
  return <p className={className}>{text}</p>;
};
