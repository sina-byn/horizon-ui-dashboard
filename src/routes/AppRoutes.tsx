import { Route, Routes } from 'react-router-dom';

// * pages
import MainDashboard from '../pages';
import Marketplace from '../pages/Marketplace';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/marketplace' element={<Marketplace />} />
      <Route path='/' element={<MainDashboard />} />
    </Routes>
  );
};

export default AppRoutes;
