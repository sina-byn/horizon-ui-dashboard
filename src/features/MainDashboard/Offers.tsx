// * components
import Card from '../../components/Card';
import Typography from '../../components/Typography';

const Offers = () => {
  return (
    <Card
      style={{ padding: '0.8rem' }}
      className='sm:col-span-6 lg:col-span-3 flex-col'
    >
      <article className='offer-banner relative'>
        <i className='fa-solid fa-clock absolute z-10 top-2 right-2 bg-gray-500 text-white rounded-lg p-2 cursor-pointer' />
        <figure className='relative overflow-hidden'>
          <div className='image-cover absolute w-full h-full bg-gradient-to-t from-primary/60 to-transparent rounded-2xl' />
          <img src='/starbucks-banner.png' alt='starbucks banner' />
        </figure>
        <img
          src='/starbucks-logo.png'
          alt='starbucks logo'
          className='absolute z-10 -bottom-6 left-5 w-12 h-12'
        />
      </article>
      <footer className='offer-details pl-2 mt-10'>
        <Typography
          tag='h6'
          className='offer-title text-lg font-bold text-primary dark:text-white'
        >
          Starbucks
        </Typography>
        <p className='offer-explanation flex items-center gap-x-1.5 text-neutral text-sm font-medium'>
          <i className='fa-solid fa-mug-hot' />
          <Typography tag='span'>10% cashback &amp; off</Typography>
        </p>
      </footer>
    </Card>
  );
};

export default Offers;
