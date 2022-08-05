import { Comment } from '../../types/Comment';

interface Props {
  comments: Comment;
}

export const CommentInfo: React.FC<Props> = ({ comments }) => (
  <div className="CommentInfo">
    <div className="CommentInfo__title">
      <h3 className="CommentInfo__name">{comments.name}</h3>

      {' by '}

      <a
        className="CommentInfo__email"
        href={`mailto:${comments.email}`}
      >
        {comments.email}
      </a>
    </div>

    <div className="CommentInfo__body">
      {comments.body}
    </div>
  </div>
);
