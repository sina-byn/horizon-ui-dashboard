// * api
import getViewers from './api/getViewers';

// * components
import Card from '../../../components/Card';
import Button from '../../../components/Button';
import UserChips from '../../../components/UserChips';
import Typography from '../../../components/Typography';

const Tutorials = () => {
  const [viewers] = getViewers();

  return (
    <Card
      style={{ padding: 0 }}
      className='sm:col-span-6 lg:col-span-3 flex-col justify-between overflow-hidden'
    >
      <div className='card-top pt-5 px-6'>
        <header className='flex gap-x-2'>
        <i className='fa-solid fa-fire grid place-items-center w-12 h-12 text-2xl text-orange-600 bg-orange-600/10 rounded-xl' />
        <div className='flex flex-col justify-center'>
          <span className='session-subject text-neutral text-xs font-semibold'>
            Business Design
          </span>
          <span className='text-primary dark:text-white text-sm font-bold'>
            New lesson is available
          </span>
        </div>
        </header>
        <Typography className='session-intro font-semibold text-primary dark:text-white text-lg mt-6 mb-3'>
          What do you need to know to create better products?
        </Typography>
      </div>
      <div className='card-bottom dark:text-white dark:bg-d-light pb-5 px-6'>
        <div className='card-body flex flex-col -mt-2'>
          <div className='session-details flex gap-x-10 my-5'>
            <span className='font-semibold text-sm'>
              <i className='fa-solid fa-stopwatch text-green-500 mr-2' />
              85 mins
            </span>
            <span className='font-semibold text-sm'>
              <i className='fa-solid fa-play text-orange-600 mr-2' />
              Video format
            </span>
          </div>
        </div>
        <footer className='flex justify-between items-center dark:bg-d-light'>
          <UserChips users={viewers} />
          <Button size='sm'>Get Started</Button>
        </footer>
      </div>
    </Card>
  );
};

export default Tutorials;
