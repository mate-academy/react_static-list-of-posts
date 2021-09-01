import { User } from '../../types/types';

import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const {
    name,
    email,
  } = user;

  return (
    <div className="user">
      <p className="user__name">
        {`Posted by ${name}`}
      </p>

      <span className="user__email">
        {`email: ${email}`}
      </span>
    </div>
  );
};
