import Image from 'next/legacy/image';
import logo from '../../../assets/png/logo/logo240.png';
import Link from 'next/link';

export const Logo = () => {
  return (
    <picture className="min-h-24 p-4">
      <Link href="/">
        <Image src={logo} alt="Logo misiorny.eu" width={80} height={120} />
      </Link>
    </picture>
  );
};
