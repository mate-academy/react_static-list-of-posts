import { Comment } from '../../types/Comment';
import { UserInfo } from '../UserInfo/UserInfo';

export const CommentInfo: React.FC<Comment> = ({
  name,
  body,
  email,
}) => (

  <div className="comment">
    <UserInfo name={name} email={email} />
    <div className="comment__body">{body}</div>
  </div>
);
