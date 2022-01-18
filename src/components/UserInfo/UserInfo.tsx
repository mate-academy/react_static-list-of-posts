import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user-info">
    <div className="ui black image label">
      <span>{user.name}</span>
      <div className="detail">{user.email}</div>
    </div>
  </div>
);
