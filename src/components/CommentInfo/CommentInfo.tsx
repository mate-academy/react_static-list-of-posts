import { Comment } from '../../types/Comment';
import './CommentInfo.scss';

export const CommentInfo: React.FC<Comment> = ({ name, body, email }) => (
  <div>
    <h3 className="commentInfo__name">{name}</h3>
    <p className="commentInfo__email">{email}</p>
    <p className="commentInfo__body">{body}</p>
  </div>
);
