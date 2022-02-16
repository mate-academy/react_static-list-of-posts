import { Comment } from '../../types/Comment';
import './CommentInfo.scss';

export const CommentInfo: React.FC<Comment> = ({ name, body, email }) => (
  <>
    <h2 className="comment-item__name">{name}</h2>
    <p className="comment-item__email">{email}</p>
    <p className="comment-item__body">{body}</p>
  </>
);
