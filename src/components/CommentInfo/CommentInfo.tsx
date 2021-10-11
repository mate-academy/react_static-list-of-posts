import { Comment } from '../../types/Comment';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const { name, body, email } = comment;

  return (
    <>
      <h2>CommentInfo:</h2>
      <h2>{name}</h2>
      <p>{body}</p>
      <p>{email}</p>
    </>
  );
};
