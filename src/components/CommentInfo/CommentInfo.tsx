import { Comment } from '../../types/Comment';
import './CommentInfo.scss';

type Props = {
  comments: Comment[]
};

export const CommentInfo: React.FC<Props> = ({ comments }) => (
  <ul className="comments">
    {comments.map(comment => (
      <li className="comments__info" key="comment.id">
        <h3 className="comments__name">{comment.name}</h3>
        <p className="comments__body">{comment.body}</p>
        <p className="comments__email">{comment.email}</p>
      </li>
    ))}
  </ul>
);
