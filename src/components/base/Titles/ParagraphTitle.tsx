interface ParagraphTitleProps {
  pTitleText: string;
  className: string;
}

export const ParagraphTitle = ({ pTitleText, className }: ParagraphTitleProps) => {
  return <h3 className={className}>{pTitleText}</h3>;
};
