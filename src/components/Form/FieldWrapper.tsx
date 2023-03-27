import { FieldError } from 'react-hook-form';
import clsx from 'clsx';

// * type
type FieldWrapperProps = {
  label?: string;
  error?: FieldError;
  className?: string;
  children: React.ReactNode;
};

export type FieldWrapperPassThroughProps = Omit<FieldWrapperProps, 'children'>;

const FieldWrapper = ({
  label,
  error,
  className,
  children,
}: FieldWrapperProps) => {
  return (
    <div className={clsx('field-wrapper text-sm font-semibold', className)}>
      <label className='input-label'>
        <span className='label-text block capitalize dark:text-white'>{label}</span>
        <div className='label-content font-normal mt-1'>{children}</div>
      </label>
      {error?.message && (
        <div
          role='alert'
          aria-label={error.message}
          className='text-xs text-red-500'
        >
          {error.message}
        </div>
      )}
    </div>
  );
};

export default FieldWrapper;
