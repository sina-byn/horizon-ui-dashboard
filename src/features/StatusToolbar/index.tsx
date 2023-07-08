import clsx from 'clsx';

// * components
import IpIndicator from './IpIndicator';
import BatteryIndicator from './BatteryIndicator';
import OnlineIndicator from './OnlineIndicator';

const StatusToolbar = () => {
  return (
    <div
      className={clsx(
        'status-toolbar col-span-12 justify-self-end w-fit flex items-center gap-x-4',
        'bg-white dark:bg-d-primary text-sm text-primary-dark dark:text-white shadow-custom dark:shadow-none',
        'font-medium rounded-full transition-all duration-300 px-5 py-2'
      )}
    >
      <OnlineIndicator />
      <IpIndicator />
      <BatteryIndicator />
    </div>
  );
};

export default StatusToolbar;
