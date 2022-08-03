import { User } from '../../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({
  user: {
    email,
    name,
    id,
  },
}) => (
  <a
    className="UserInfo"
    href={`mailto:${email}`}
    data-id={id}
  >
    {name}
  </a>
);
