import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="sticky bottom-0 mx-auto flex w-full items-center justify-center bg-main-l5 py-2 xl:w-11/12">
      <Link href="/" className="text-md font-headers tracking-widest text-complementary-d3">
        &copy; 2023 misiorny.eu
      </Link>
    </footer>
  );
};
