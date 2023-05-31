import { useContext, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

// * context
import { SearchContext } from '../context/SearchContextProvider';

// * components
import Button from '../components/Button';

const SearchToolbar = () => {
  const {
    results,
    currScrolledIdx,
    setCurrScrolledIdx,
    isToolbarShown,
    setIsToolbarShown,
  } = useContext(SearchContext)!;
  const currScrolledElRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!results.length) {
      currScrolledElRef.current = null;
      return;
    }

    if (currScrolledElRef.current) {
      if (results[0] !== currScrolledElRef.current) {
        currScrolledElRef.current = results[0];
        currScrolledElRef.current.classList.add('bg-blue-400');
        results[0].scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    currScrolledElRef.current = results[0];
    currScrolledElRef.current.classList.add('bg-blue-400');
    results[0].scrollIntoView({ behavior: 'smooth' });
  }, [results]);

  const closeHandler = () => setIsToolbarShown(false);
  const scrollToPrev = () => {
    if (!results.length) return;
    setCurrScrolledIdx(prevIdx => {
      const newIdx = Math.max(0, prevIdx - 1);
      results[prevIdx].classList.remove('bg-blue-400');
      results[newIdx].classList.add('bg-blue-400');
      results[newIdx].scrollIntoView({ behavior: 'smooth' });
      return newIdx;
    });
  };
  const scrollToNext = () => {
    if (!results.length) return;
    setCurrScrolledIdx(prevIdx => {
      const newIdx = Math.min(prevIdx + 1, results.length - 1);
      results[prevIdx].classList.remove('bg-blue-400');
      results[newIdx].classList.add('bg-blue-400');
      results[newIdx].scrollIntoView({ behavior: 'smooth' });
      return newIdx;
    });
  };

  return (
    <div
      className={clsx(
        'search-toolbar flex items-center gap-x-4 fixed right-[1.4rem] z-50',
        'bg-white dark:bg-d-primary text-sm dark:text-white shadow-custom dark:shadow-none',
        'rounded-b-lg transition-all duration-300 px-5 pt-1 pb-1.5',
        isToolbarShown ? 'top-0' : '-top-full'
      )}
    >
      <span className='results-count mr-5'>
        {results.length && currScrolledIdx + 1} of {results.length}
      </span>
      <Button variant='none' size='none' onClick={scrollToPrev}>
        <i className='fa-solid fa-arrow-up' />
      </Button>
      <Button variant='none' size='none' onClick={scrollToNext}>
        <i className='fa-solid fa-arrow-down' />
      </Button>
      <Button variant='none' size='none' onClick={closeHandler}>
        <i className='fa-solid fa-close' />
      </Button>
    </div>
  );
};

export default SearchToolbar;
