// * components
import Card from '../../components/Card';
import SidebarLink from './SidebarLink';

const Sidebar = () => {
  return (
    <aside className='flex flex-col justify-between dark:bg-d-primary py-5'>
      <header className='py-6'>
        <h1 className='logo text-2xl text-center text-primary text-white'>
          <span className='font-bold'>
            H<span className='hidden md:inline'>ORIZON&nbsp;</span>
          </span>
          F<span className='hidden md:inline'>REE</span>
        </h1>
      </header>
      <nav className='grow'>
        <SidebarLink icon='fa-home' title='Dashboard' href='/' />
        <SidebarLink
          icon='fa-shopping-cart'
          title='NFT Marketplace'
          href='/marketplace'
        />
        <SidebarLink icon='fa-chart-simple' title='Tables' href='/tables' />
        <SidebarLink icon='fa-boxes-stacked' title='Kanban' href='/kanban' />
        <SidebarLink icon='fa-user' title='Profile' href='/profile' />
        <SidebarLink icon='fa-lock' title='Sign In' href='/sign-in' />
      </nav>
      <footer className='hidden md:block px-6'>
        <Card
          style={{ paddingBlock: '4rem 2.5rem' }}
          className='relative flex-col items-center text-center text-gray-200 bg-gradient-to-br from-[#868CFF] to-[#4318FF]'
        >
          <h4 className='font-semibold mb-2'>Upgrade to PRO</h4>
          <p className='text-sm'>
            to get access to all features! Connect With Venus World!
          </p>
          <div className='icon grid place-items-center absolute -top-10 mx-auto aspect-square w-20 rounded-full bg-gradient-to-br from-[#868CFF] to-[#4318FF] border-4 border-white p-2'>
            <img src='/horizon-logo.svg' alt='horizon logo' />
          </div>
        </Card>
      </footer>
    </aside>
  );
};

export default Sidebar;
