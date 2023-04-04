import { Header } from '../components/templates/Header/Header';
import { Footer } from '../components/base/Footer/Footer';
import { Dashboard } from '../components/templates/Dashboard/Dashboard';

const Home = () => {
  return (
    <div className="mx-auto min-h-full w-full text-center shadow-2xl  md:w-10/12 lg:w-3/4 xl:w-2/3 2xl:w-1/2">
      <Header />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default Home;
