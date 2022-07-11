import './UserInfo.scss';

type Props = {
  name: string,
  email: string,
};

export const UserInfo: React.FC<Props> = ({ name, email }) => (
  <div className="userInfo">
    <strong data-cy="user-name">{name}</strong>
    <p data-cy="user-email">{email}</p>
  </div>
);
