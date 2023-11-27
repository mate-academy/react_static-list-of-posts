import { Comment } from '../../types/Comment';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (

  <div className="CommentInfo">
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">{comment.name}</strong>

      <span>{' by '}</span>

      <span className="CommentInfo__email">{comment.email}</span>
    </div>

    <div className="CommentInfo__body">{comment.body}</div>
  </div>
);
