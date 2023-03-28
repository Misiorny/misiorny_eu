interface SubTitleProps {
  sTitleText: string;
  className: string;
}

export const SubTitle = ({ sTitleText, className }: SubTitleProps) => {
  return <h2 className={className}>{sTitleText}</h2>;
};
