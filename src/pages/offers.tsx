import { Dashboard } from '../components/templates/Dashboard/Dashboard';
import { Forex } from '../components/Forex';

const Offers = () => {
  return (
    <div className="mx-auto min-h-full w-full text-center shadow-2xl  md:w-10/12 lg:w-3/4 xl:w-2/3 2xl:w-1/2">
      <Dashboard contain={Forex()} />
    </div>
  );
};

export default Offers;
