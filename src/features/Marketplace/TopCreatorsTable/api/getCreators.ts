import { Dispatch, SetStateAction, useEffect, useState } from 'react';

// * types
export type Creator = {
  id: string;
  username: string;
  rating: number;
  artworks: number;
  image: string;
};

type User = {
  login: {
    uuid: string;
    username: string;
  };
  picture: {
    medium: string;
  };
};

const getCreators = (): [Creator[], Dispatch<SetStateAction<Creator[]>>] => {
  const [creators, setCreators] = useState<Creator[]>([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=8')
      .then(res => res.json())
      .then((data: { results: User[] }) =>
        data.results.map(creator => ({
          id: creator.login.uuid,
          username: creator.login.username,
          rating: Math.max(Math.floor(Math.random() * 100 + 1), 30),
          artworks: Math.floor(Math.random() * 1000),
          image: creator.picture.medium,
        }))
      )
      .then(formattedData => setCreators(formattedData));
  }, []);

  return [creators, setCreators];
};

export default getCreators;
