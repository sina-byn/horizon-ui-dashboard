import { useState, useEffect, Dispatch, SetStateAction } from 'react';

// * types
type Assignee = {
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

const getAssignees = (): [Assignee[], Dispatch<SetStateAction<Assignee[]>>] => {
  const [assignees, setAssignees] = useState<Assignee[]>([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=20')
      .then(res => res.json())
      .then(data => setAssignees(data.results));
  }, []);

  return [assignees, setAssignees];
};

export default getAssignees;
