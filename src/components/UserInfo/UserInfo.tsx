import { User } from '../../types/User';

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = (props) => {
  const {
    user,
  } = props;

  return (
    <p className="user-info">
      <span className="user-info__title" data-cy="name">
        <strong>Name:</strong>
        {' '}
        {user?.name}
      </span>
      <a
        className="user-info__link"
        href={`mailto:${user?.email}`}
        data-cy="email"
      >
        {' '}
        Email
      </a>
    </p>
  );
};
