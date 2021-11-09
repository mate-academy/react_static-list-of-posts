import { Post } from '../BasicPost/BasicPost';
import { User } from '../../types/types';

type Props = {
  classes: string;
  body: string;
  user: User;
};

export const UserPost: React.FC<Props> = ({
  classes,
  body,
  user,
}) => {
  return (
    <Post
      classes={classes}
      body={body}
      name={user.name}
      email={user.email}
    />
  );
};
