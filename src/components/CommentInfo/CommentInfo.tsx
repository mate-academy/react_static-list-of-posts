import { Comment } from '../../Types/Comment';

export const CommentInfo = ({
  id,
  name,
  email,
  body,
}: Comment) => (
  <div className="CommentInfo" key={id}>
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
