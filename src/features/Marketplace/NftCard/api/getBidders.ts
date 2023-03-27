import { Dispatch, SetStateAction, useEffect, useState } from 'react';

// * types
type Bidder = {
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

type GetBiddersReturn = [Bidder[], Dispatch<SetStateAction<Bidder[]>>];

const getBidders = (): GetBiddersReturn => {
  const [bidders, setBidders] = useState<Bidder[]>([]);
  const biddersCount = Math.floor(Math.random() * 31) + 10;

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=${biddersCount}`)
      .then(res => res.json())
      .then(data => setBidders(data.results));
  }, []);

  return [bidders, setBidders];
};

export default getBidders;
