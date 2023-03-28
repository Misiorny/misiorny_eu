interface MainTitleProps {
  mTitleText: string;
  className: string;
}

export const MainTitle = ({ mTitleText, className }: MainTitleProps) => {
  return <h1 className={className}>{mTitleText}</h1>;
};
