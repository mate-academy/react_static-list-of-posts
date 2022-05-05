import { Comment } from '../../types/Comment';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = (props) => {
  const {
    comment,
  } = props;

  return (
    <>
      <span className="comment-info__name" data-cy="comment-name">
        {comment.name}
      </span>
      <p className="comment-info__body" data-cy="comment-body">
        {comment.body}
      </p>
      <a className="comment-info__link" data-cy="comment-email" href={`mailto:${comment.email}`}>Email</a>
    </>
  );
};
