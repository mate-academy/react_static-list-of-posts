import { Comment } from '../types/Comment';
import { CommentInfo } from './CommentInfo';

type Proprs = {
  id: number,
  comments: Comment[],
};

export const CommentList: React.FC<Proprs> = ({ id, comments }) => (
  <ul>
    {comments.map(comment => (
      (id === comment.postId)
        ? (
          <li key={comment.id} className="comments">
            <CommentInfo comment={comment} />
          </li>
        )
        : null
    ))}
  </ul>
);
