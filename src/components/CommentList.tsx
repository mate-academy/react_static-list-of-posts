import { Comment } from '../types/types';
import { CommentInfo } from './CommentInfo';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="list-group list-group-flush">
    <strong>Comments:</strong>
    {comments.map(comment => (
      <li key={comment.id} className="list-group-item">
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
