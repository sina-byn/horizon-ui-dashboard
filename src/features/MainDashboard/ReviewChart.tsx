import { Line } from 'recharts';

// * components
import Card from '../../components/Card';
import Chart from '../../components/Chart';
import Button from '../../components/Button';

// * data
const data = [
  {
    name: 'SEP',
    uv: 4000,
    pv: 2400,
  },
  {
    name: 'OCT',
    uv: 3000,
    pv: 1698,
  },
  {
    name: 'NOV',
    uv: 2000,
    pv: 5000,
  },
  {
    name: 'DEC',
    uv: 2780,
    pv: 3908,
  },
  {
    name: 'JAN',
    uv: 1890,
    pv: 4800,
  },
  {
    name: 'FEB',
    uv: 2390,
    pv: 3800,
  },
];

const ReviewChart = () => {
  return (
    <Card className='lg:col-span-6 flex-col sm:flex-row gap-x-2 gap-y-5'>
      <div className='details flex flex-col'>
        <Button variant='neutral' size='sm' className='w-fit mb-3'>
          <i className='fa-regular fa-calendar mr-2' />
          This Month
        </Button>
        <h5 className='text-navy dark:text-white text-2xl font-bold'>$37.5K</h5>
        <div className='flex gap-x-2 whitespace-nowrap text-xs text-neutral'>
          Total Spent
          <span className='text-green-500'>
            <i className='fa-solid fa-caret-up mr-1' />
            +2.45%
          </span>
        </div>
        <span className='flex items-center gap-x-2 whitespace-nowrap text-sm text-green-500 font-semibold mt-6'>
          <i className='fa-solid fa-check-circle mt-1' />
          On Track
        </span>
      </div>
      <Chart.LineChart data={data} wrapperClassName='self-end'>
        <Line
          type='monotone'
          dataKey='pv'
          stroke='#4318FF'
          strokeWidth={3}
          dot={false}
        />
        <Line
          type='monotone'
          dataKey='uv'
          stroke='#6AD2FF'
          strokeWidth={3}
          dot={false}
        />
      </Chart.LineChart>
    </Card>
  );
};

export default ReviewChart;
