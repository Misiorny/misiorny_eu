import { Picture } from '../../base/Pictures/Picture';
import { bali } from '../../../assets/png/myPictures';
import { ParagraphTitle } from '../../base/Titles';
import { Paragraph } from '../../base/Paragraph/Paragraph';
import { ButtonLink } from '../../base/Buttons/ButtonLink';

export const Forex = () => {
  return (
    <div className=" rounded-sm bg-neutral-d5">
      <ParagraphTitle
        pTitleText="Forex i kryptowaluty "
        className="py-2 font-headers text-3xl text-main"
      />
      <Picture
        src={bali}
        alt="Misiorny opierający się na balu słomy"
        label="Na Bali - czyli z przymróżeniem oka"
      />
      <Paragraph
        className="py-4 px-2 text-left font-main text-xl leading-relaxed tracking-wide text-main"
        text="Rynkiem forex interesuję się od ponad 5 lat. Przez ten czas zdobywałem wiedzę o róznych strategiach graczy. Jednak najważniejsza jest opracowanie własnej strategi i inwestowanie, ale z wykluczeniem emocji. Takie jest moje podejście i dlatego chcę zająć się tworzeniem automatycznych programów handlujących w języku MQL5."
      />
      <Paragraph
        className="py-4 px-2 text-left font-main text-xl leading-relaxed tracking-wide text-main"
        text="Kryptowaluty to kolejny sposób na zarabianie pieniędzy z przeznaczeniem na podróże. Podobnie jak na rynku forex - obserwuję zachowanie kryptowalut i staram się na nich zarabiać. Nawet skutecznie. Tu jest zdecydowanie trudniej ustalić własną strategię, ale z pomocą przyjdzie wiedza jaką już zdobyłem. "
      />
      <Paragraph
        className="py-4 px-2 text-left font-main text-xl leading-relaxed tracking-wide text-main"
        text="Jeżeli masz ochotę porozmawiać na powyższe tematy, zapraszam do kontaktu. Myślę, ze łącząc nasze doswiadczenia jesteśmy w stanie pomóc sobie wzajemnie. "
      />
      <ButtonLink
        className="my-2 animate-clickButtonLink rounded-2xl bg-main-l5 py-1 px-4 font-bold text-neutral-d5"
        to="/offers"
        label="Wykorzystaj moje hobby !"
      />
    </div>
  );
};
