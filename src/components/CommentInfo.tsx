import { Comment } from '../types/Comment';

export const CommentInfo: React.FC<{ comment: Comment; }> = ({ comment }) => (
  <>
    <div className="commentsName">{comment.name}</div>
    <div className="commentsEmail">{comment.email}</div>
    <div className="commentsBody">{comment.body}</div>
  </>
);
