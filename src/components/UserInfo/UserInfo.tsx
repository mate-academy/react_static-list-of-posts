import { User } from '../../types/PropTypes';

type Props = {
  userItem: User;
};

export const UserInfo: React.FC<Props> = ({ userItem }) => (
  <div className="author">{`${userItem.name} - ${userItem.email}`}</div>
);
