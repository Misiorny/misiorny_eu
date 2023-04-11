import Image, { StaticImageData } from 'next/image';

interface PictureProps {
  src: string | StaticImageData;
  alt: string;
  label: string;
  figcaptionClassName?: string[];
  figureClassName?: string[];
  w?: number;
  h?: number;
}

export const Picture = ({
  src,
  alt,
  label,
  w,
  h,
  figcaptionClassName,
  figureClassName,
}: PictureProps) => {
  return (
    <figure className="  bg-main-l2 p-2" {...figureClassName}>
      <Image src={src} alt={alt} width={w} height={h} />
      <figcaption className="pt-2 text-main-d4 " {...figcaptionClassName}>
        {label}
      </figcaption>
    </figure>
  );
};
