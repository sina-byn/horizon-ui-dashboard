import { Bar } from 'recharts';

// * components
import Card from '../../components/Card';
import Chart from '../../components/Chart';

// * data
const data = [
  {
    name: '00',
    pv: 2400,
  },
  {
    name: '04',
    pv: 1398,
  },
  {
    name: '08',
    pv: 9800,
  },
  {
    name: '12',
    pv: 3908,
  },
  {
    name: '14',
    pv: 4800,
  },
  {
    name: '16',
    pv: 3800,
  },
  {
    name: '18',
    pv: 4300,
  },
];

const DailyTrafficChart = () => {
  return (
    <Card className='sm:col-span-6 xl:col-span-3 flex-col justify-between gap-y-4'>
      <header className='card-header flex justify-between'>
        <div className='details'>
          <span className='text-neutral font-medium'>Daily Traffic</span>
          <h6 className='font-bold text-primary dark:text-white text-2xl'>
            2.579
            <span className='text-neutral font-medium text-sm ml-0.5'>
              Visitors
            </span>
          </h6>
        </div>
        <span className='percent text-green-500 text-xs'>
          <i className='fa-solid fa-caret-up mr-1' />
          +2.45%
        </span>
      </header>
      <Chart.BarChart data={data}>
        <defs>
          <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='60%' stopColor='#4318FF' stopOpacity={0.8} />
            <stop offset='100%' stopColor='#ffffff' stopOpacity={0} />
          </linearGradient>
        </defs>
        <Bar dataKey='pv' fill='url(#colorPv)' radius={[10, 10, 0, 0]} />
      </Chart.BarChart>
    </Card>
  );
};

export default DailyTrafficChart;
