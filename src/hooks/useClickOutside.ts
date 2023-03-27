import { useEffect } from 'react';

const useClickOutside = <TElemRef extends HTMLElement>(
  elemRef: React.RefObject<TElemRef>,
  onClickOutside: Function
) => {
  useEffect(() => {
    const clickHandler = (e: MouseEvent) => {
      const targetEl = e.target as HTMLElement;
      if (Array.from(elemRef.current?.children!).includes(targetEl)) return;
      if (targetEl !== elemRef.current || !targetEl.contains(elemRef.current))
        onClickOutside(targetEl);
    };

    window.addEventListener('click', clickHandler);

    return () => window.removeEventListener('click', clickHandler);
  }, [elemRef.current]);
};

export default useClickOutside;
