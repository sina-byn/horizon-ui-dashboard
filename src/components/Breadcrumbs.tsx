import { useLocation } from 'react-router-dom';

// * utils
import { capitalize } from '../helpers/utils';

// * data
const predefinedPaths = [
  ['/', 'Dashboard'],
  ['/marketplace', 'NFT Marketplace'],
];

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const getNames = () => {
    const foundPath = predefinedPaths.filter(
      ([path, _]) => pathname === path
    )[0]?.[1];

    if (foundPath) return 'Pages' + '  /  ' + foundPath;

    return 'Pages' + '  /  ' + capitalize(pathname.slice(1));
  };

  return (
    <div className='breadcrumbs flex text-xs text-primary-lighter dark:text-white'>
      {getNames()}
    </div>
  );
};

export default Breadcrumbs;
