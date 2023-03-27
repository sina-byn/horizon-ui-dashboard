import { useRef, useEffect, Dispatch, SetStateAction } from 'react';
import { FieldValues, Path, PathValue, UseFormSetValue } from 'react-hook-form';
import clsx from 'clsx';

// * components
import Button from './Button';

// * types
type DropzoneProps<TFormFields extends FieldValues> = {
  files: File[];
  setFiles: Dispatch<SetStateAction<File[]>>;
  formField: string;
  setFormValue: UseFormSetValue<TFormFields>;
};

const Dropzone = <TFormFields extends FieldValues>({
  files,
  setFiles,
  formField,
  setFormValue,
}: DropzoneProps<TFormFields>) => {
  const dropzoneRef = useRef<HTMLDivElement>(null);

  const toggleAreaCover = (e: DragEvent) => {
    const { type } = e;
    const dropzone = dropzoneRef.current!;
    dropzone.classList.toggle('bg-black/40', type === 'dragover');
  };
  const dragOverHandler = (e: DragEvent) => {
    e.preventDefault();
    toggleAreaCover(e);
  };
  const dropHandler = (e: DragEvent) => {
    e.preventDefault();
    const imageRexExp = /^image\/(jpeg|jpg|jfif|png|gif)$/;
    const files = Array.from(e.dataTransfer!.files);
    setFiles(prev => [
      ...prev,
      ...files.filter(file => imageRexExp.test(file.type)),
    ]);
    toggleAreaCover(e);
  };
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files!);
    setFiles(prev => [...prev, ...files]);
  };

  useEffect(() => {
    setFormValue(
      formField as Path<TFormFields>,
      files as PathValue<TFormFields, Path<TFormFields>>
    );
  }, [files]);

  useEffect(() => {
    if (!dropzoneRef.current) return;
    const dropzone = dropzoneRef.current;

    dropzone.addEventListener('dragover', dragOverHandler);
    dropzone.addEventListener('dragleave', toggleAreaCover);
    dropzone.addEventListener('dragend', toggleAreaCover);
    dropzone.addEventListener('drop', dropHandler);

    return () => {
      dropzone.removeEventListener('dragover', dragOverHandler);
      dropzone.removeEventListener('dragleave', toggleAreaCover);
      dropzone.removeEventListener('dragend', toggleAreaCover);
      dropzone.removeEventListener('drop', dropHandler);
    };
  }, [dropzoneRef.current]);

  return (
    <>
      <div
        className={clsx(
          'dropzone-container flex flex-col items-center justify-center',
          'relative h-[170px] sm:h-[150px] xl:h-[200px] bg-light/75 dark:bg-d-light',
          'border-2 dark:border-neutral/50 border-dashed rounded-xl overflow-hidden'
        )}
      >
        <div ref={dropzoneRef} className='dropzone absolute inset-0' />
        <i className='fa-solid fa-upload text-5xl text-primary-light dark:text-white mb-5' />
        <h6 className='text-lg text-primary-light dark:text-white font-bold mb-2'>
          Upload Files
        </h6>
        <span className='text-neutral text-xs text-center font-medium px-2'>
          PNG, JPG and GIF files are allowed
        </span>
      </div>
      <Button style={{ padding: 0 }} className='w-full overflow-hidden mt-2'>
        <label className='w-full h-full py-2'>
          Browse Files
          <input
            type='file'
            className='hidden'
            multiple
            onChange={changeHandler}
            accept='image/jpeg,image/gif,image/png,image/jpg,image/jfif'
          />
        </label>
      </Button>
    </>
  );
};

export default Dropzone;
