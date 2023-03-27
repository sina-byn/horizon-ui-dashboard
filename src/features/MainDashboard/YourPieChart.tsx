// * components
import Card from '../../components/Card';
import Chart from '../../components/Chart';

// * data
const data = [
  {
    name: 'others',
    value: 12,
  },
  {
    name: 'System',
    value: 25,
  },
  {
    name: 'Your Files',
    value: 63,
  },
];
const colors = ['#EFF4FB', '#6AD2FF', '#4318FF'];

const YourPieChart = () => {
  return (
    <Card className='sm:col-span-6 xl:col-span-3 flex-col'>
      <header className='card-header'>
        <h6 className='text-xl font-bold text-primary dark:text-white'>
          Your Pie Chart
        </h6>
      </header>
      <Chart.PieChart data={data} colors={colors} height={250} />
      <div className='chart-legend flex flex-row-reverse shadow-custom dark:shadow-none dark:bg-d-light rounded-xl py-3 -mt-4'>
        {data.slice(1).map((item, idx) => (
          <div
            key={item.name}
            className='legend-item flex flex-col items-center odd:border-l even:border-r dark:border-gray-400/20'
            style={{ width: 100 / (data.length - 1) + '%' }}
          >
            <span className='text-sm text-neutral'>
              <i
                className='fa-solid fa-circle text-[0.5rem] mr-1'
                style={{ color: colors[idx + 1] }}
              />
              {item.name}
            </span>
            <span className='font-bold text-primary dark:text-white'>
              {item.value}%
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default YourPieChart;
