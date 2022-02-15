import { Comment } from '../../types/Comment';

export const CommentInfo: React.FC<Comment> = ({
  name,
  body,
  email,
}) => (

  <div>
    <h2>{name}</h2>
    <p>{body}</p>
    <p>{email}</p>
  </div>
);
