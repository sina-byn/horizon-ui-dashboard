import { createContext, Dispatch, SetStateAction, useState } from 'react';

// * context
export const SearchContext = createContext<SearchCtx | null>(null);

// * types
type ProviderProps = {
  children: React.ReactNode;
};

type SearchCtx = {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
};

const SearchContextProvider = ({ children }: ProviderProps) => {
  const [query, setQuery] = useState<string>('');

  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
