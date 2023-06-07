import { Comment } from '../../types/Comment';

interface CommentInfoProps {
  postComment: Comment;
}

export const CommentInfo: React.FC<CommentInfoProps> = ({ postComment }) => {
  const {
    name,
    email,
    body,
  } = postComment;

  return (
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">{name}</strong>

        {' by '}

        <a
          className="CommentInfo__email"
          href={`mailto:${email}`}
        >
          Telly_Lynch@karl.co.uk
        </a>
      </div>

      <div className="CommentInfo__body">
        {body}
      </div>
    </div>
  );
};
