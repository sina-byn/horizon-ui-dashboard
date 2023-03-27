// * components
import Card from '../../../components/Card';
import HistoryCard from './HistoryCard';

// * data
const data = [
  {
    id: 1,
    name: 'Colorful Heaven',
    artist: 'Mark Benjamin',
    price: 1.3,
    elapsedTime: 30000,
    image: '/nfts/small/nft-1.png',
  },
  {
    id: 2,
    name: 'Abstract Colors',
    artist: 'Esthera Jackson',
    price: 0.91,
    elapsedTime: 58000,
    image: '/nfts/small/nft-2.png',
  },
  {
    id: 3,
    name: 'ETH AI Brain',
    artist: 'Nick Wilson',
    price: 2.82,
    elapsedTime: 60000,
    image: '/nfts/small/nft-3.png',
  },
  {
    id: 4,
    name: 'Swipe Circles',
    artist: 'Peter Will',
    price: 2.3,
    elapsedTime: 60000,
    image: '/nfts/small/nft-4.png',
  },
  {
    id: 5,
    name: 'Mesh Gradients',
    artist: 'Will Smith',
    price: 0.56,
    elapsedTime: 120000,
    image: '/nfts/small/nft-5.png',
  },
  {
    id: 6,
    name: '3D Cubes Art',
    artist: 'Manny Gates',
    price: 6.58,
    elapsedTime: 360000,
    image: '/nfts/small/nft-6.png',
  },
];

const HistoryTable = () => {
  return (
    <Card style={{ paddingInline: 0 }} className='flex-col'>
      <header className='table-header mb-6'>
        <h6 className='font-bold text-xl text-primary dark:text-white pl-6'>History</h6>
      </header>
      <div className='scroller overflow-x-auto mx-3'>
        <div className='content-wrap min-w-max flex flex-col gap-y-4 overflow-x-auto pb-5'>
          {data.map(item => (
            <HistoryCard
              key={item.id}
              name={item.name}
              artist={item.artist}
              price={item.price}
              elapsedTime={item.elapsedTime}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default HistoryTable;
