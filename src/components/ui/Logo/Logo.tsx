import Image from 'next/legacy/image';
import logo from '../../../assets/png/logo240.png';

export const Logo = () => {
  return (
    <picture className="min-h-24">
      <Image src={logo} alt="Logo misiorny.eu" width={160} height={240} />
    </picture>
  );
};
