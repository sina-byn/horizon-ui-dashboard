// * layouts
import MainLayout from '../layouts/MainLayout';

// * components
import MarketplaceBanner from '../features/Marketplace/MarketplaceBanner';

const Marketplace = () => {
  return (
    <MainLayout title='NFT Marketplace'>
      <div className='content-column col-span-12 xl:col-span-8 flex flex-col gap-y-7 md:gap-y-10'>
        <MarketplaceBanner />
      </div>
      <div className='content-column col-span-12 xl:col-span-4 flex flex-col gap-y-4'>
        {/* second column */}
      </div>
    </MainLayout>
  );
};

export default Marketplace;
