// * react-helmet-async
import { Helmet, HelmetProvider } from 'react-helmet-async';

// * context-providers
import SearchContextProvider from '../context/SearchContextProvider';

// * components
import Sidebar from '../features/Sidebar';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../features/Footer';

// * types
type MainLayoutProps = {
  title: string;
  children: React.ReactNode;
};

const MainLayout = ({ title, children }: MainLayoutProps) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className='layout-wrap grid grid-cols-[50px,_1fr] md:grid-cols-[270px,_1fr] grid-rows-1 h-screen overflow-hidden'>
        <Sidebar />
        <SearchContextProvider>
          <main className='bg-light dark:bg-d-primary-dark px-4 pt-12 overflow-x-hidden overflow-y-auto'>
            <header className='page-header flex flex-col'>
              <Breadcrumbs />

              <h1 className='page-title text-primary dark:text-white text-2xl font-semibold'>
                {title}
              </h1>
            </header>
            <div className='content grid grid-cols-12 auto-rows-max gap-3 mt-6'>
              {children}
            </div>
            <Footer />
          </main>
        </SearchContextProvider>
      </div>
    </HelmetProvider>
  );
};

export default MainLayout;
