import clsx from 'clsx';

// * types
type CardIconProps = {
  icon: string;
};

const CardIcon = ({ icon }: CardIconProps) => {
  return (
    <div className='w-12 h-12 icon grid place-items-center rounded-full bg-light dark:bg-d-light text-primary-light dark:text-white'>
      <i className={clsx('fa-solid', icon)} />
    </div>
  );
};

export default CardIcon;
