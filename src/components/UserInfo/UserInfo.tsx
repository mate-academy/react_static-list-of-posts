import { IUser } from '../../types/Types';
import './UserInfo.scss';

type Props = {
  user: IUser;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <div className="user">

      <p className="user__name">
        {user.name}
      </p>

      <p className="user__email">
        {user.email}
      </p>

    </div>
  );
};

export default UserInfo;
