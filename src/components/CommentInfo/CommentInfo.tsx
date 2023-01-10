import { Comment } from '../../types/Comment';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const {
    body,
    name,
    email,
  } = comment;

  return (
    <div className="CommentInfo">
      <div className="CommentInfo__title is-flex is-align-items-center">
        <strong className="CommentInfo__name mr-1">
          {name}
        </strong>

        by

        <a
          className="CommentInfo__email button is-primary is-light ml-1"
          href={`mailto:${email}`}
        >
          {email}
        </a>
      </div>
      <p className="CommentInfo__body is-size-6">
        {body}
      </p>
    </div>
  );
};
