import clsx from 'clsx';

// * utils
import { getTagClassName } from '../helpers/utils';

// * components
import Typography from './Typography';

// * types
type TagProps = {
  status: Status;
  variant?: Variant;
  hasIcon?: boolean;
  className?: string;
};

type Variant = 'normal' | 'inverted' | 'icon-only';

export type Status =
  | 'approved'
  | 'done'
  | 'disabled'
  | 'error'
  | 'pending'
  | 'updating';

const Tag = ({
  status,
  variant = 'normal',
  hasIcon = true,
  className,
}: TagProps) => {
  const [icon, normalClassName, invertedClassName] = getTagClassName(status);

  return (
    <div
      className={clsx(
        'status-tag flex items-center gap-x-1',
        variant == 'normal' && normalClassName,
        variant === 'inverted' && invertedClassName,
        variant === 'icon-only' && 'text-primary',
        className
      )}
    >
      {hasIcon && (
        <i
          className={clsx(
            'fa-solid fa-lg mt-1.5',
            variant === 'icon-only' && invertedClassName,
            icon
          )}
        />
      )}
      <Typography tag='span' className='tag-title dark:text-white capitalize'>
        {status}
      </Typography>
    </div>
  );
};

export default Tag;
