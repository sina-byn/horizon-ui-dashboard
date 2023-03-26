import { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';

// * data
const variants = {
  none: '',
  primary: 'bg-primary-light text-gray-200 hover:bg-primary',
  secondary: 'bg-light text-primary-light',
  neutral: 'bg-gray-100 text-gray-400',
  light: 'bg-white text-black',
  dark: 'bg-primary-dark text-white',
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
type LinkProps = React.LinkHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  radius?: keyof typeof roundness;
};

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      href,
      target,
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
      <RouterLink
        to={href}
        ref={ref}
        className={clsx(
          variant !== 'none' &&
            'flex items-center justify-center font-semibold border-0 outline-0 transition-all duration-300 whitespace-nowrap py-2',
          variants[variant],
          sizes[size],
          roundness[radius],
          className
        )}
        target={target}
        {...props}
      >
        {children}
      </RouterLink>
    );
  }
);

export default Link;
