import { User } from '../../types/types';

import './UserInfo.scss';

type Props = {
  person: User;
};

export const UserInfo: React.FC<Props> = ({ person }) => (
  <>
    <p className="userName">
      {'Author: '}
      {person.name}
    </p>
    <p className="userEmail">
      {'E-Mail: '}
      <a href="...">{person.email}</a>
    </p>
  </>
);
