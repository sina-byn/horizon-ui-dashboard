// * components
import Link from '../../components/Link';
import ThemeSwitch from '../../components/ThemeSwitch';

// * types
type SignInBannerProps = {
  children: React.ReactNode;
};

const SignInBanner = ({ children }: SignInBannerProps) => {
  return (
    <section className='w-full md:w-1/2 relative'>
      <img
        src='sign-in-bg.png'
        alt='sign in background'
        className='w-full h-screen fixed md:static inset-0 lg:rounded-bl-[8rem]'
      />
      <div className='content flex flex-col items-center md:items-start lg:items-center justify-between w-full h-full absolute inset-0 py-10 md:pb-0 md:pt-5 md:overflow-y-auto'>
        <div className='content-top grow flex flex-col items-center justify-center w-full gap-y-10'>
          <img
            src='/horizon-logo-big.svg'
            alt='horizon-logo'
            className='w-40'
          />
          <section className='flex flex-col items-center text-center text-white border-2 border-white/25 rounded-2xl px-12 py-5 mb-8'>
            <span className='text-xs font-normal'>
              Learn more about Horizon UI on
            </span>
            <Link
              size='none'
              variant='none'
              target='_blank'
              href='https://horizon-ui.com/'
              rel='noreferrer noopener'
              className='text-xl font-bold'
            >
              horizon-ui.com
            </Link>
          </section>
        </div>
        {children}
        <footer className='text-white pt-2 pb-4'>
          <nav className='flex flex-wrap justify-center md:pl-2 lg:pl-0'>
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
          <p className='copyright-mobile md:hidden text-xs text-white text-center'>
            &copy; 2023 Horizon UI. All Rights Reserved. Made with love by
            Simmmple &amp; Sina Bayandorian!
          </p>
          <ThemeSwitch className='hidden sm:flex fixed bottom-2.5 right-4 mt-3 sm:mt-0 bg-gradient-to-br from-[#868CFF] to-primary-light text-white' />
        </footer>
      </div>
    </section>
  );
};

export default SignInBanner;
