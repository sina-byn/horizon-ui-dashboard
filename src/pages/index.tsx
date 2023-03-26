// * layouts
import MainLayout from '../layouts/MainLayout';

// * components
import ReviewChart from '../features/MainDashboard/ReviewChart';

const MainDashboard = () => {
  return (
    <MainLayout title='Main Dashboard'>
      <ReviewChart />
    </MainLayout>
  );
};

export default MainDashboard;
