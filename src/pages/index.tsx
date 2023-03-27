// * layouts
import MainLayout from '../layouts/MainLayout';

// * components
import ReviewChart from '../features/MainDashboard/ReviewChart';
import WeeklyRevenueChart from '../features/MainDashboard/WeeklyRevenueChart';
import CheckTable from '../features/MainDashboard/CheckTable';
import DailyTrafficChart from '../features/MainDashboard/DailyTrafficChart';

const MainDashboard = () => {
  return (
    <MainLayout title='Main Dashboard'>
      <ReviewChart />
      <WeeklyRevenueChart />
      <CheckTable />
      <DailyTrafficChart />
    </MainLayout>
  );
};

export default MainDashboard;
