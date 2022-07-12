import { Comment } from '../../types/Comment';
import './CommentInfo.scss';

type Props = {
  comment: Comment,
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="comment">
    <div className="comment__container">
      <h5 className="comment__name">{comment.name}</h5>
      <p className="comment__email">{comment.email}</p>
    </div>
    <p className="comment__body">{comment.body}</p>
  </div>
);
