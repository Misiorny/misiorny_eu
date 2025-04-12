import { Dashboard } from "@/components/templates/Dashboards/Dashboard";
import { About }     from "@/components/templates/Dashboards/About";
import { Travels }   from "@/components/templates/Dashboards/Travels";
import { Web }       from "@/components/templates/Dashboards/Web";

const Home = () => {
  return (
    <div className="2xl:w-11/12 mx-auto min-h-full w-full text-center md:w-10/12 lg:w-11/12 xl:w-11/12">
      <Dashboard contain={[About(), Travels(), Web()]} />
    </div>
  );
};

export default Home;
