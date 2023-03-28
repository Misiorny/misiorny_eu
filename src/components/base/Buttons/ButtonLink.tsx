import Link from 'next/link';

interface ButtonLinkProps {
  to: string;
  label: string;
}

export const ButtonLink = ({ to, label }: ButtonLinkProps) => {
  return (
    <button>
      <Link href={to}>{label}</Link>
    </button>
  );
};
