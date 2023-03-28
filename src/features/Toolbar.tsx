import clsx from 'clsx';

// * components
import SearchBox from '../components/SearchBox';
import ThemeSwitch from '../components/ThemeSwitch';

const Toolbar = () => {
  const toolbarIconClassName =
    'fa-solid grid place-items-center w-10 h-10 text-sm rounded-full hover:bg-light dark:hover:bg-d-light cursor-pointer';

  return (
    <div
      className={clsx(
        'toolbar self-end flex flex-col-reverse sm:flex-row items-center gap-x-1 gap-y-2',
        'w-full sm:w-auto sm:h-12 bg-transparent sm:bg-white dark:sm:bg-d-primary',
        'text-neutral dark:text-white rounded-full sm:px-2 py-1.5 mt-2 sm:mt-0'
      )}
    >
      <SearchBox />
      <div
        className={clsx(
          'toolbar-icons self-end sm:self-center flex items-center gap-x-1',
          'h-12 sm:h-full bg-white dark:bg-d-primary',
          'rounded-full px-2 sm:px-0 py-1.5 sm:py-0'
        )}
      >
        <i className={clsx('fa-bell', toolbarIconClassName)} />
        <ThemeSwitch className={toolbarIconClassName} />
        <i className={clsx('fa-info-circle', toolbarIconClassName)} />
        <img src='/avatar.png' alt='profile' className='h-full' />
      </div>
    </div>
  );
};

export default Toolbar;
