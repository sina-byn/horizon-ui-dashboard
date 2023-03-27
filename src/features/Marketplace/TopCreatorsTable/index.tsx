// * api
import getCreators from './api/getCreators';

// * components
import Card from '../../../components/Card';
import Table from '../../../components/Table';
import Typography from '../../../components/Typography';
import Progressbar from '../../../components/Progressbar';

// * types
import type { Creator } from './api/getCreators';

const TopCreatorsTable = () => {
  const [creators] = getCreators();

  const tableHeaders = [
    {
      title: 'name',
      field: ({ username, image }: Creator) => (
        <div className='creator-info flex items-center gap-x-2 pr-10 py-2'>
          <img
            src={image}
            alt='creator-profile'
            className='w-9 h-9 rounded-full'
          />
          <Typography
            tag='span'
            className='text-sm text-primary dark:text-white'
          >
            @{username}
          </Typography>
        </div>
      ),
    },
    { title: 'artworks', fieldClassName: 'text-neutral text-sm' },
    {
      title: 'rating',
      field: ({ rating }: Creator) => <Progressbar percent={rating} />,
    },
  ];

  return (
    <Card className='flex-col'>
      <Table<Creator>
        tableHeader='Top Creators'
        headers={tableHeaders}
        rows={creators}
        theadClassName='shadow-custom dark:shadow-none'
        loading={!creators || creators.length === 0}
      />
    </Card>
  );
};

export default TopCreatorsTable;
