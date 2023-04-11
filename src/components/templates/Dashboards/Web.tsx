import { Picture } from '../../base/Pictures/Picture';
import { rhino } from '../../../assets/png/myPictures';
import { ParagraphTitle } from '../../base/Titles';
import { Paragraph } from '../../base/Paragraph/Paragraph';

export const Web = () => {
  return (
    <div className="my-1 min-h-screen bg-neutral-d5">
      <ParagraphTitle
        pTitleText="Programowanie - marzenie do realizacji "
        className="pt-1 font-headers text-3xl text-main"
      />
      <Picture src={rhino} alt="" label="Misiorny czyli ja" />
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
