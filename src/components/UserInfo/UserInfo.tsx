import { User } from '../../user';
import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <h1 className="name">{`Name: ${user.name}`}</h1>
    <h2>{`Email: ${user.email}`}</h2>
  </>
);
