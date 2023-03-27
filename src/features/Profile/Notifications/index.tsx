// * components
import Card from '../../../components/Card';
import Notification from './Notification';

// * data
const data = [
  {
    id: 1,
    title: 'Item update notifications',
    checked: true,
  },
  {
    id: 2,
    title: 'Item comment notifications',
    checked: false,
  },
  {
    id: 3,
    title: 'Buyer review notifications',
    checked: true,
  },
  {
    id: 4,
    title: 'Rating reminders notifications',
    checked: false,
  },
  {
    id: 5,
    title: 'Meetups near you notifications',
    checked: false,
  },
  {
    id: 6,
    title: 'Company news notifications',
    checked: true,
  },
  {
    id: 7,
    title: 'New launches and projects',
    checked: true,
  },
  {
    id: 8,
    title: 'Monthly product changes',
    checked: false,
  },
  {
    id: 9,
    title: 'Subscribe to newsletter',
    checked: false,
  },
  {
    id: 10,
    title: 'Email me when someone follows me',
    checked: true,
  },
];

const Notifications = () => {
  return (
    <Card className='notifications-card lg:col-span-5 xl:col-span-3 flex-col max-h-[400px]'>
      <h6 className='text-primary dark:text-white text-lg font-bold capitalize'>
        Notifications
      </h6>
      <div className='notifications space-y-3 overflow-y-auto pr-1 mt-3'>
        {data.map(notif => (
          <Notification
            key={notif.id}
            title={notif.title}
            checked={notif.checked}
          />
        ))}
      </div>
    </Card>
  );
};

export default Notifications;
