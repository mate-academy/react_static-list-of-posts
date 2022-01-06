import { User } from "../types/Types";

type PropUser = {
  user: User | null;
};

export const UserInfo: React.FC<PropUser> = ({ user }) => {
  return (
    user &&
    <div className="PostList__user-info">
      <h2>{user.name}</h2>
      <span>{user.email}</span>
    </div>
  );
};
