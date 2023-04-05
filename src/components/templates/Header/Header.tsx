import { Logo } from '../../base/Logo/Logo';
import { SubTitle } from '../../base/Titles/SubTitle';
import { MainTitle } from '../../base/Titles/MainTitle';
import { ParagraphTitle } from '../../base/Titles/ParagraphTitle';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="header font-main ">
      <Logo />
      <section className="flex-wrap">
        <SubTitle sTitleText="misiorny.eu" className="subtitle font-headers " />
        <MainTitle mTitleText="Podróże, strony internetowe, forex." className="maintitle" />
        <Link href="/offers">
          <ParagraphTitle
            pTitleText="Wykorzystaj moje hobby !"
            className="paragraphtitle font-bold text-complementary-d2"
          />
        </Link>
      </section>
    </header>
  );
};
