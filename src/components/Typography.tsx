import { useContext, useEffect, useRef } from 'react';

// * utils
import { searchByQuery } from '../helpers/utils';

// * context
import { SearchContext } from '../context/SearchContextProvider';

// * types
type TypographyProps = {
  tag?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  children: Children;
};

export type Children = string | number | (string | number)[] | undefined;

const Typography = ({ tag = 'p', children, className }: TypographyProps) => {
  const typographyRef = useRef<HTMLParagraphElement>(null);
  const contentRef = useRef<Children>(children);
  const { query } = useContext(SearchContext)!;
  const TypographyTag = tag;

  useEffect(
    () => searchByQuery(query, typographyRef, contentRef),
    [query, typographyRef.current]
  );

  return (
    <TypographyTag ref={typographyRef} className={className}>
      {children}
    </TypographyTag>
  );
};

export default Typography;
