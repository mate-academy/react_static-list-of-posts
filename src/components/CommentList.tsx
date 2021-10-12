import { CommentInfo } from './CommentInfo';
import { Comment } from '../types/Comment';

export const CommentList: React.FC<{ comments: Comment[] }> = ({ comments }) => (
  <>
    <ul className="comments">
      {comments.map(comment => (
        <li key={comment.id} className="commentsItem">
          <CommentInfo comment={comment} />
        </li>
      ))}
    </ul>
  </>
);
