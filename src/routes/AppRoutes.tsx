import { Route, Routes } from 'react-router-dom';

// * pages
import MainDashboard from '../pages';
import Marketplace from '../pages/Marketplace';
import Tables from '../pages/Tables';
import Kanban from '../pages/Kanban';
import Profile from '../pages/Profile';
import SignIn from '../pages/SignIn';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/kanban' element={<Kanban />} />
      <Route path='/tables' element={<Tables />} />
      <Route path='/marketplace' element={<Marketplace />} />
      <Route path='/' element={<MainDashboard />} />
    </Routes>
  );
};

export default AppRoutes;
