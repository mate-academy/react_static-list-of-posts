import { Comment } from '../../app.typedef';
import './CommentInfo.scss';

interface Props {
  comment: Comment;
}

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="comment">
    <div className="comment__content">
      <h5 data-cy="comment-name" className="comment__name">
        {comment.name}
      </h5>
      <p data-cy="comment-body" className="comment__body">
        {comment.body}
      </p>
      <a
        href="email"
        data-cy="comment-email"
        className="comment__email"
      >
        {comment.email}
      </a>
    </div>
  </div>
);
