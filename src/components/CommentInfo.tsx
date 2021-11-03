import { Comment } from '../types/Comment';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const { email, body, name } = comment;

  return (
    <>
      <div className="comment-div">
        <strong>{`${name} by ${email}: `}</strong>
        <br />
        <div className="comment-div__body">{body}</div>
      </div>
    </>
  );
};
