import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Sen, VT323 } from 'next/font/google';

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

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${sen.variable} font-main ${vt.variable} font-headers`}>
      <Head>
        <title>misiorny.eu - podróże, aplikacje internetowe, forex, kryptowaluty</title>
      </Head>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
