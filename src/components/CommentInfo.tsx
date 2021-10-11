import { Comment } from '../types/Comment';

export const CommentInfo: React.FC<{ comment: Comment; }> = ({ comment }) => (
  <>
    <p className="comment__name">
      {'Name: '}
      {comment.name}
    </p>
    <p className="comment__body">
      {comment.body}
    </p>
    <p className="comment__email">
      {comment.email}
    </p>
  </>
);
