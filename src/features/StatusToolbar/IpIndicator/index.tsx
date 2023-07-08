// * api
import getIp from './api/getIp';

const IpIndicator = () => {
  const ip = getIp();

  return (
    <div className='ip-indicator space-x-2'>
      <i className='fa-solid fa-location-dot' />
      <span className='ip-address'>{ip ? ip : 'N/A'}</span>
    </div>
  );
};

export default IpIndicator;
