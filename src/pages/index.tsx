import { Header } from '../components/templates/Header/Header';
import { Footer } from '../components/base/Footer/Footer';
import { Dashboard } from '../components/templates/Dashboard/Dashboard';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default Home;
