import { Logo }                                from "../../base/Logo/Logo";
import { MainTitle, ParagraphTitle, SubTitle } from "../../base/Titles";
import Link                                    from "next/link";

export const Header = () => {
  return (
    <header className="mx-auto flex w-full flex-col items-center justify-between gap-4 text-custom-textmain font-main p-4 sm:flex-row sm:gap-6 lg:w-11/12 ">
      <Logo />
      <section className="p-2 text-center sm:text-left">
        <SubTitle
          sTitleText="misiorny.eu"
          className="pb-3 pt-1 font-headers text-2xl tracking-widest text-custom-primary md:text-4xl"
        />
        <MainTitle
          mTitleText="Kodujemy strony, administrujemy firmą, organizujemy przygody!"
          className="pb-3 text-lg font-extrabold text-custom-secondary md:text-xl lg:text-2xl"
        />
        <Link href="/hobby">
          <ParagraphTitle
            pTitleText="Wykorzystaj moje hobby!"
            className="w-full rounded-xl bg-custom-accent py-2 text-sm font-bold text-custom-text text-center hover:bg-custom-primary hover:text-custom-bg sm:w-auto"
          />
        </Link>
      </section>
    </header>
  );
};
