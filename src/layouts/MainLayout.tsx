// * react-helmet-async
import { Helmet, HelmetProvider } from 'react-helmet-async';

// * react-toastify
import { ToastContainer } from 'react-toastify';

// * context-providers
import SearchContextProvider from '../context/SearchContextProvider';

// * components
import Sidebar from '../features/Sidebar';
import Breadcrumbs from '../components/Breadcrumbs';
import Toolbar from '../features/Toolbar';
import SearchToolbar from '../features/SearchToolbar';
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
          <main className='flex flex-col bg-light dark:bg-d-primary-dark px-4 overflow-hidden'>
            <header className='page-header flex flex-col bg-light dark:bg-d-primary-dark pt-12 pb-6'>
              <Breadcrumbs />
              <h1 className='page-title text-primary dark:text-white text-2xl font-semibold'>
                {title}
              </h1>
              <Toolbar />
              <SearchToolbar />
            </header>
            <div className='content h-screen overflow-y-auto'>
              <div className='content-wrap grid grid-cols-12 auto-rows-max gap-3'>
                {children}
              </div>
              <Footer />
            </div>
          </main>
        </SearchContextProvider>
      </div>
      <ToastContainer autoClose={2000} pauseOnFocusLoss={false} pauseOnHover />
    </HelmetProvider>
  );
};

export default MainLayout;
