// * api
import getBidders from './api/getBidders';

// * components
import Typography from '../../../components/Typography';
import Button from '../../../components/Button';
import Card from '../../../components/Card';
import LikeButton from '../../../components/LikeButton';
import UserChips from '../../../components/UserChips';

// * types
type NftCardProps = {
  name: string;
  artist: string;
  image: string;
  currentBid: number;
};

const NftCard = ({ name, artist, image, currentBid }: NftCardProps) => {
  const [bidders] = getBidders();

  return (
    <Card
      style={{ padding: '0.8rem' }}
      className='sm:col-span-6 lg:col-span-4 flex-col'
    >
      <div className='nft-image relative'>
        <figure>
          <img src={image} alt={name} className='w-full' />
        </figure>
        <LikeButton />
      </div>
      <div className='nft-details mt-3'>
        <div className='details-top flex flex-wrap gap-2 justify-between'>
          <div className='name-details flex flex-col'>
            <Typography
              tag='span'
              className='nft-name text-primary dark:text-white font-bold'
            >
              {name}
            </Typography>
            <Typography
              tag='span'
              className='nft-artist text-neutral text-xs capitalize'
            >
              By {artist}
            </Typography>
          </div>
          <UserChips users={bidders} />
        </div>
        <div className='details-bottom flex justify-between items-center gap-4 mt-4'>
          <span className='current-bid text-xs text-primary-light dark:text-white font-bold capitalize'>
            Current Bid: ${currentBid.toFixed(2)} ETH
          </span>
          <Button size='sm' variant='dark' radius='pill'>
            Place Bid
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default NftCard;
