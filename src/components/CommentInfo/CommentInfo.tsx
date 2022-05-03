import { Comment } from '../../types/Comment';
import './CommentInfo.scss';

export const CommentInfo:React.FC<Comment> = ({
  name,
  email,
  body,
}) => (
  <div className="box content has-background-warning-light">
    <p>
      <strong>{name}</strong>
      {' '}
      <small>{email}</small>
      <br />
      {body}
    </p>
  </div>
);
