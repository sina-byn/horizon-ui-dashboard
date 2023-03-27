// * react-toastify
import { toast as toastNotify } from 'react-toastify';

// * utils
import { notify } from '../../../helpers/utils';

// * components
import Switch from '../../../components/Switch';
import Typography from '../../../components/Typography';

// * types
type NotificationProps = {
  title: string;
  checked: boolean;
};

const Notification = ({ title, checked }: NotificationProps) => {
  const notifToggleHandler = (state: boolean) => {
    const message = `${title} - Turned ${state ? 'On' : 'Off'}`;
    toastNotify(message);
    notify(message);
  };

  return (
    <div className='notification flex items-center gap-x-3'>
      <Switch checked={checked} onCheckChange={notifToggleHandler} />
      <Typography
        tag='span'
        className='notification-title text-sm text-primary dark:text-white font-medium truncate pb-1'
      >
        {title}
      </Typography>
    </div>
  );
};

export default Notification;
