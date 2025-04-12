import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear(); // Pobranie bieżącego roku

  return (
    <footer className="sticky bottom-0 mx-auto flex w-full items-center justify-center bg-main-l5 py-2 xl:w-11/12">
      <address>
        <Link
          href="/"
          className="text-md font-headers tracking-widest text-complementary-d3"
          aria-label="Strona główna - misiorny.eu"
        >
          &copy; {currentYear} misiorny.eu
        </Link>
      </address>
    </footer>
  );
};

