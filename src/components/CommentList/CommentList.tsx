import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './Comments.scss';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="comments">
    {comments.map(comment => (
      <li key={comment.id} className="comments__comment">
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
