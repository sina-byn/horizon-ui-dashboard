// * components
import Link from '../../components/Link';
import Typography from '../../components/Typography';

const MarketplaceBanner = () => {
  return (
    <section className='marketplace-banner flex flex-col-reverse md:flex-row items-center bg-primary-light dark:bg-d-primary-light rounded-2xl overflow-hidden'>
      <div className='banner-content flex flex-col justify-center gap-y-2 w-full md:w-1/2 text-white px-6 lg:px-12 pb-3 md:py-4'>
        <Typography
          tag='h3'
          className='font-bold text-lg md:text-xl mt-2 md:mt-0'
        >
          Discover, collect, and sell extraordinary NFTs
        </Typography>
        <Typography tag='span' className='md:hidden lg:inline text-sm'>
          Enter in this creative world. Discover now the latest NFTs or start
          creating your own!
        </Typography>
        <div className='links hidden md:flex gap-x-4 lg:mt-3'>
          <Link href='#' variant='light' size='sm'>
            Discover Now
          </Link>
          <Link href='#' variant='transparent' size='sm'>
            Watch Video
          </Link>
        </div>
        <div className='links-mobile flex md:hidden gap-x-4 lg:mt-3'>
          <Link href='#' variant='primary' size='sm' className='w-1/2'>
            Discover Now
          </Link>
          <Link href='#' variant='secondary' size='sm' className='w-1/2'>
            Watch Video
          </Link>
        </div>
      </div>
      <figure className='banner-image md:w-1/2'>
        <img src='banner.png' alt='marketplace banner' className='w-full' />
      </figure>
    </section>
  );
};

export default MarketplaceBanner;
