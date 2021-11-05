import { Post } from '../Post/Post';
import { User } from '../../types/types';

type Props = {
  classes: string;
  body: string;
  user: User | null;
};

export const UserPost: React.FC<Props> = ({
  classes,
  body,
  user,
}) => {
  return user ? (
    <Post
      classes={classes}
      body={body}
      name={user.name}
      email={user.email}
    />
  ) : (<h2>User not found</h2>);
};
