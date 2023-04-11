import { ParagraphTitle } from '../../base/Titles';
import { Paragraph } from '../../base/Paragraph/Paragraph';
import { Picture } from '../../base/Pictures/Picture';
import { kili } from '../../../assets/png/myPictures';

export const About = () => {
  return (
    <div className="min-h-screen bg-neutral-d5">
      <ParagraphTitle pTitleText="O mnie" className="py-1 font-headers text-3xl text-main" />
      <Picture src={kili} alt="" label="Misiorny czyli ja" />
      <Paragraph
        className="text-md py-4 px-2 text-justify font-main text-main"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "
      />
      <Paragraph
        className="text-md py-4 px-2 text-justify font-main text-main"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "
      />
    </div>
  );
};
