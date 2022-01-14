import { Comment } from '../../types/PropTypes';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="comment">
    <div className="author">{`${comment.name} - ${comment.email}`}</div>
    <div>{comment.body}</div>
  </div>
);
