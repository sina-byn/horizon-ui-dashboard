// * components
import Card from '../../components/Card';
import Typography from '../../components/Typography';

// * data
const data = [
  {
    id: 1,
    title: 'Education',
    value: 'Stanford University',
  },
  {
    id: 2,
    title: 'Languages',
    value: 'English, Spanish, Italian',
  },
  {
    id: 3,
    title: 'Department',
    value: 'Product Design',
  },
  {
    id: 4,
    title: 'Work History',
    value: 'Google, Facebook',
  },
  {
    id: 5,
    title: 'Organization',
    value: 'Simmmple Web LLC',
  },
  {
    id: 6,
    title: 'Birthday',
    value: '20 July 1986',
  },
];

const GeneralInformation = () => {
  return (
    <Card className='general-info-card lg:col-span-7 xl:col-span-5 flex-col max-h-[400px]'>
      <Typography
        tag='h6'
        className='text-primary dark:text-white text-lg font-bold capitalize'
      >
        General Information
      </Typography>
      <Typography className='description text-neutral text-xs my-3'>
        As we live, our hearts turn colder. Cause pain is what we go through as
        we become older. We get insulted by others, lose trust for those others.
        We get back stabbed by friends. It becomes harder for us to give others
        a hand. We get our heart broken by people we love, even that we give
        them all...
      </Typography>
      <div className='cards grid grid-cols-12 gap-3 overflow-y-auto mt-4 pb-4 pr-2'>
        {data.map(card => (
          <Card
            key={card.id}
            style={{ padding: '1rem 0.8rem' }}
            darkModeClassName='dark:bg-d-light'
            className='lg:col-span-6 flex-col justify-center text-xs font-medium shadow-custom dark:shadow-none'
          >
            <Typography
              tag='span'
              className='card-title text-neutral capitalize'
            >
              {card.title}
            </Typography>
            <Typography
              tag='span'
              className='card-value text-primary dark:text-white capitalize truncate'
            >
              {card.value}
            </Typography>
          </Card>
        ))}
      </div>
    </Card>
  );
};

export default GeneralInformation;
