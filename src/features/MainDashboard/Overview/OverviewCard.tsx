import clsx from 'clsx';

// * components
import Card from '../../../components/Card';
import Typography from '../../../components/Typography';
import CardIcon from './CardIcon';

// * types
type OverviewCardProps = {
  title: string;
  value: string;
  children?: React.ReactNode;
  icon?: string;
  iconPosition?: 'before' | 'after';
};

const OverviewCard = ({
  title,
  value,
  children,
  icon,
  iconPosition = 'before',
}: OverviewCardProps) => {
  return (
    <Card
      style={{ padding: '0.5rem 1rem' }}
      className={clsx(
        'overview-card sm:col-span-6 md:col-span-4 xl:col-span-2 items-center gap-x-2',
        iconPosition === 'after' && 'justify-between'
      )}
    >
      {icon && iconPosition === 'before' && <CardIcon icon={icon} />}
      <div className='card-data'>
        <Typography tag='span' className='block text-xs text-neutral'>
          {title}
        </Typography>
        <Typography
          tag='span'
          className='block text-lg text-primary dark:text-white font-semibold'
        >
          {value}
        </Typography>
        {children}
      </div>
      {icon && iconPosition === 'after' && <CardIcon icon={icon} />}
    </Card>
  );
};

export default OverviewCard;
