import { Comment } from '../../types/Comment';
import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const ComentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <h3 className="comment__name">
      {comment.name}
    </h3>

    <p className="comment__body">
      {comment.body}
    </p>

    <p className="comment__email">
      {`Written by: ${comment.email}`}
    </p>
  </>
);
