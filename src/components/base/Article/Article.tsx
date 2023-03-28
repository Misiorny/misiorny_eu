import { ReactNode } from 'react';

interface ArticleProps {
  children: ReactNode;
}

export const Article = ({ children }: ArticleProps) => {
  return <article>{children}</article>;
};
