// * layouts
import MainLayout from '../layouts/MainLayout';

// * components
import DevelopmentTable from '../features/Tables/DevelopmentTable';
import CheckTable from '../features/Tables/CheckTable';
import SimpleTable from '../features/Tables/SimpleTable';
import ComplexTable from '../features/Tables/ComplexTable';

const Tables = () => {
  return (
    <MainLayout title='Tables'>
      <DevelopmentTable />
      <CheckTable />
      <SimpleTable />
      <ComplexTable />
    </MainLayout>
  );
};

export default Tables;
