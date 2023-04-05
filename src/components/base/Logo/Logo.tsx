import Image from 'next/legacy/image';
import logo from '../../../assets/png/logo/logo240.png';
import Link from 'next/link';

interface LogoProps {
  className: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <picture className={className}>
      <Link href="/">
        <Image src={logo} alt="Logo misiorny.eu" width={80} height={120} />
      </Link>
    </picture>
  );
};
