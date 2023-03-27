import { useState, useEffect, Dispatch, SetStateAction } from 'react';

// * types
type Viewer = {
  name: {
    first: string;
    last: string;
  };
  login: {
    uuid: string;
  };
  picture: {
    medium: string;
  };
};

const getViewers = (): [Viewer[], Dispatch<SetStateAction<Viewer[]>>] => {
  const [viewers, setViewers] = useState<Viewer[]>([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100')
      .then(res => res.json())
      .then(data => setViewers(data.results));
  }, []);

  return [viewers, setViewers];
};

export default getViewers;
