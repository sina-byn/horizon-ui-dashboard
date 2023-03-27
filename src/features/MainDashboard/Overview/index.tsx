// * components
import OverviewCard from './OverviewCard';

const Overview = () => {
  return (
    <>
      <OverviewCard title='Earnings' value='$350.4' icon='fa-chart-simple' />
      <OverviewCard title='Spent this month' value='$642.39' icon='fa-dollar' />
      <OverviewCard title='Sales' value='$642.39'>
        <p className='text-xs text-neutral'>
          <span className='text-green-500 font-semibold'>+23%</span> since last
          month
        </p>
      </OverviewCard>
      <OverviewCard
        title='Your Balance'
        value='$1,000'
        icon='fa-flag'
        iconPosition='after'
      />
      <OverviewCard title='New Tasks' value='154' icon='fa-check' />
      <OverviewCard title='Total Projects' value='2935' icon='fa-file' />
    </>
  );
};

export default Overview;
