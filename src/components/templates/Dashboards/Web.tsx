import { Picture } from '../../base/Pictures/Picture';
import { rhino } from '../../../assets/png/myPictures';
import { ParagraphTitle } from '../../base/Titles';
import { Paragraph } from '../../base/Paragraph/Paragraph';
import { ButtonLink } from '../../base/Buttons/ButtonLink';

export const Web = () => {
  return (
    <div className="min-h-screen border-b-4 border-b-main-l4 bg-neutral-d5">
      <ParagraphTitle
        pTitleText="Programowanie - marzenie do realizacji "
        className="py-2 font-headers text-3xl text-main"
      />
      <Picture src={rhino} alt="Zambia, nosorożec i ja" label="Zambia, nosorożec i ja" />
      <Paragraph
        className="py-4 px-2 text-left font-main text-xl leading-relaxed tracking-wide text-main"
        text="Po przejściu na emeryturę nie miałem ochoty siedzieć tylko przed telewizorem. Zacząłem uczyć sie robienia stron internetowych. Jakie było moje zdziwienie, że w obecnych czasach taka strona to, w porównaniu do tego co znałem, wielka internetowa aplikacja. Juz nie wystarczy sama znajomość HTML/CSS ale trzeba poznać wiele innych technologii. I bardzo dobrze, bo dzięki temu emerytura się nie dłuży, a nowe umiejętności pozwolą na odwiedzenie wielu miejsc na ziemi. "
      />
      <Paragraph
        className="py-4 px-2 text-left font-main text-xl leading-relaxed tracking-wide text-main"
        text="Moją ideą jest związanie się z potencjalnym klientem na dłuższy czas. Chciałbym, aby nasza współpraca zaowocowała Twoją stroną internetową dopasowaną do Twoich potrzeb. Ty masz pomysł, ja potrafę go zrealizować - lub nauczę się jak to zrobić. Dlatego nie powstanie ona szybko ale będzie ewoluowała w kierunku ideału, jaki sobie wymyślisz. "
      />
      <Paragraph
        className="py-4 px-2 text-left font-main text-xl leading-relaxed tracking-wide text-main"
        text="Wierzę, że takie podejście przekona Cię do zainteresowania się moją ofertą. Ja ze swojej strony gwarantuję, że będę się zajmował Twoją stroną z pasją, zgodnie z najlepszymi praktykami programistycznymi. Dzięki takiemu podejściu masz pewność, że Twoje internetowe miejsce bedzie zawsze nowoczesne, dopasowane do aktualnych potrzeb i bezproblemowe. Po prostu idealne.  "
      />
      <ButtonLink
        className="my-2 animate-clickButtonLink rounded-2xl bg-main-l5 py-1 px-4 font-bold text-neutral-d5"
        to="/offers"
        label="Wykorzystaj moje hobby !"
      />
    </div>
  );
};
