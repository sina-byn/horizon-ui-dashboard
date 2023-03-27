// * react-calendar
import ReactCalendar from 'react-calendar';

// * components
import Card from '../Card';

// * styles
import './Calendar.css';

const Calendar = () => {
  const date = new Date();

  return (
    <Card
      style={{ paddingInline: '0.8rem' }}
      className='calendar-card sm:col-span-6 xl:col-span-3 max-h-[310px]'
    >
      <div className='calendar-wrap overflow-y-auto overflow-y-auto overflow-x-hidden'>
        <ReactCalendar value={date} />
      </div>
    </Card>
  );
};

export default Calendar;
