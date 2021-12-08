import { Comment } from '../../types/Comment';

import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="comment__info">
    <div>{comment.name}</div>
    <div>{comment.body}</div>
    <div>{comment.email}</div>
  </div>
);
