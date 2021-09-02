import { User } from '../../types/User';
import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = (props) => {
  const { name, email } = props.user;

  return (
    <div className="user-info">
      <span className="user-info__picture" />
      <div className="user-info__wrapper">
        <p className="user-info__title">
          {name}
        </p>
        <p>
          {email}
        </p>
      </div>
    </div>
  );
};
