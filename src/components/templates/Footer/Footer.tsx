import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="sticky bottom-0 flex items-center justify-center bg-main-l2 py-2">
      <Link href="/" className="text-md font-headers tracking-widest text-complementary-d3">
        &copy; 2023 misiorny.eu
      </Link>
    </footer>
  );
};
