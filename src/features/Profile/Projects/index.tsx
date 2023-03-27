// * components
import Card from '../../../components/Card';
import ProjectCard from './ProjectCard';

// * data
const data = [
  {
    id: 1,
    title: 'Technology behind the Blockchain',
    image: '/projects/project-1.png',
  },
  {
    id: 2,
    title: 'Greatest way to a good Economy',
    image: '/projects/project-2.png',
  },
  {
    id: 3,
    title: 'Most essential tips for Burnout',
    image: '/projects/project-3.png',
  },
  {
    id: 4,
    title: 'Technology behind the Blockchain',
    image: '/projects/project-1.png',
  },
  {
    id: 5,
    title: 'Greatest way to a good Economy',
    image: '/projects/project-2.png',
  },
  {
    id: 6,
    title: 'Most essential tips for Burnout',
    image: '/projects/project-3.png',
  },
];

const Projects = () => {
  return (
    <Card className='lg:col-span-6 xl:col-span-4 flex-col max-h-[400px]'>
      <h6 className='text-primary dark:text-white text-lg font-bold capitalize'>All Projects</h6>
      <span className='description text-neutral text-xs my-3'>
        Here you can find more details about your projects. Keep your user
        engaged by providing meaningful information.
      </span>
      <div className='cards overflow-y-auto mt-4 pb-4 pr-2'>
        {data.map(card => (
          <ProjectCard
            key={card.id}
            id={card.id}
            title={card.title}
            image={card.image}
          />
        ))}
      </div>
    </Card>
  );
};

export default Projects;
