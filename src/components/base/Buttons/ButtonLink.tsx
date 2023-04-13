import Link from 'next/link';

interface ButtonLinkProps {
  to: string;
  label: string;
  className: string;
}

export const ButtonLink = ({ to, label, className }: ButtonLinkProps) => {
  return (
    <button className={className}>
      <Link href={to}>{label}</Link>
    </button>
  );
};
