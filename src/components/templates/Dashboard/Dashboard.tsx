interface DashboardProps {
  contain: JSX.Element;
  className?: string;
}

export const Dashboard = ({ contain, className }: DashboardProps) => {
  return <section className={className}>{contain}</section>;
};
