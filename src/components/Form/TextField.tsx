import { UseFormRegisterReturn } from 'react-hook-form';

// * components
import FieldWrapper from './FieldWrapper';

// * types
import type { FieldWrapperPassThroughProps } from './FieldWrapper';

type TextFieldProps = React.HTMLAttributes<HTMLTextAreaElement> &
  FieldWrapperPassThroughProps & {
    type?: 'text' | 'email' | 'password';
    registeration: Partial<UseFormRegisterReturn>;
  };

const TextField = ({
  type = 'text',
  label,
  error,
  registeration,
  ...props
}: TextFieldProps) => {
  return (
    <FieldWrapper label={label} error={error}>
      <div className='field-container h-32 border border-gray-400/30 rounded-xl px-5 pt-2 pb-2.5'>
        <textarea
          className='w-full h-full bg-transparent dark:text-white outline-0 border-0 resize-none'
          {...props}
          {...registeration}
        />
      </div>
    </FieldWrapper>
  );
};

export default TextField;
