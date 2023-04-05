interface DashboardProps {
  contain: JSX.Element;
}

export const Dashboard = ({ contain }: DashboardProps) => {
  return <section>{contain}</section>;
};
