// * utils
import { toPercent } from '../../helpers/utils';

// * components
import Card from '../../components/Card';
import Progressbar from '../../components/Progressbar';
import Typography from '../../components/Typography';

const StorageCard = () => {
  return (
    <Card
      style={{ paddingInline: '0.8rem' }}
      className='lg:col-span-6 xl:col-span-3 flex-col justify-between items-center gap-y-6'
    >
      <div className='card-middle text-center lg:px-4'>
        <i className='fa-solid fa-cloud bg-light dark:bg-d-light text-primary-light text-3xl rounded-full p-6 mt-2 mb-4' />
        <Typography
          tag='h6'
          className='card-title text-xl text-primary dark:text-white font-bold capitalize'
        >
          Your Storage
        </Typography>
        <Typography className='text-sm text-neutral'>
          Supervise your drive space in the easiest way
        </Typography>
      </div>
      <div className='left-space-bar w-full'>
        <div className='details flex justify-between text-xs text-neutral dark:text-white font-medium mb-1'>
          <Typography tag='span'>25.6 Gb</Typography>
          <Typography tag='span'>50 Gb</Typography>
        </div>
        <Progressbar percent={toPercent(25.6, 50)} />
      </div>
    </Card>
  );
};

export default StorageCard;
