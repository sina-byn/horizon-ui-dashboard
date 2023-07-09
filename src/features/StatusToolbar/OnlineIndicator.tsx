import { useState, useEffect } from 'react';
import clsx from 'clsx';

const OnlineIndicator = () => {
  const [isOnline, setIsOnline] = useState<boolean>(true);

  useEffect(() => {
    const isOnlineToggler = (e: Event) => setIsOnline(e.type === 'online' ? true : false);
    window.addEventListener('online', isOnlineToggler);
    window.addEventListener('offline', isOnlineToggler);

    return () => {
      window.removeEventListener('online', isOnlineToggler);
      window.removeEventListener('offline', isOnlineToggler);
    };
  }, []);

  return (
    <div className='indicator-container flex items-center gap-x-2'>
      <div
        className={clsx(
          'online-indicator w-3.5 h-3.5 rounded-full mt-0.5',
          isOnline ? 'bg-green-600' : 'bg-red-500'
        )}
      />
      <span>{isOnline ? 'online' : 'offline'}</span>
    </div>
  );
};

export default OnlineIndicator;
