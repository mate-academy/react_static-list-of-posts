import { User } from '../types/types';

type Props = {
  user: User | null,
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    user && (
      <div className="card-pad">
        <p className="card-text text-end"><i>{user.name}</i></p>
        <p className="card-text text-end"><i>{user.email}</i></p>
      </div>
    )
  );
};
