import { useState } from 'react';
import clsx from 'clsx';

// * types
type SwitchProps = {
  checked: boolean;
  onCheckChange: (state: boolean) => void;
};

const Switch = ({ checked, onCheckChange }: SwitchProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);
  const changeHandler = () =>
    setIsChecked(prev => {
      onCheckChange(!prev);
      return !prev;
    });

  return (
    <label className='switch'>
      <div
        className={clsx(
          'slider flex items-center justify-start relative w-10 h-5 overflow-hidden rounded-full cursor-pointer',
          'transition-all duration-300',
          isChecked
            ? 'bg-primary-light dark:bg-d-primary-light'
            : 'bg-neutral/50 dark:bg-d-light'
        )}
      >
        <div
          className={clsx(
            'slider-thumb w-3.5 h-3.5 absolute bg-white rounded-full',
            'transition-all duration-300',
            isChecked ? 'left-[1.45rem]' : 'left-[0.2rem]'
          )}
        />
      </div>
      <input type='checkbox' className='hidden' onChange={changeHandler} />
    </label>
  );
};

export default Switch;
