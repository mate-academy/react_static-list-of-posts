import { User } from '../../Types/User';

export const UserInfo: React.FC<User> = ({ name, email }) => (
  <>
    <a className="UserInfo" href={email}>
      {name}
    </a>
  </>
);
