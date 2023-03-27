import { useState } from 'react';
import { z } from 'zod';
import clsx from 'clsx';

// * api
import getAssignees from './api/getAssignees';

// * components
import Card from '../../../components/Card';
import Typography from '../../../components/Typography';
import Form from '../../../components/Form';
import InputField from '../../../components/Form/InputField';
import TextField from '../../../components/Form/TextField';
import ImageInput from '../../../components/Form/ImageInput';
import Button from '../../../components/Button';
import Dropdown from '../../../components/Dropdown';
import Tag from '../../../components/Tag';
import UserChips from '../../../components/UserChips';

// * schemas
const schema = z.object({
  title: z.string().min(1, 'required field'),
  image: z.instanceof(FileList).optional(),
  description: z.string().optional(),
  state: z.string(),
});

// * types
import type { KanbanCardData } from '../KanbanBoard';

type KanbanCardProps = KanbanCardData;

const KanbanCard = (props: KanbanCardProps) => {
  const [cardData, setCardData] = useState<KanbanCardData>(props);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [assignees] = getAssignees();
  const imageFile =
    typeof cardData.image !== 'string' ? cardData.image?.item(0) : null;
  const imageBlob = imageFile ? URL.createObjectURL(imageFile) : null;
  const hasImage = cardData.image && cardData.image.length > 0;

  const modeToggleHandler = () => setEditMode(prev => !prev);
  const submitHandler = (data: KanbanCardData) => {
    modeToggleHandler();
    setCardData(data);
  };

  return (
    <Card
      style={{ paddingInline: '1rem' }}
      darkModeClassName='dark:bg-d-light'
      className='flex-col w-[250px] sm:w-[350px] shadow-custom dark:shadow-none'
    >
      <Form<KanbanCardData, typeof schema>
        schema={schema}
        onSubmit={submitHandler}
        options={{ defaultValues: cardData }}
        className={clsx(!editMode && '!hidden')}
      >
        {({ register, setValue, resetField, formState: { errors } }) => (
          <>
            <InputField
              label='title*'
              error={errors.title}
              registeration={register('title')}
              placeholder='your title goes here'
            />
            <TextField
              label='description'
              error={errors.description}
              registeration={register('description')}
              placeholder='description'
            />
            <Dropdown<KanbanCardData>
              label='state'
              field='state'
              setValue={setValue}
              className='w-28'
              items={['updating', 'pending', 'error', 'done']}
            />
            <ImageInput<KanbanCardData>
              field='image'
              registeration={register}
              resetField={resetField}
            />
            <Button type='submit' size='sm' className='self-end'>
              Done
            </Button>
          </>
        )}
      </Form>
      <div className={clsx('card-content-wrapper', editMode && 'hidden')}>
        <header className='card-header flex justify-between items-center gap-x-4'>
          <Typography
            tag='h6'
            className='card-title truncate text-primary dark:text-white text-sm font-semibold'
          >
            {cardData.title}
          </Typography>
          <i
            onClick={modeToggleHandler}
            className='fa-solid fa-pen fa-2xs text-neutral mt-1 cursor-pointer'
          />
        </header>
        <section className='card-body text-xs text-neutral'>
          {hasImage && (
            <img
              src={
                typeof cardData.image === 'string' ? cardData.image : imageBlob!
              }
              alt='card image'
              className='w-full rounded-xl mt-3 mb-1'
            />
          )}
          <Typography className='description mt-2'>
            {cardData.description}
          </Typography>
        </section>
        <footer className='card-footer flex justify-between items-center gap-x-4 mt-5'>
          <UserChips users={assignees} />
          <Tag
            status={cardData.state}
            hasIcon={false}
            className='text-xs rounded-lg px-4 pt-1.5 pb-2'
          />
        </footer>
      </div>
    </Card>
  );
};

export default KanbanCard;
