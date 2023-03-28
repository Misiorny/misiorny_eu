import { Logo } from '../../ui/Logo/Logo';
import { SubTitle } from '../../base/Titles/SubTitle';
import { MainTitle } from '../../base/Titles/MainTitle';
import { ParagraphTitle } from '../../base/Titles/ParagraphTitle';

export const Header = () => {
  return (
    <header className="header">
      <Logo />
      <section className="flex-wrap">
        <SubTitle sTitleText="misiorny.eu" className="subtitle" />
        <MainTitle mTitleText="Podróże, strony internetowe, forex." className="maintitle" />
        <ParagraphTitle pTitleText="Wykorzystaj moje hobby !" className="paragraphtitle" />
      </section>
    </header>
  );
};
