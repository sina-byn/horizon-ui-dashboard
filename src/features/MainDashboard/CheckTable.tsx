// * components
import Card from '../../components/Card';
import Table from '../../components/Table';
import Checkbox from '../../components/Checkbox';
import Typography from '../../components/Typography';

// * data
const data: RowData[] = [
  {
    id: 1,
    name: 'Horizon UI PRO',
    progress: '17.5%',
    quantity: '2.458',
    date: '24.jan.2021',
  },
  {
    id: 2,
    name: 'Horizon UI FREE',
    progress: '10.8%',
    quantity: '1.485',
    date: '12.jun.2021',
  },
  {
    id: 3,
    name: 'Weekly Update',
    progress: '21.3%',
    quantity: '1.024',
    date: '5.jan.2021',
  },
  {
    id: 4,
    name: 'Venus 3D Asset',
    progress: '31.5%',
    quantity: '858',
    date: '7.Mar.2021',
  },
  {
    id: 5,
    name: 'Marketplace',
    progress: '12.2%',
    quantity: '258',
    date: '17.Dec.2021',
  },
  {
    id: 6,
    name: 'Horizon UI PRO',
    progress: '17.5%',
    quantity: '2.458',
    date: '24.jan.2021',
  },
  {
    id: 7,
    name: 'Horizon UI FREE',
    progress: '10.8%',
    quantity: '1.485',
    date: '12.jun.2021',
  },
  {
    id: 8,
    name: 'Weekly Update',
    progress: '21.3%',
    quantity: '1.024',
    date: '5.jan.2021',
  },
  {
    id: 9,
    name: 'Venus 3D Asset',
    progress: '31.5%',
    quantity: '858',
    date: '7.Mar.2021',
  },
  {
    id: 10,
    name: 'Marketplace',
    progress: '12.2%',
    quantity: '258',
    date: '17.Dec.2021',
  },
];

// * types
type RowData = {
  id: number;
  name: string;
  progress: string;
  quantity: string;
  date: string;
};

const CheckTable = () => {
  const tableHeaders = [
    {
      title: 'name',
      field: (data: RowData) => (
        <>
          <Checkbox onCheckChange={undefined} />
          <Typography tag='span' className='whitespace-nowrap'>
            {data.name}
          </Typography>
        </>
      ),
      fieldClassName: 'flex items-center gap-x-2 py-1.5',
    },
    { title: 'progress' },
    { title: 'quantity' },
    { title: 'date' },
  ];

  return (
    <Card className='xl:col-span-6 flex-col text-sm'>
      <Table<RowData>
        tableHeader='Check Table'
        rows={data}
        headers={tableHeaders}
        className='max-h-[280px]'
      />
    </Card>
  );
};

export default CheckTable;
