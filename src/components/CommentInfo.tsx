import { Comment } from '../types/Comment';

type Props = {
  comment: Comment,
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <h5 className="comment__name">
      {comment.name}
    </h5>
    <p className="comment__body">
      {comment.body}
    </p>
    <span className="comment__email">
      {comment.email}
    </span>
  </>
);
