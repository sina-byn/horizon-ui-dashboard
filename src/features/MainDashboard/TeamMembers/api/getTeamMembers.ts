import { Dispatch, SetStateAction, useEffect, useState } from 'react';

// * types
type TeamMember = {
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

const getTeamMembers = (): [
  TeamMember[],
  Dispatch<SetStateAction<TeamMember[]>>
] => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then(res => res.json())
      .then(data => setTeamMembers(data.results));
  }, []);

  return [teamMembers, setTeamMembers];
};

export default getTeamMembers;
