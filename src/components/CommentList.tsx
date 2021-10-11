import { Comment } from '../types/Comment';
import { CommentInfo } from './CommentInfo';

export const CommentList: React.FC<{ comments: Comment[]; }> = ({ comments }) => (
  <>
    <ul className="comment">
      Comments:
      {comments.map(comment => (
        <li className="comment__item">
          <CommentInfo comment={comment} />
        </li>
      ))}
    </ul>
  </>
);
