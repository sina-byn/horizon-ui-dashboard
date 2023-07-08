import { useState, useEffect } from 'react';

const getIp = () => {
  const [ip, setIp] = useState<string>('');

  useEffect(() => {
    fetch('https://api64.ipify.org?format=json')
      .then(res => res.json())
      .then(({ ip }) => setIp(ip));
  }, []);

  return ip;
};

export default getIp;
