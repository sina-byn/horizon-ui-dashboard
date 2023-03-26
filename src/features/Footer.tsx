// * components
import Link from '../components/Link';

const Footer = () => {
  return (
    <footer className='justify-self-end col-span-12 flex flex-wrap items-center justify-between gap-x-6 text-xs text-neutral px-10 py-2'>
      <p className='copyright-text grow text-center'>
        &copy; 2023 Horizon UI. All Rights Reserved. Made with love by Simmmple
        &amp; Sina Bayandorian!
      </p>
      <nav className='flex flex-wrap justify-center grow'>
        <Link
          href='/marketplace'
          size='sm'
          variant='transparent'
          className='font-semibold'
        >
          Marketplace
        </Link>
        <Link
          href='#'
          size='sm'
          variant='transparent'
          className='font-semibold'
        >
          License
        </Link>
        <Link
          href='#'
          size='sm'
          variant='transparent'
          className='font-semibold'
        >
          Terms of Use
        </Link>
        <Link
          href='#'
          size='sm'
          variant='transparent'
          className='font-semibold'
        >
          Blog
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
