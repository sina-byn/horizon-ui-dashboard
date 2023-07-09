// * api
import getIp from './api/getIp';

const IpIndicator = () => {
  const ip = getIp();

  return (
    <div className='ip-indicator order-first sm:order-none space-x-2 mt-1 sm:mt-0 py-2 sm:py-0'>
      <i className='fa-solid fa-location-dot' />
      <span className='ip-address'>{ip ? ip : 'N/A'}</span>
    </div>
  );
};

export default IpIndicator;
