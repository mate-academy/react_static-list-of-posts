import { User } from '../../types/User';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = (props) => {
  const { user: { name, email } } = props;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
