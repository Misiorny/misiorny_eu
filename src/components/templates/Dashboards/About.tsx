import { ParagraphTitle } from '../../base/Titles';
import { Paragraph } from '../../base/Paragraph/Paragraph';
import { Picture } from '../../base/Pictures/Picture';
import { masai } from '../../../assets/png/myPictures';
import { ButtonLink } from '../../base/Buttons/ButtonLink';

export const About = () => {
  return (
    <div className="rounded-sm bg-neutral-d5">
      <ParagraphTitle pTitleText="O mnie" className=" py-2 font-headers text-3xl text-main" />
      <Picture src={masai} alt="Autor strony z Masajami" label="Misiorny z Masajami " />
      <Paragraph
        className="py-4 px-2 text-left font-main text-xl leading-relaxed tracking-wide text-main"
        text="Pasjonat podróży, nowych technologii i gracz komputerowy. Nie ma rzeczy nie do zrealizowania - czasami trzeba tylko poczekać. Dzięki takiemu podejściu do życia, zrealizowałem marzenie o podróżowaniu. Teraz czas na kolejne - szeroko pojęte programowanie."
      />
      <Paragraph
        className="py-4 px-2 text-left font-main text-xl leading-relaxed tracking-wide text-main"
        text="Może kiedyś zacznę robić strony komercyjnie. Na razie się na to nie zapowiada. W przypływie dobrego humoru jest szansa, że coś prostego dla Ciebie stworzę, ale na cuda bym nie liczył.  Dlatego, jeżeli spodziewasz się szybko, tanio i dobrze to proponuję poszukać takiego hasła w dobrze znanej wyszukiwarce internetowej. "
      />
      <Paragraph
        className="py-4 px-2 text-left font-main text-xl leading-relaxed tracking-wide text-main"
        text="Nadal tu jesteś, pomimo niezbyt zachecajacego wstępu? Czyli moje podejście Cię zainteresowało i jesteśmy w stanie nadawać na tych samych falach ! Zobacz co mogę dla Ciebie zrobić. A ja gwarantuję, że kiedyś zrobię to dobrze."
      />
      <ButtonLink
        className="my-2 animate-clickButtonLink rounded-2xl bg-main-l5 py-1 px-4 font-bold text-neutral-d5"
        to="/hobby"
        label="Wykorzystaj moje hobby !"
      />
    </div>
  );
};
