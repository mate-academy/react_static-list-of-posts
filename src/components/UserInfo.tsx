import { User } from '../types/Post';

type Props = {
  user: User | undefined;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <div>{`Имя: ${user?.name}`}</div>
    <div>{`Почта: ${user?.email}`}</div>
  </>
);
