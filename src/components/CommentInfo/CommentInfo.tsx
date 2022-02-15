import { Comment } from '../types/Comment';
import './CommentInfo.scss';

export const CommentInfo: React.FC<Comment> = ({ name, body, email }) => (
  <>
    <h3 className="comment__name">{name}</h3>
    <p className="comment__email">{email}</p>
    <p className="comment__body">{body}</p>
  </>
);
