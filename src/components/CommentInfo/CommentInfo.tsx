import { Post } from '../BasicPost/BasicPost';

type Props = {
  classes: string;
  body: string;
  comments: {
    name: string;
    email: string;
  }
};

export const CommentInfo: React.FC<Props> = ({
  classes,
  body,
  comments: { name, email },
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
