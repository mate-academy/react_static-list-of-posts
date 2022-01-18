import { Comment } from '../types/Comment';
import { CommentInfo } from './CommentInfo';

type Proprs = {
  comments: Comment[],
};

export const CommentList: React.FC<Proprs> = ({ comments }) => (
  <ul>
    {comments.map(comment => (
      <li key={comment.id} className="post__comments">
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
