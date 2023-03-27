// * layouts
import MainLayout from '../layouts/MainLayout';

// * components
import ReviewChart from '../features/MainDashboard/ReviewChart';
import WeeklyRevenueChart from '../features/MainDashboard/WeeklyRevenueChart';
import CheckTable from '../features/MainDashboard/CheckTable';
import DailyTrafficChart from '../features/MainDashboard/DailyTrafficChart';
import YourPieChart from '../features/MainDashboard/YourPieChart';
import ComplexTable from '../features/MainDashboard/ComplexTable';
import TasksList from '../features/MainDashboard/TasksList';
import Calendar from '../components/Calendar';
import Tutorials from '../features/MainDashboard/Tutorials';
import TeamMembers from '../features/MainDashboard/TeamMembers';

const MainDashboard = () => {
  return (
    <MainLayout title='Main Dashboard'>
      <ReviewChart />
      <WeeklyRevenueChart />
      <CheckTable />
      <DailyTrafficChart />
      <YourPieChart />
      <ComplexTable />
      <TasksList />
      <Calendar />
      <Tutorials />
      <TeamMembers />
    </MainLayout>
  );
};

export default MainDashboard;
