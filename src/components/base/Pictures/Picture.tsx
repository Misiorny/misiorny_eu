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
    <figure className=" rounded-sm bg-main-l2 p-1" {...figureClassName}>
      <Image src={src} alt={alt} width={w} height={h} className="overflow-hidden rounded-sm" />
      <figcaption
        className="py-2 font-headers text-3xl tracking-widest text-main-d4"
        {...figcaptionClassName}
      >
        {label}
      </figcaption>
    </figure>
  );
};
