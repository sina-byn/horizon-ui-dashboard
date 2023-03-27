// * layouts
import MainLayout from '../layouts/MainLayout';

// * components
import MarketplaceBanner from '../features/Marketplace/MarketplaceBanner';
import TrendingNfts from '../features/Marketplace/TrendingNfts';
import RecentlyAddedNfts from '../features/Marketplace/RecentlyAddedNfts';
import TopCreatorsTable from '../features/Marketplace/TopCreatorsTable';
import HistoryTable from '../features/Marketplace/HistoryTable';

const Marketplace = () => {
  return (
    <MainLayout title='NFT Marketplace'>
      <div className='content-column col-span-12 xl:col-span-8 flex flex-col gap-y-7 md:gap-y-10'>
        <MarketplaceBanner />
        <TrendingNfts />
        <RecentlyAddedNfts />
      </div>
      <div className='content-column col-span-12 xl:col-span-4 flex flex-col gap-y-4'>
        <TopCreatorsTable />
        <HistoryTable />
      </div>
    </MainLayout>
  );
};

export default Marketplace;
