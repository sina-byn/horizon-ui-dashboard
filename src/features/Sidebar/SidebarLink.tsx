import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';

// * utils
import { isTouchScreen } from '../../helpers/utils';

// * hooks
import useClickOutside from '../../hooks/useClickOutside';

// * components
import Link from '../../components/Link';

// * types
type SidebarLinkProps = {
  icon: string;
  title: string;
  href: string;
};

const SidebarLink = ({ icon, title, href }: SidebarLinkProps) => {
  const { pathname } = useLocation();
  const isActive = href === pathname;
  const linkRef = useRef<HTMLAnchorElement>(null);
  const labelHideHandler = (target: HTMLElement) => {
    if (
      window.innerWidth > 768 ||
      !isTouchScreen() ||
      target.classList.contains('link-icon')
    )
      return;
    const link = linkRef.current!;
    const label = link.children[1];
    label.classList.replace('inline', 'hidden');
  };

  useClickOutside<HTMLSpanElement>(linkRef, labelHideHandler);

  useEffect(() => {
    if (!isTouchScreen() || !isActive) return;
    const link = linkRef.current!;
    const label = link.children[1];
    if (window.innerWidth < 768) label.classList.replace('hidden', 'inline');
  }, [isActive, linkRef.current]);

  return (
    <Link
      href={href}
      ref={linkRef}
      size='none'
      radius='none'
      variant='none'
      className='nav-link flex justify-center items-center h-8 relative dark:text-white md:pl-6 my-3 [&>.link-text]:hover:inline [&>.link-text]:active:inline'
    >
      <i
        className={clsx(
          'link-icon fa-solid fa-sm grid place-items-center w-full md:w-auto h-full md:pt-1.5',
          isActive && 'text-primary-light dark:text-white',
          icon
        )}
      />
      <span
        className={clsx(
          'link-text grow hidden md:block absolute md:static left-full -top-2 z-50',
          'text-left font-semibold whitespace-nowrap capitalize rounded-r-md',
          'bg-white md:bg-transparent dark:bg-d-primary dark:md:bg-transparent',
          'shadow-tooltip dark:shadow-tooltip-dark md:shadow-none',
          'pl-3 pr-3 md:pr-0 py-2 md:py-0 mt-1',
          isActive && 'text-primary dark:text-white'
        )}
      >
        {title}
      </span>
      {isActive && (
        <div className='indicator h-full w-1 absolute right-0 rounded-full bg-primary-light'>
          &nbsp;
        </div>
      )}
    </Link>
  );
};

export default SidebarLink;
