import { useState, useRef } from 'react';
import { FieldValues, Path, PathValue, UseFormSetValue } from 'react-hook-form';
import clsx from 'clsx';

// * hooks
import useClickOutside from '../hooks/useClickOutside';

// * components
import Button from './Button';

// * types
type DropdownProps<TFormFields extends FieldValues> = {
  label?: string;
  field: keyof TFormFields;
  title?: string;
  items: string[];
  setValue: UseFormSetValue<TFormFields>;
  className?: string;
};

const Dropdown = <TFormFields extends FieldValues>({
  label,
  field,
  title,
  items,
  setValue,
  className,
}: DropdownProps<TFormFields>) => {
  const [selectedValue, setSelectedValue] = useState<string>(title || items[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  useClickOutside<HTMLButtonElement>(buttonRef, () => setIsOpen(false));

  const openToggler = () => setIsOpen(prev => !prev);
  const selectHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const clickedItem = e.target as HTMLElement;
    const { value } = clickedItem.dataset;
    openToggler();
    setSelectedValue(value!);
    setValue(
      field as Path<TFormFields>,
      value as PathValue<TFormFields, Path<TFormFields>>
    );
  };

  return (
    <div className={clsx('dropdown relative', className)}>
      <label className='dropdown-label capitalize text-sm dark:text-white font-semibold'>
        {label}
      </label>
      <Button
        ref={buttonRef}
        variant='secondary'
        onClick={openToggler}
        className='dropdown-button justify-between w-full overflow-hidden mt-0.5 shadow-md'
      >
        <span className='dropdown-value pb-1'>
          {selectedValue || title || items[0]}
        </span>
        <i
          className={clsx(
            'fa-solid fa-xs ml-2 mt-0.5',
            isOpen ? 'fa-chevron-up' : 'fa-chevron-down'
          )}
        />
      </Button>
      {isOpen && (
        <div className='dropdown-items flex flex-col w-full absolute top-[120%] left-0 z-50 rounded-lg overflow-hidden animate-move-in'>
          {items.map((item, idx) => (
            <Button
              key={idx}
              data-value={item}
              onClick={selectHandler}
              variant='secondary'
              radius='none'
              className='border-b last:border-b-0'
            >
              {item}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
