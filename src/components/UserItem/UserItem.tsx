import { User } from '../../types';
import './UserItem.scss';

type Props = {
  userItem: User | null;
};

export const UserItem: React.FC<Props> = ({ userItem }) => (
  <div className="userInfo">
    {(userItem) && (
      <>
        <p className="userInfo__name">
          {'Author: '}
          {userItem.name}
        </p>
        <p className="userInfo__email">
          {'Email: '}
          {userItem.email}
        </p>
      </>
    )}
  </div>
);
