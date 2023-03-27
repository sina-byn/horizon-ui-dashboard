// * components
import Card from '../../../components/Card';
import Typography from '../../../components/Typography';

// * types
type TeamMemberCardProps = {
  firstName: string;
  lastName: string;
  image: string;
};

const TeamMemberCard = ({
  firstName,
  lastName,
  image,
}: TeamMemberCardProps) => {
  const fullName = firstName + ' ' + lastName;

  return (
    <Card
      style={{ padding: '0.8rem 1rem' }}
      darkModeClassName='dark:bg-d-light'
      className='col-span-3 justify-between items-center gap-x-2 dark:text-white shadow-custom dark:shadow-none'
    >
      <img src={image} alt={fullName} className='w-10 h-10 rounded-full' />
      <Typography tag='span' className='member-name grow truncate'>
        {fullName}
      </Typography>
      <i className='fa-solid fa-ellipsis-vertical' />
    </Card>
  );
};

export default TeamMemberCard;
