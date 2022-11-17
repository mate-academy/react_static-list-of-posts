import { User } from '../../types/user';
import { Comment } from '../../types/comment';

type Props = {
  user: User | Comment,
  dataType: 'post' | 'comment',
};

export const UserInfo: React.FC<Props> = ({ user, dataType }) => {
  const { email, name } = user;
  const propperText = dataType === 'comment'
    ? email
    : name;

  const propperClass = dataType === 'comment'
    ? 'CommentInfo__email'
    : 'UserInfo';

  return (
    <a className={propperClass} href={`mailto:${email}`}>
      {propperText}
    </a>
  );
};
