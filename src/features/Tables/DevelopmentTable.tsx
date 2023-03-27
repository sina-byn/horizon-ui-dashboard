import { useState } from 'react';
import clsx from 'clsx';

// * utils
import { sortTableData } from '../../helpers/utils';

// * components
import Card from '../../components/Card';
import Progressbar from '../../components/Progressbar';
import Table from '../../components/Table';
import Typography from '../../components/Typography';

// * data
const data = [
  {
    id: 1,
    project: 'Marketplace',
    operatingSystems: ['fa-apple', 'fa-android', 'fa-windows'],
    deadline: '12.Jan.2021',
    progress: 75.5,
  },
  {
    id: 2,
    project: 'Venus DB PRO',
    operatingSystems: ['fa-apple'],
    deadline: '21.Feb.2021',
    progress: 35.4,
  },
  {
    id: 3,
    project: 'Venus DS',
    operatingSystems: ['fa-apple', 'fa-android', 'fa-windows'],
    deadline: '13.Mar.2021',
    progress: 25,
  },
  {
    id: 4,
    project: 'Venus 3D Asset',
    operatingSystems: ['fa-apple', 'fa-windows'],
    deadline: '24.Jan.2021',
    progress: 100,
  },
  {
    id: 5,
    project: 'Uranus',
    operatingSystems: ['fa-android', 'fa-windows'],
    deadline: '21.Sep.2021',
    progress: 12.2,
  },
  {
    id: 6,
    project: 'Uranus',
    operatingSystems: ['fa-android', 'fa-windows'],
    deadline: '21.Sep.2021',
    progress: 12.2,
  },
  {
    id: 7,
    project: 'Uranus',
    operatingSystems: ['fa-android', 'fa-windows'],
    deadline: '21.Sep.2021',
    progress: 12.2,
  },
  {
    id: 8,
    project: 'Uranus',
    operatingSystems: ['fa-android', 'fa-windows'],
    deadline: '21.Sep.2021',
    progress: 12.2,
  },
  {
    id: 9,
    project: 'Uranus',
    operatingSystems: ['fa-android', 'fa-windows'],
    deadline: '21.Sep.2021',
    progress: 12.2,
  },
  {
    id: 10,
    project: 'Uranus',
    operatingSystems: ['fa-android', 'fa-windows'],
    deadline: '21.Sep.2021',
    progress: 12.2,
  },
  {
    id: 11,
    project: 'Uranus',
    operatingSystems: ['fa-android', 'fa-windows'],
    deadline: '21.Sep.2021',
    progress: 12.2,
  },
];

// * types
type RowData = typeof data[0];

const DevelopmentTable = () => {
  const [sortBase, setSortBase] = useState<keyof RowData>();
  const sortedData = sortTableData<RowData>({
    key: sortBase,
    data: data,
  });

  const tableHeaders = [
    { title: 'project', dynamicHeader: true },
    {
      key: 'operatingSystems',
      title: 'OS',
      field: ({ operatingSystems }: RowData) => (
        <>
          {operatingSystems.map(os => (
            <i key={os} className={clsx('fa-brands', os)} />
          ))}
        </>
      ),
      fieldClassName: 'flex text-lg gap-x-3 text-neutral/30',
    },
    { title: 'deadline', dynamicHeader: true },
    {
      title: 'progress',
      dynamicHeader: true,
      field: ({ progress }: RowData) => (
        <>
          <Typography tag='span' className='project-progress w-20'>
            {progress}%
          </Typography>
          <Progressbar percent={progress} />
        </>
      ),
      fieldClassName: 'flex items-center gap-x-2 py-2',
    },
  ];

  return (
    <Card className='lg:col-span-6 flex-col text-sm'>
      <Table<RowData>
        tableHeader='Development Table'
        headers={tableHeaders}
        rows={sortedData}
        sortBase={sortBase}
        setSortBase={setSortBase}
        theadClassName='border-b'
        className='max-h-[350px]'
      />
    </Card>
  );
};

export default DevelopmentTable;
