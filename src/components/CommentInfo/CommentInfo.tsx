import { Comment } from '../../types';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const { name, body, email } = comment;

  return (
    <div className="Comment">
      <h2>{name}</h2>
      <p>{body}</p>
      <p>{email}</p>
    </div>
  );
};
