import { Bar } from 'recharts';

// * components
import Card from '../../components/Card';
import Chart from '../../components/Chart';

// * data
const data = [
  {
    name: '17',
    uv: 4000,
    pv: 2400,
  },
  {
    name: '18',
    uv: 3000,
    pv: 1398,
  },
  {
    name: '19',
    uv: 2000,
    pv: 6500,
  },
  {
    name: '20',
    uv: 2780,
    pv: 3908,
  },
  {
    name: '21',
    uv: 1890,
    pv: 4800,
  },
  {
    name: '21',
    uv: 2390,
    pv: 3800,
  },
  {
    name: '23',
    uv: 3490,
    pv: 4300,
  },
  {
    name: '24',
    uv: 3490,
    pv: 4300,
  },
  {
    name: '25',
    uv: 3490,
    pv: 4300,
  },
];

const WeeklyRevenueChart = () => {
  return (
    <Card className='lg:col-span-6 flex-col gap-x-2'>
      <h5 className='font-bold text-xl text-primary dark:text-white'>
        Weekly Revenue
      </h5>
      <Chart.BarChart data={data}>
        <Bar dataKey='pv' stackId='1' fill='#775FFC' />
        <Bar dataKey='uv' stackId='1' fill='#84D9FD' />
        <Bar dataKey='uv' stackId='1' fill='#E6EDF9' radius={[10, 10, 0, 0]} />
      </Chart.BarChart>
    </Card>
  );
};

export default WeeklyRevenueChart;
