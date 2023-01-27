import { Comment } from '../../types/Comment';

interface CommentInfoProps {
  comment: Comment;
}

export const CommentInfo = ({ comment }: CommentInfoProps) => {
  const { name, email, body } = comment;

  return (
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">{name}</strong>

        {' by '}

        <a className="CommentInfo__email" href={email}>
          {email}
        </a>
      </div>

      <div className="CommentInfo__body">{body}</div>
    </div>
  );
};
