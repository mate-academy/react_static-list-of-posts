import { User } from '../../types/typesdef';

type Props = {
  author: User
};

export const UserInfo: React.FC<Props> = ({ author }) => (
  <div>
    <span>{`Author: ${author.name}`}</span>
    <span>{`Email: ${author.email}`}</span>
  </div>
);
