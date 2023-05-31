import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

// * context
export const SearchContext = createContext<SearchCtx | null>(null);

// * types
type ProviderProps = {
  children: React.ReactNode;
};

type SearchCtx = {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  results: HTMLElement[];
  setResults: Dispatch<SetStateAction<HTMLElement[]>>;
  currScrolledIdx: number;
  setCurrScrolledIdx: Dispatch<SetStateAction<number>>;
  isToolbarShown: boolean;
  setIsToolbarShown: Dispatch<SetStateAction<boolean>>;
};

const SearchContextProvider = ({ children }: ProviderProps) => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<HTMLElement[]>([]);
  const [currScrolledIdx, setCurrScrolledIdx] = useState<number>(0);
  const [isToolbarShown, setIsToolbarShown] = useState<boolean>(false);

  const ctx = {
    query,
    setQuery,
    results,
    setResults,
    currScrolledIdx,
    setCurrScrolledIdx,
    isToolbarShown,
    setIsToolbarShown,
  };

  useEffect(() => {
    const foundResults = Array.from(document.querySelectorAll('mark'));
    setResults(foundResults);

    if (query.length > 2) setIsToolbarShown(true);
    else {
      setCurrScrolledIdx(0);
      setIsToolbarShown(false);
    }
  }, [query]);

  return (
    <SearchContext.Provider value={ctx}>{children}</SearchContext.Provider>
  );
};

export default SearchContextProvider;
