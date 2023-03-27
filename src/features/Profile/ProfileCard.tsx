// * components
import Card from '../../components/Card';
import Typography from '../../components/Typography';

const ProfileCard = () => {
  return (
    <Card
      style={{ padding: '1rem 0.8rem 2rem' }}
      className='profile-card lg:col-span-6 xl:col-span-4 flex-col items-center justify-between'
    >
      <figure className='profile-image flex flex-col items-center w-full'>
        <img
          src='/profile-bg.png'
          alt='profile background'
          className='w-full'
        />
        <img
          src='/avatar.png'
          alt='profile'
          className='w-16 rounded-full border-4 border-white dark:border-d-primary -mt-8'
        />
      </figure>
      <section className='profile grow text-center mt-4'>
        <Typography
          tag='h3'
          className='profile-name text-lg text-primary dark:text-white font-bold'
        >
          Adela Parkson
        </Typography>
        <Typography
          tag='span'
          className='occupation block text-neutral text-xs font-medium'
        >
          Product Designer
        </Typography>
      </section>
      <section className='porfile-details flex flex-wrap gap-2 justify-around w-full mt-5'>
        <div className='detial flex flex-col items-center text-primary dark:text-white font-bold'>
          <Typography tag='span' className='text-xl'>
            17
          </Typography>
          <Typography
            tag='span'
            className='text-neutral text-xs font-normal capitalize'
          >
            Posts
          </Typography>
        </div>
        <div className='detail flex flex-col items-center text-primary dark:text-white font-bold'>
          <Typography tag='span' className='text-xl'>
            9.7K
          </Typography>
          <Typography
            tag='span'
            className='text-neutral text-xs font-normal capitalize'
          >
            Followers
          </Typography>
        </div>
        <div className='flex flex-col items-center text-primary dark:text-white font-bold'>
          <Typography tag='span' className='text-xl'>
            274
          </Typography>
          <Typography
            tag='span'
            className='text-neutral text-xs font-normal capitalize'
          >
            Followees
          </Typography>
        </div>
      </section>
    </Card>
  );
};

export default ProfileCard;
