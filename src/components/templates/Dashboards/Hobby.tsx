import { Picture } from '../../base/Pictures/Picture';
import { ParagraphTitle } from '../../base/Titles';
import { Paragraph } from '../../base/Paragraph/Paragraph';

interface HobbyProps {
  className: string;
}

export const Hobby = ({ className }: HobbyProps) => {
  return (
    <section className={className}>
      <ParagraphTitle pTitleText="" className="" />
      <Picture src="" alt="" label="" />
      <Paragraph text="" className="" />
      <Paragraph text="" className="" />
    </section>
  );
};
