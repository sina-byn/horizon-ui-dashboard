import { UseFormRegisterReturn } from 'react-hook-form';

// * components
import FieldWrapper from './FieldWrapper';

// * types
import type { FieldWrapperPassThroughProps } from './FieldWrapper';

type InputFieldProps = React.HTMLAttributes<HTMLInputElement> &
  FieldWrapperPassThroughProps & {
    type?: 'text' | 'email' | 'password';
    registeration: Partial<UseFormRegisterReturn>;
  };

const InputField = ({
  type = 'text',
  label,
  error,
  registeration,
  className,
  ...props
}: InputFieldProps) => {
  return (
    <FieldWrapper label={label} error={error} className={className}>
      <input
        type={type}
        className='w-full bg-transparent dark:text-white outline-0 border border-gray-400/30 rounded-xl px-5 pt-2 pb-2.5'
        {...props}
        {...registeration}
      />
    </FieldWrapper>
  );
};

export default InputField;
