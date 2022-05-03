import './UserInfo.scss';

type Props = {
  name: string;
  email: string;
};

export const UserInfo: React.FC<Props> = ({ name, email }) => (
  <div>
    <p data-cy="name" className="User">{name}</p>
    <p data-cy="email" className="User__email">{email}</p>
  </div>
);
