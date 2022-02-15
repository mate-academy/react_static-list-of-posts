import { Comment } from '../../comment';
import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const { name, email, body } = comment;

  return (
    <div className="comments">
      <div className="comments__list">
        <p>{`Name: ${name}`}</p>
        <p>{`Email: ${email}`}</p>
        <h2>{body}</h2>
      </div>
    </div>
  );
};
