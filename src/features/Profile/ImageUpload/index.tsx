import { useState } from 'react';
import { z } from 'zod';

// * components
import Card from '../../../components/Card';
import Form from '../../../components/Form';
import Button from '../../../components/Button';
import Dropzone from '../../../components/Dropzone';
import Typography from '../../../components/Typography';
import ImageCard from './ImageCard';

// * schemas
const schema = z.object({
  images: z.instanceof(File).array(),
});

// * types
type UploadedFiles = {
  images: File[];
};

const ImageUpload = () => {
  const [images, setImages] = useState<File[]>([]);
  const submitHandler = (data: UploadedFiles) => {
    console.log(data);
  };

  return (
    <Card className='lg:col-span-6 xl:col-span-5 h-[400px] xl:h-[300px]'>
      <Form<UploadedFiles, typeof schema>
        schema={schema}
        onSubmit={submitHandler}
        className='flex-col-reverse xl:flex-row gap-6'
      >
        {({ setValue }) => {
          return (
            <>
              <section className='files-section xl:w-1/2 overflow-y-auto pr-2'>
                <Dropzone<UploadedFiles>
                  files={images}
                  setFiles={setImages}
                  formField='images'
                  setFormValue={setValue}
                />
                <div className='uploaded-files mt-2 space-y-3'>
                  <h6 className='text-sm text-primary dark:text-white font-bold -mb-2'>
                    Files <i className='fa-solid fa-arrow-down fa-sm' />
                  </h6>
                  <div className='files-list grid grid-cols-1 gap-y-3 pb-3'>
                    {images.length > 0 &&
                      images.map((image, idx) => (
                        <ImageCard key={idx} image={image} />
                      ))}
                  </div>
                </div>
              </section>
              <section className='publish-section flex flex-col justify-around gap-y-4 xl:w-1/2'>
                <div className='description'>
                  <Typography
                    tag='h6'
                    className='title text-xl text-primary dark:text-white font-bold mb-2'
                  >
                    Complete your profile
                  </Typography>
                  <Typography className='text-sm text-neutral'>
                    Stay on the pulse of distributed projects with an anline
                    whiteboard to plan, coordinate and discuss
                  </Typography>
                </div>
                <Button type='submit' size='sm' className='w-fit'>
                  Publish now
                </Button>
              </section>
            </>
          );
        }}
      </Form>
    </Card>
  );
};

export default ImageUpload;
