import { User } from '../../Types/User';

export const UserInfo = (usersArray: User[]) => (
  usersArray.map(user => (
    <a className="UserInfo" href={`mailto:${user.email}`} key={user.id}>
      {user.name}
    </a>
  ))
);
