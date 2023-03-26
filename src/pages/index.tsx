// * layouts
import MainLayout from '../layouts/MainLayout';

// * components
import ReviewChart from '../features/MainDashboard/ReviewChart';
import WeeklyRevenueChart from '../features/MainDashboard/WeeklyRevenueChart';

const MainDashboard = () => {
  return (
    <MainLayout title='Main Dashboard'>
      <ReviewChart />
      <WeeklyRevenueChart />
    </MainLayout>
  );
};

export default MainDashboard;
