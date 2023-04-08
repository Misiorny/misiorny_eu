import Image from 'next/image';

interface PictureProps {
  src: string;
  alt: string;
  label: string;
}

export const Picture = ({ src, alt, label }: PictureProps) => {
  return (
    <figure>
      <Image src={src} alt={alt} />
      <figcaption>{label}</figcaption>
    </figure>
  );
};
