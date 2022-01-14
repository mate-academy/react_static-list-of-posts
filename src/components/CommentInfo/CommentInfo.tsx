import { Comment } from '../../types/Comment';

import './CommentInfo.scss';

type Props = {
  comment: Comment | null;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  comment && (
    <>
      <h4 className="comment__name">{comment.name}</h4>
      <p>{comment.body}</p>
      <span className="comment__email">{comment.email}</span>
    </>
  )
);
