import clsx from 'clsx';

// * types
type SpinnerProps = {
  className?: string;
};

const Spinner = ({ className }: SpinnerProps) => {
  return (
    <div
      className={clsx(
        'spinner border-[0.2rem] border-t-primary-light dark:border-t-d-primary-light aspect-square rounded-full animate-spin',
        className || 'w-6 h-6'
      )}
    />
  );
};

export default Spinner;
