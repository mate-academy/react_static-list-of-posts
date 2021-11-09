import { Comment } from '../types/Post';
import { CommentInfo } from './CommentInfo';

interface Props {
  comments: Comment[],
}

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="post__comments">
    {comments.map(comment => (
      <li key={comment.id} className="post__comment">
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
