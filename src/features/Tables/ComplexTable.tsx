import { useState } from 'react';

// * utils
import { sortTableData } from '../../helpers/utils';

// * components
import Card from '../../components/Card';
import Table from '../../components/Table';
import Progressbar from '../../components/Progressbar';
import Tag from '../../components/Tag';

// * data
const data: RowData[] = [
  {
    id: 1,
    name: 'Horizon UI PRO',
    status: 'approved',
    date: '18.Apr.2021',
    progress: 75,
  },
  {
    id: 2,
    name: 'Horizon UI FREE',
    status: 'disabled',
    date: '18.Apr.2021',
    progress: 35,
  },
  {
    id: 3,
    name: 'Horizon UI PRO',
    status: 'error',
    date: '20.May.2021',
    progress: 85,
  },
  {
    id: 4,
    name: 'Horizon UI PRO',
    status: 'approved',
    date: '12.Jul.2021',
    progress: 50,
  },
  {
    id: 5,
    name: 'Horizon UI PRO',
    status: 'approved',
    date: '18.Apr.2021',
    progress: 75,
  },
  {
    id: 6,
    name: 'Horizon UI FREE',
    status: 'disabled',
    date: '18.Apr.2021',
    progress: 35,
  },
  {
    id: 7,
    name: 'Horizon UI PRO',
    status: 'error',
    date: '20.May.2021',
    progress: 85,
  },
  {
    id: 8,
    name: 'Horizon UI PRO',
    status: 'approved',
    date: '12.Jul.2021',
    progress: 50,
  },
];

// * types
import type { Status } from '../../components/Tag';

type RowData = {
  id: number;
  name: string;
  status: Status;
  date: string;
  progress: number;
};

const ComplexTable = () => {
  const [sortBase, setSortBase] = useState<keyof RowData>();
  const sortedData = sortTableData<RowData>({
    key: sortBase,
    data: data,
  });

  const tableHeaders = [
    { title: 'name', dynamicHeader: true },
    {
      title: 'status',
      fieldClassName: 'py-3',
      field: (rowData: RowData) => <Tag status={rowData.status} variant='icon-only' />,
    },
    { title: 'date', dynamicHeader: true },
    {
      title: 'progress',
      dynamicHeader: true,
      field: (rowData: RowData) => <Progressbar percent={rowData.progress} />,
    },
  ];

  return (
    <Card className='lg:col-span-6 flex-col text-sm'>
      <Table<RowData>
        tableHeader='Complex Table'
        rows={sortedData}
        headers={tableHeaders}
        className='max-h-[300px]'
        theadClassName='border-b'
        sortBase={sortBase}
        setSortBase={setSortBase}
      />
    </Card>
  );
};

export default ComplexTable;
