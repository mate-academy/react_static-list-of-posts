import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <span className="user__name">{user.name}</span>
    <br />
    <span className="user__email">{user.email}</span>
  </>
);
