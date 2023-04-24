import { Paragraph } from '../../base/Paragraph/Paragraph';
import { ParagraphTitle } from '../../base/Titles';
import { Picture } from '../../base/Pictures/Picture';
import { singapore } from '../../../assets/png/myPictures';
import { ButtonLink } from '../../base/Buttons/ButtonLink';
import Link from 'next/link';

export const Travels = () => {
  return (
    <div className="rounded-sm border-b-4 border-b-main-l4 bg-neutral-d5">
      <ParagraphTitle
        pTitleText="Podróże - spełnione marzenie"
        className="py-2 font-headers text-3xl text-main"
      />
      <Picture
        src={singapore}
        alt="Misiorny przy fontannie Merliona w Singapurze "
        label="Azja po raz pierwszy"
      />
      <Paragraph
        className="py-4 px-2 text-left font-main text-xl leading-relaxed tracking-wide text-main"
        text="Odkąd pamietam podróże zawsze mnie fascynowały. Dawno temu, były to podróże po Polsce razem z harcerzami. Potem dużo podróżowałem służbowo zarówno po naszym kraju jak i Europie. Jednak największym moim marzeniem była Afryka. I to marzenie zostało zrealizowane ! O Afryce i innych podróżach możesz poczytać w wolnej chwili na moim profilu na FB. "
      />
      <div className="mx-auto w-1/2">
        <Link
          rel="noopener no-referrer"
          target="_blank"
          href="https://www.facebook.com/AfrykaDzikaMisiornego/"
          className=" py-2 px-1 font-headers text-2xl text-main"
        >
          Afryka Dzika
        </Link>
        <span className="animate-clickLink">
          <div className="border-t-2 border-complementary-d1 pb-2"></div>
        </span>
      </div>
      <Paragraph
        className="py-4 px-2 text-left font-main text-xl leading-relaxed tracking-wide text-main"
        text="Gdy wyjeżdżam to zawsze robię to bez szczegółowego planu. Dlatego każda wyprawa to przygoda i jednocześnie nowe doświadczenia. Nie jestem fanem odwiedzania miejsc, w których trzeba się pokazać, lecz włóczenia się tam gdzie mnie oczy poniosą a nogi zaprowadzą. "
      />
      <Paragraph
        className="py-4 px-2 text-left font-main text-xl leading-relaxed tracking-wide text-main"
        text="Jeżeli planujesz wycieczkę do Afryki, a konkretnie do Tanzanii - to jestem w stanie Ci pomóc ją zorganizować. Dzięki zaprzyjaźnionej firmie w Arushy pomogę Ci zorganizować safari w przyzwoitej cenie, z atrakcjami jakich nie znajdziesz w biurach podróży. "
      />
      <ButtonLink
        className="my-2 animate-clickButtonLink rounded-2xl bg-main-l5 py-1 px-4 font-bold text-neutral-d5"
        to="/offers"
        label="Wykorzystaj moje hobby !"
      />
    </div>
  );
};
