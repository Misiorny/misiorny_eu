import { Dashboard } from '../components/templates/Dashboards/Dashboard';
import { About } from '../components/templates/Dashboards/About';

const Home = () => {
  return (
    <div className="mx-auto min-h-full w-full text-center md:w-10/12 lg:w-11/12 xl:w-11/12 2xl:w-11/12">
      <Dashboard contain={[About()]} />
    </div>
  );
};

export default Home;
