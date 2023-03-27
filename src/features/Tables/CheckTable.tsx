import { useState } from 'react';

// * utils
import { sortTableData } from '../../helpers/utils';

// * components
import Card from '../../components/Card';
import Table from '../../components/Table';
import Checkbox from '../../components/Checkbox';
import Typography from '../../components/Typography';

// * data
const data = [
  {
    id: 1,
    title: 'Marketplace',
    progress: '17.5% ',
    quantity: '2.458',
    date: '24.Jan.2021',
  },
  {
    id: 2,
    title: 'Venus PRO',
    progress: '10.8%',
    quantity: '1.485',
    date: '12.Jun.2021',
  },
  {
    id: 3,
    title: 'Uranus Kit',
    progress: '21.3%',
    quantity: '1.024',
    date: '5.Jan.2021',
  },
  {
    id: 4,
    title: 'Venus 3D Asset',
    progress: '31.5%',
    quantity: '858',
    date: '7.Mar.2021',
  },
  {
    id: 5,
    title: 'Venus 3D Asset',
    progress: '31.5%',
    quantity: '858',
    date: '7.Mar.2021',
  },
  {
    id: 6,
    title: 'Venus 3D Asset',
    progress: '31.5%',
    quantity: '858',
    date: '7.Mar.2021',
  },
  {
    id: 7,
    title: 'Venus 3D Asset',
    progress: '31.5%',
    quantity: '858',
    date: '7.Mar.2021',
  },
  {
    id: 8,
    title: 'Venus 3D Asset',
    progress: '31.5%',
    quantity: '858',
    date: '7.Mar.2021',
  },
  {
    id: 9,
    title: 'Venus 3D Asset',
    progress: '31.5%',
    quantity: '858',
    date: '7.Mar.2021',
  },
  {
    id: 10,
    title: 'Venus 3D Asset',
    progress: '31.5%',
    quantity: '858',
    date: '7.Mar.2021',
  },
  {
    id: 11,
    title: 'Venus 3D Asset',
    progress: '31.5%',
    quantity: '858',
    date: '7.Mar.2021',
  },
];

// * types
type RowData = typeof data[0];

const CheckTable = () => {
  const [sortBase, setSortBase] = useState<keyof RowData>();
  const sortedData = sortTableData<RowData>({
    key: sortBase,
    data: data,
  });

  const tableHeaders = [
    {
      title: 'title',
      dynamicHeader: true,
      field: ({ title }: RowData) => (
        <>
          <Checkbox onCheckChange={undefined} />
          <Typography tag='span' className='whitesapce-nowrap'>
            {title}
          </Typography>
        </>
      ),
      fieldClassName: 'flex items-center gap-x-2 py-2',
    },
    { title: 'progress', dynamicHeader: true },
    { title: 'quantity', dynamicHeader: true },
    { title: 'date', dynamicHeader: true },
  ];

  return (
    <Card className='lg:col-span-6 flex-col text-sm'>
      <Table<RowData>
        tableHeader='Check Table'
        rows={sortedData}
        headers={tableHeaders}
        theadClassName='border-b'
        className='max-h-[350px]'
        sortBase={sortBase}
        setSortBase={setSortBase}
      />
    </Card>
  );
};

export default CheckTable;
