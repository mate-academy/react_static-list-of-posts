import { User } from '../types/Post';

interface Props {
  user: User;
}

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <div>{`Имя: ${user.name}`}</div>
    <div>{`Почта: ${user.email}`}</div>
  </>
);
