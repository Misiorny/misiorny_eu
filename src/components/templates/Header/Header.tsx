import { Logo } from '../../base/Logo/Logo';
import { MainTitle, ParagraphTitle, SubTitle } from '../../base/Titles';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="flex items-center justify-evenly bg-main-l5 font-main">
      <Logo />
      <section className="p-2">
        <SubTitle
          sTitleText="misiorny.eu"
          className="pb-3 pt-1 font-headers text-4xl tracking-widest text-main-d2"
        />
        <MainTitle
          mTitleText="Podróże, strony internetowe, forex."
          className="pb-3 text-xl font-extrabold text-main-d4"
        />
        <Link href="/hobby">
          <ParagraphTitle
            pTitleText="Wykorzystaj moje hobby !"
            className="w-full rounded-xl bg-neutral-d3 py-1 text-sm font-bold text-complementary-l1 hover:text-complementary-l2"
          />
        </Link>
      </section>
    </header>
  );
};
