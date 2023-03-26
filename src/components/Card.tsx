import clsx from 'clsx';

// * types
type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  darkModeClassName?: string;
};

const Card = ({
  className,
  darkModeClassName,
  children,
  ...props
}: CardProps) => {
  return (
    <div
      className={clsx(
        'card col-span-12 flex rounded-2xl bg-white px-6 py-5 transition-all duration-300',
        darkModeClassName ? darkModeClassName : 'dark:bg-d-primary',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
