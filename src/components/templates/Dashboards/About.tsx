import { ParagraphTitle } from '../../base/Titles';
import { Paragraph } from '../../base/Paragraph/Paragraph';
import { Picture } from '../../base/Pictures/Picture';
import { kili } from '../../../assets/png/myPictures';
import { ButtonLink } from '../../base/Buttons/ButtonLink';

export const About = () => {
  return (
    <div className=" mt-2 rounded-sm bg-neutral-d5 ">
      <ParagraphTitle pTitleText="O mnie" className="py-2 font-headers text-5xl text-main" />
      <Picture src={kili} alt="" label="Misiorny czyli ja" />
      <Paragraph
        className="py-4 px-2 text-left font-main text-xl leading-relaxed tracking-wide text-main"
        text="Pasjonat podróży, nowych technologii i gracz komputerowy. Nie ma rzeczy nie do zrealizowania - czasami trzeba tylko poczekać. Dzięki takiemu podejściu do życia, zrealizowałem marzenie o podróżowaniu. Teraz czas na kolejne - szeroko pojęte programowanie, dzięki któremu mam nadzieję na dofinansowanie podróży."
      />
      <Paragraph
        className="py-4 px-2 text-left font-main text-xl leading-relaxed tracking-wide text-main"
        text="Strona ta jest w założeniu stroną firmową, dzięki której znajdę potencjalnych klientów. Jednak moje podejście do szeroko pojetego biznesu jest trochę inne - klient ma być zadowolony a praca dla mnie powinna być przyjemnością. Dlatego, jeżeli spodziewasz się szybko, tanio i dobrze to proponuję poszukać takiego hasła w dobrze znanej wyszukiwarce internetowej. "
      />
      <Paragraph
        className="py-4 px-2 text-left font-main text-xl leading-relaxed tracking-wide text-main"
        text="Nadal tu jesteś, pomimo niezbyt zachecajacego wstępu? Czyli moje podejście Cię zainteresowało i jesteśmy w stanie nadawać na tych samych falach ! Zobacz co mogę dla Ciebie zrobić. A ja gwarantuję, że zrobię to dobrze."
      />
      <ButtonLink
        className="my-2 animate-clickButtonLink rounded-2xl bg-main-l5 py-1 px-4 font-bold text-neutral-d5"
        to="/hobby"
        label="Wykorzystaj moje hobby !"
      />
    </div>
  );
};
