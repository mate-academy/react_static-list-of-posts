import { Comment } from '../types/Comment';
import './CommentInfo.scss';

type Props = {
  comment: Comment,
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <div className="commentsName">{comment.name}</div>
    <div className="commentsEmail">{comment.email}</div>
    <div className="commentsBody">{comment.body}</div>
  </>
);
