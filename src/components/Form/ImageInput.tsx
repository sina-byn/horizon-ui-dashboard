import { useState } from 'react';
import {
  Path,
  FieldValues,
  UseFormRegister,
  UseFormResetField,
} from 'react-hook-form';

// * types
type ImageInputProps<TFieldValues extends FieldValues> =
  React.InputHTMLAttributes<HTMLInputElement> & {
    field: string;
    registeration: UseFormRegister<TFieldValues>;
    resetField: UseFormResetField<TFieldValues>;
    onChange?: Function;
  };

const ImageInput = <TFormFields extends FieldValues>({
  field,
  registeration,
  resetField,
  ...props
}: ImageInputProps<TFormFields>) => {
  const [fileName, setFileName] = useState<string>('');

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files: fileList } = e.target;

    if (!fileList?.length) return setFileName('');
    if (fileList.length === 1) return setFileName(fileList[0].name);
    setFileName('multiple files were selected');
  };
  const resetHandler = () => {
    setFileName('');
    resetField(field as Path<TFormFields>);
  };

  return (
    <div className='image-input grid grid-rows-1 grid-cols-2 items-center dark:text-white text-sm'>
      <label className='input-label cursor-pointer'>
        <span className='font-semibold'>
          <i className='fa-solid fa-image fa-xl mr-2' />
          Browse Images
        </span>
        <input
          type='file'
          className='hidden'
          accept='image/gif,image/jpeg,image/jfif,image/jpg,image/png'
          {...registeration(field as Path<TFormFields>, {
            onChange: changeHandler,
          })}
          {...props}
        />
        <span className='image-name block text-neutral text-xs truncate mt-1'>
          {fileName}
        </span>
      </label>
      <i
        onClick={resetHandler}
        className='fa-solid fa-trash self-start justify-self-end mt-1 cursor-pointer'
      />
    </div>
  );
};

export default ImageInput;
