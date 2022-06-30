import { User } from '../../types/typesdef';

import './UserInfo.scss';

interface Props {
  author: User
}

export const UserInfo: React.FC<Props> = ({ author }) => (
  <div className="UserInfo">
    <div>{`Author: ${author.name}`}</div>
    <div>{`Email: ${author.email}`}</div>
  </div>
);
