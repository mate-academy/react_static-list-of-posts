import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user-info">
    <div className="ui black image label">
      {user.name}
      <div className="detail">{user.email}</div>
    </div>
  </div>
);
