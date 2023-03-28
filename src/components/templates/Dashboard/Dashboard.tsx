import { Travels } from '../../Travels';
import { Web } from '../../Web';
import { Forex } from '../../Forex';

export const Dashboard = () => {
  return (
    <section>
      <Travels />
      <Forex />
      <Web />
    </section>
  );
};
