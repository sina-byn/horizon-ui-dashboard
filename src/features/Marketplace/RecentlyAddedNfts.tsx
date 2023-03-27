// * components
import NftCard from './NftCard';

// * data
const data = [
  {
    id: 1,
    name: 'Swipe Circles',
    artist: 'Peter Will',
    currnetBid: 2.3,
    image: '/nfts/big/nft-4.png',
  },
  {
    id: 2,
    name: 'Mesh Gradients',
    artist: 'Will Smith',
    currnetBid: 0.56,
    image: '/nfts/big/nft-5.png',
  },
  {
    id: 3,
    name: '3D Cubes Art',
    artist: 'Manny Gates',
    currnetBid: 6.58,
    image: '/nfts/big/nft-6.png',
  },
];

const RecentlyAddedNfts = () => {
  return (
    <section className='trending-nfts-section'>
      <header>
        <h2 className='text-primary dark:text-white text-xl font-bold capitalize'>
          Recently Added
        </h2>
      </header>
      <section className='nfts grid grid-cols-12 gap-3 mt-2 md:mt-5'>
        {data.map(nft => (
          <NftCard
            key={nft.id}
            name={nft.name}
            artist={nft.artist}
            currentBid={nft.currnetBid}
            image={nft.image}
          />
        ))}
      </section>
    </section>
  );
};

export default RecentlyAddedNfts;
