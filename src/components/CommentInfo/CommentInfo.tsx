import { Comment } from '../../types/Comment';

type CommentProps = {
  comment: Comment;
};

export const CommentInfo = (
  { comment: { name, email, body } }: CommentProps,
) => (
  <div className="CommentInfo">
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">{name}</strong>

      {' by '}

      <a
        className="CommentInfo__email"
        href={`mailto:${email}`}
      >
        {email}
      </a>
    </div>

    <div className="CommentInfo__body">
      {body}
    </div>
  </div>
);
