// * utils
import { formatNumber } from '../helpers/utils';

// * components
import Spinner from './Spinner';

// * types
type UserChipsProps = {
  users: User[];
};

type User = {
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

const UserChips = ({ users }: UserChipsProps) => {
  return users && users.length > 0 ? (
    <div className='user-chips flex items-center'>
      {users.slice(0, 4).map(user => {
        const { first, last } = user.name;
        const fullName = first + ' ' + last;
        return (
          <img
            key={user.login.uuid}
            src={user.picture.medium}
            alt={fullName}
            className='w-7 h-7 rounded-full border-2 dark:border-transparent border-white -ml-3 first:ml-0'
          />
        );
      })}
      {users.length > 4 && (
        <span className='remained-users grid place-items-center h-7 w-7 bg-light text-primary-light text-[0.6rem] font-semibold border-2 dark:border-transparent border-white rounded-full -ml-3'>
          {formatNumber(users.length - 4)}+
        </span>
      )}
    </div>
  ) : (
    <Spinner />
  );
};

export default UserChips;
