import { User } from '../../types';

type Props = {
  userItem: User | null;
};

export const UserItem: React.FC<Props> = ({ userItem }) => (
  <div className="userInfo">
    {(userItem) && (
      <>
        <p className="todo__userName">
          <strong>
            {'Author: '}
          </strong>
          {userItem.name}
        </p>
        <p className="todo__userEmail">
          <strong>
            {'Email: '}
          </strong>
          {userItem.email}
        </p>
      </>
    )}
  </div>
);
