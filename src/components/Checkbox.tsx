import clsx from 'clsx';

// * types
type CheckboxProps = React.HTMLAttributes<HTMLInputElement> & {
  onCheckChange?: (checked: boolean) => void;
};

const Checkbox = ({ className, onCheckChange, ...props }: CheckboxProps) => {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    onCheckChange?.(e.target.checked);

  return (
    <input
      type='checkbox'
      onChange={changeHandler}
      className={clsx('cursor-pointer dark:accent-d-primary-light', className)}
      {...props}
    />
  );
};

export default Checkbox;
