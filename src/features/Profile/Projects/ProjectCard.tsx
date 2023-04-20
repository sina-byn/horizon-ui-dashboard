import { useState } from 'react';
import { z } from 'zod';
import clsx from 'clsx';

// * components
import Card from '../../../components/Card';
import Form from '../../../components/Form';
import Button from '../../../components/Button';
import Link from '../../../components/Link';
import Typography from '../../../components/Typography';
import InputField from '../../../components/Form/InputField';

// * schemas
const schema = z.object({
  title: z.string().min(1, 'required field'),
  url: z.string(),
});

// * types
type ProjectCardProps = {
  id: number;
  title: string;
  image: string;
  url: string;
};

type ProjectCardData = ProjectCardProps;
type FormData = z.infer<typeof schema>;

const ProjectCard = (props: ProjectCardProps) => {
  const [cardData, setCardData] = useState<ProjectCardData>(props);
  const [editMode, setEditMode] = useState<boolean>(false);

  const modeToggleHandler = () => setEditMode(prev => !prev);
  const submitHandler = (data: FormData) => {
    modeToggleHandler();
    setCardData(prev => ({ ...prev, title: data.title, url: data.url || '#' }));
  };

  return (
    <Card
      style={{ padding: '0.5rem 1rem 0.5rem 0.8rem' }}
      darkModeClassName='dark:bg-d-light'
      className='justify-between items-center gap-x-3 shadow-custom dark:shadow-none mt-3'
    >
      <img src={cardData.image} alt='project image' className='self-start' />
      <div
        className={clsx(
          'project-info w-full overflow-hidden',
          editMode && 'hidden'
        )}
      >
        <Typography
          tag='span'
          className='project-title block text-sm text-primary dark:text-white font-semibold truncate'
        >
          {cardData.title}
        </Typography>
        <div className='project-details flex flex-wrap items-center gap-x-1 text-xs font-medium capitalize font-medium capitalize'>
          <Typography tag='span' className='project-id text-neutral'>
            Project #{cardData.id}
          </Typography>
          <i className='fa-solid fa-circle text-neutral text-[0.2rem]' />
          <Link
            size='none'
            variant='none'
            href={cardData.url}
            rel='noreferrer noopener'
            target={cardData.url !== '#' ? '_blank' : '_self'}
            className='more-details-link text-primary-light dark:text-white underline'
          >
            <Typography tag='span'>See Project Details</Typography>
          </Link>
        </div>
      </div>
      <i
        onClick={modeToggleHandler}
        className={clsx(
          'fa-solid fa-pen fa-2xs text-neutral mt-1 cursor-pointer',
          editMode && 'hidden'
        )}
      />
      <Form<FormData, typeof schema>
        schema={schema}
        onSubmit={submitHandler}
        options={{ defaultValues: cardData }}
        className={clsx(!editMode && '!hidden')}
      >
        {({ register, formState: { errors } }) => (
          <>
            <InputField
              label='title*'
              error={errors.title}
              registeration={register('title')}
              placeholder='your title goes here'
            />
            <InputField
              label='url'
              error={errors.url}
              registeration={register('url')}
              placeholder='your url goes here'
              className='-mt-3'
            />
            <Button type='submit' size='sm' className='-mt-3'>
              Done
            </Button>
          </>
        )}
      </Form>
    </Card>
  );
};

export default ProjectCard;
