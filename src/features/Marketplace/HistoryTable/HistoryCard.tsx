// * utils
import { formatElapsedTime } from '../../../helpers/utils';

// * components
import Card from '../../../components/Card';
import Typography from '../../../components/Typography';

// * types
type HistoryCardProps = {
  name: string;
  artist: string;
  price: number;
  elapsedTime: number;
  image: string;
};

const HistoryCard = ({
  name,
  artist,
  price,
  elapsedTime,
  image,
}: HistoryCardProps) => {
  return (
    <Card
      style={{ paddingBlock: '0.2rem' }}
      className='justify-between items-center gap-x-2 transition-all dark:hover:bg-d-light hover:shadow-custom dark:shadow-none hover:!py-4'
    >
      <div className='nft-details flex items-center gap-x-4 capitalize'>
        <img src={image} />
        <div className='flex flex-col'>
          <Typography
            tag='span'
            className='nft-name text-primary dark:text-white font-bold'
          >
            {name}
          </Typography>
          <Typography
            tag='span'
            className='nft-artist text-neutral text-xs font-normal'
          >
            By {artist}
          </Typography>
        </div>
      </div>
      <div className='nft-price flex items-center gap-x-1 dark:text-white px-3 capitalize'>
        <svg
          width='9'
          height='15'
          viewBox='0 0 9 15'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            className='fill-primary dark:fill-white'
            d='M4.46604 11.2312L0 8.5125L4.46543 15L8.93511 8.5125L4.46422 11.2312H4.46604ZM4.53396 0L0.0667117 7.63937L4.53336 10.3606L9 7.64188L4.53396 0Z'
          />
        </svg>
        <span className='nft-price font-bold'>{price.toFixed(2)} ETH</span>
      </div>
      <span className='elapsed-time text-sm text-neutral dark:text-white'>
        {formatElapsedTime(elapsedTime)} ago
      </span>
    </Card>
  );
};

export default HistoryCard;
