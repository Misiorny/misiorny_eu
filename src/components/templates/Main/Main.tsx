import Head from 'next/head';
import { Sen, VT323 } from 'next/font/google';
import { ReactNode } from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

const sen = Sen({
  weight: ['400', '700', '800'],
  subsets: ['latin'],
  variable: '--font-sen',
});
const vt = VT323({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-vt',
});

interface MainProps {
  children: ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return (
    <>
      <Head>
        <title>
          misiorny.eu - podróże, aplikacje internetowe, forex, kryptowaluty i mnóstwo innych
          pomysłów...
        </title>
      </Head>
      <main
        className={`${sen.variable} font-main ${vt.variable} bg-neutral-l4 text-center font-headers`}
      >
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
};
