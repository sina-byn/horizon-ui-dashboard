// * components
import Card from '../../../components/Card';
import Link from '../../../components/Link';
import Typography from '../../../components/Typography';

// * types
type ProjectCardProps = {
  id: number;
  title: string;
  image: string;
};

const ProjectCard = ({ id, title, image }: ProjectCardProps) => {
  return (
    <Card
      style={{ padding: '0.5rem 1rem 0.5rem 0.8rem' }}
      darkModeClassName='dark:bg-d-light'
      className='justify-between items-center gap-x-3 shadow-custom dark:shadow-none mt-3'
    >
      <img src={image} alt='project image' />
      <div className='project-info w-full overflow-hidden'>
        <Typography
          tag='span'
          className='project-title block text-sm text-primary dark:text-white font-semibold truncate'
        >
          {title}
        </Typography>
        <div className='project-details flex flex-wrap items-center gap-x-1 text-xs font-medium capitalize font-medium capitalize'>
          <Typography tag='span' className='project-id text-neutral'>
            Project #{id}
          </Typography>
          <i className='fa-solid fa-circle text-neutral text-[0.2rem]' />
          <Link
            href='#'
            size='none'
            variant='none'
            className='more-details-link text-primary-light dark:text-white underline'
          >
            <Typography tag='span'>See Project Details</Typography>
          </Link>
        </div>
      </div>
      <i className='fa-solid fa-pen fa-2xs text-neutral mt-1 cursor-pointer' />
    </Card>
  );
};

export default ProjectCard;
