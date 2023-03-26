import { Route, Routes } from 'react-router-dom';

// * pages
import MainDashboard from '../pages';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<MainDashboard />} />
    </Routes>
  );
};

export default AppRoutes;
