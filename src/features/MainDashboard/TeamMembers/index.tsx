// * api
import getTeamMembers from './api/getTeamMembers';

// * components
import Card from '../../../components/Card';
import Spinner from '../../../components/Spinner';
import TeamMemberCard from './TeamMemberCard';

const TeamMembers = () => {
  const [teamMembers] = getTeamMembers();

  return (
    <Card
      style={{ paddingInline: '1rem 0' }}
      className='sm:col-span-6 lg:col-span-3 flex-col'
    >
      <header className='card-header'>
        <h6 className='card-title text-primary dark:text-white text-md font-semibold mb-5'>
          Team Members
        </h6>
      </header>
      <section className='members flex flex-col gap-y-3 h-full max-h-[200px] overflow-y-auto pb-3 pr-2 mr-2'>
        {teamMembers && teamMembers.length > 0 ? (
          teamMembers.map(member => (
            <TeamMemberCard
              key={member.login.uuid}
              firstName={member.name.first}
              lastName={member.name.last}
              image={member.picture.medium}
            />
          ))
        ) : (
          <div className='spinner-wrap grid place-items-center w-full h-full'>
            <Spinner className='w-10 h-10' />
          </div>
        )}
      </section>
    </Card>
  );
};

export default TeamMembers;
