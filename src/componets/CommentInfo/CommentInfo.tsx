import { Comment } from '../../types/typesdef';
import './CommentInfo.scss';

type Props = {
  comment: Comment
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const {
    name,
    body,
    email,
  } = comment;

  return (
    <div className="comment">
      <h4>{name}</h4>
      <p>{body}</p>
      <div className="comment__user-email">{`Email: ${email}`}</div>
    </div>
  );
};
