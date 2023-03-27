import { Route, Routes } from 'react-router-dom';

// * pages
import MainDashboard from '../pages';
import Marketplace from '../pages/Marketplace';
import Tables from '../pages/Tables';
import Kanban from '../pages/Kanban';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/kanban' element={<Kanban />} />
      <Route path='/tables' element={<Tables />} />
      <Route path='/marketplace' element={<Marketplace />} />
      <Route path='/' element={<MainDashboard />} />
    </Routes>
  );
};

export default AppRoutes;
