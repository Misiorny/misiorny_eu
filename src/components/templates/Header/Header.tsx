import { Logo } from '../../base/Logo/Logo';
import { SubTitle, MainTitle, ParagraphTitle } from '../../base/Titles';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="flex items-center justify-evenly bg-main-l5 py-4 font-main">
      <Logo className="min-h-24 m-2 border-b-2 border-main-l2 p-1  hover:border-b-2  hover:border-b-complementary-l2" />
      <section className="">
        <SubTitle sTitleText="misiorny.eu" className="font-headers text-3xl text-main-d2 " />
        <MainTitle
          mTitleText="Podróże, strony internetowe, forex."
          className="text-xl font-bold text-main-d4"
        />
        <Link href="/offers">
          <ParagraphTitle
            pTitleText="Wykorzystaj moje hobby !"
            className="w-full text-sm font-bold text-complementary-d2 hover:text-complementary-l2 "
          />
        </Link>
      </section>
    </header>
  );
};
