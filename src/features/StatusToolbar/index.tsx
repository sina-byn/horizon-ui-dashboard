import clsx from 'clsx';

// * components
import IpIndicator from './IpIndicator';

const StatusToolbar = () => {
  return (
    <div
      className={clsx(
        'status-toolbar col-span-12 justify-self-end w-fit flex items-center gap-x-4',
        'bg-white dark:bg-d-primary text-sm dark:text-white shadow-custom dark:shadow-none',
        'rounded-full transition-all duration-300 px-5 py-2'
      )}
    >
      <IpIndicator />
    </div>
  );
};

export default StatusToolbar;
