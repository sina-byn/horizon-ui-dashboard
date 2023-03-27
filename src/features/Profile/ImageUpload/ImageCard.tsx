// * components
import Card from '../../../components/Card';
import Typography from '../../../components/Typography';

// * types
type ImageCardProps = {
  image: File;
};

const ImageCard = ({ image }: ImageCardProps) => {
  const imageBlob = URL.createObjectURL(image);

  return (
    <Card
      style={{ padding: '0.6rem 0.8rem' }}
      className='image-card flex items-center gap-x-2 dark:bg-d-light shadow-custom dark:shadow-none'
    >
      <figure className='w-10 h-10'>
        <img
          src={imageBlob}
          alt='uploaded image'
          className='object-contain object-center w-full h-full'
        />
      </figure>
      <Typography
        tag='span'
        className='text-primary block overflow-hidden dark:text-white text-xs font-medium truncate'
      >
        {image.name}
      </Typography>
    </Card>
  );
};

export default ImageCard;
