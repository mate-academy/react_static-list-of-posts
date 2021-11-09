import { Post } from '../BasicPost/BasicPost';

type Props = {
  classes: string;
  body: string;
  name: string;
  email: string;
};

export const CommentInfo: React.FC<Props> = ({
  classes,
  body,
  name,
  email,
}) => {
  return (
    <Post
      classes={classes}
      body={body}
      name={name}
      email={email}
    />
  );
};
