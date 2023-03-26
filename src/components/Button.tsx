import { forwardRef } from 'react';
import clsx from 'clsx';

// * data
const variants = {
  none: '',
  primary: 'bg-primary-light dark:bg-d-primary-light text-gray-200 hover:bg-primary',
  secondary: 'bg-light dark:bg-d-primary-light text-primary-light dark:text-white hover:bg-gray-300',
  neutral: 'bg-gray-100 dark:bg-d-light text-gray-400 dark:text-white',
  light: 'bg-white text-black',
  dark: 'bg-primary-dark dark:bg-d-primary-light text-white',
  transparent: 'bg-none',
};

const sizes = {
  none: '',
  sm: 'text-xs px-3',
  normal: 'text-sm px-4',
};

const roundness = {
  none: '',
  pill: 'rounded-full',
  normal: 'rounded-lg',
};

// * types
type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  type?: 'button' | 'submit';
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  radius?: keyof typeof roundness;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      variant = 'primary',
      size = 'normal',
      radius = 'normal',
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={clsx(
          variant !== 'none' &&
            'flex items-center justify-center font-semibold border-0 outline-0 transition-all duration-300 whitespace-nowrap py-2',
          variants[variant],
          sizes[size],
          roundness[radius],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default Button;
