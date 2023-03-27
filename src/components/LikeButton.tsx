import { useState } from 'react';
import clsx from 'clsx';

// * components
import Button from './Button';

// * types
type LikeButtonProps = {
  onLike?: (currentState: boolean) => void;
};

const LikeButton = ({ onLike }: LikeButtonProps) => {
  const [liked, setLiked] = useState<boolean>(false);
  const likeHandler = () => {
    setLiked(prev => {
      onLike?.(!prev);
      return !prev;
    });
  };

  return (
    <Button
      variant='light'
      radius='pill'
      onClick={likeHandler}
      className='w-8 h-8 absolute top-2 right-2'
    >
      <i
        className={clsx(
          'fa-heart text-primary pt-0.5',
          liked ? 'fa-solid' : 'fa-regular'
        )}
      />
    </Button>
  );
};

export default LikeButton;
