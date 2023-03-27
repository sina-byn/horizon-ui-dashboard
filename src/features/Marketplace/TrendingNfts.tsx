// * components
import NftCard from './NftCard';

// * data
const data = [
  {
    id: 1,
    name: 'Colorful Heaven',
    artist: 'Mark Benjamin',
    currnetBid: 1.3,
    image: '/nfts/big/nft-1.png',
  },
  {
    id: 2,
    name: 'Abstract Colors',
    artist: 'Esthera Jackson',
    currnetBid: 0.91,
    image: '/nfts/big/nft-2.png',
  },
  {
    id: 3,
    name: 'ETH AI Brain',
    artist: 'Nick Wilson',
    currnetBid: 2.82,
    image: '/nfts/big/nft-3.png',
  },
];

const TrendingNfts = () => {
  return (
    <section className='trending-nfts-section'>
      <header>
        <h2 className='text-primary dark:text-white text-xl font-bold capitalize'>
          Trending NFTs
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

export default TrendingNfts;
