import './UserInfo.scss';
import { User } from '../../types/types';

type Props = {
  userInfo: User | null
};

const UserInfo: React.FC<Props> = ({ userInfo }) => {
  return (
    <div className="user-info">
      <p className="user-info__name">
        {userInfo?.name}
      </p>
      <p className="user-info__email">
        {userInfo?.email}
      </p>
    </div>
  );
};

export default UserInfo;
