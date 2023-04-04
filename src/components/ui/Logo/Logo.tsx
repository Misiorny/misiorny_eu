import Image from 'next/legacy/image';
import logo from '../../../assets/png/logo/logo240.png';

export const Logo = () => {
  return (
    <picture className="min-h-24 p-4">
      <Image src={logo} alt="Logo misiorny.eu" width={80} height={120} />
    </picture>
  );
};
