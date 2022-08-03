import { Comment } from '../../types/Comments';

type Props = {
  comment: Comment
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const {
    name,
    email,
    body,
  } = comment;

  return (
    <>
      <div className="CommentInfo__title">
        <h3 className="CommentInfo__name">{name}</h3>

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
      <br />
    </>
  );
};
