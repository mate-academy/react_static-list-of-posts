import { Comment } from '../../Types/Comments';

export const CommentInfo: React.FC<Comment> = ({ name, email, body }) => (
  <>
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">
        {name}
      </strong>

      {' by '}

      <a
        className="CommentInfo__email"
        href={email}
      >
        {email}
      </a>
    </div>

    <div className="CommentInfo__body">
      {body}
    </div>
  </>
);
