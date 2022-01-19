import { Comment } from '../../types/Types';
import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <h3 className="comment__name">{comment.name}</h3>
    <p className="comment__text">{comment.body}</p>
    <div className="comment__email">{comment.email}</div>
  </>
);
