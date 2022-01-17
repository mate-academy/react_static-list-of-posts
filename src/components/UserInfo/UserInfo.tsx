type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <span className="user__name">{user.name}</span>
    <span className="user__email">{user.email}</span>
  </>
);
